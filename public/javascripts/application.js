jQuery.ajaxSetup({
  'beforeSend': function (xhr) {
    xhr.setRequestHeader("Accept", "text/javascript")
  }
 });

// Bind
$(document).ready(function(){
  $("span.like-button").click (function() {
		var form = $(this).parents("form.new_like");
		$.post(form.attr("action"), form.serialize(), null, "script");
		return false;
	})
});