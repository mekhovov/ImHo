function filmstrip (){
  var totWidth=0;
  var positions = new Array();

  $('#slides .slide').each(function(i){
    positions[i]= totWidth;
    totWidth += $(this).width();
  });

  $('#slides').width(totWidth);
  $('#menu ul').width((positions.length+1)*100);
    
  $('#menu ul li a').click(function(e){
    $('li.menuItem').removeClass('act').addClass('inact');
    $(this).parent().addClass('act');

    var pos = $(this).parent().prevAll('.menuItem').length;
    $('#slides').stop().animate({marginLeft:-positions[pos]+'px'}, 450);
    e.preventDefault();
  });

  $('#menu ul li.menuItem:first').addClass('act').siblings().addClass('inact');
	$("#menu ul li a").getCommentsWithAjax();
};

jQuery.ajaxSetup({
  'beforeSend': function (xhr) {xhr.setRequestHeader("Accept", "text/javascript")}   
});  

jQuery.fn.getCommentsWithAjax = function() {
  this.click(function() {
    setActiveImgIdtoField();
    $.get($("a.comments").attr("href"), $("#comment_attach_id").serialize(), null, "script");
    return false;
  })
};

jQuery.fn.image = function(src){
  return this.each(function(){
    var i = new Image();
    i.src = src;
    this.appendChild(i);
  });
};

jQuery.fn.show_full_size = function(){
  $("#preview").html("");
	$("#preview").addClass("act");
  $("#preview").image($(this).attr("alt"));
	$("#preview img").attr("id", $(this).attr("id"));
};

function setActiveImgIdtoField () {
	var id = $(".act img").attr("id");
	if (id == undefined || id == "") {
		$("img.gallery_photo").each(function(){
			if ($(this).css("opacity") == "1") {
	  	id = $(this).attr("id");}
		})}
	$("#comment_attach_id").val(id);
	return id;
};


function gup( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}


$(document).ready(function(){ 
  $("form#new_comment").submit(function(){
    setActiveImgIdtoField();
    $.post($(this).attr('action'), $(this).serialize(), null, "script");   
    return false; 
	});
	
  $("#more_attaches").click(function(){
    var name = $(".attach:last input").attr("name"); 
    var num = name.match(/\[(\d+)\]\[.+\]$/)[1];

    $(".attach:last").after($(".attach:last").clone());
    $(".attach:last input").attr("name", name.replace(num, parseInt(num)+1));
		$(".attach:last input").val("");
    $(".attach:last").show();
    return false;
  });
 
  $(".edit_img").click(function(){
    $("#thumb_" + $(this).attr("id")).hide();
    $("#attach_" + $(this).attr("id")).show();
    return false;
  });

	$("#thumbnails img").click(function(){
    $(this).show_full_size();
		return false;
	});

  var photo_param = gup( 'photo' );
  if (photo_param == "")
  $("#thumbnails img:first").show_full_size();
  else
    $("#thumbnails #" + photo_param).show_full_size();

    setActiveImgIdtoField();
  //$.get($("a.comments").attr("href"), $("#comment_attach_id").serialize(), null, "script");
  $("#thumbnails img").getCommentsWithAjax();
  //filmstrip();
  //$('#gallery').spacegallery({loadingClass: 'loading'});
});