var ICore_File = function() {

	var file = new Image();

	file.onload = function() {

		ICore.resizeCanvas(file.width, file.height);

    GUI.resizeWindowCanvas();

		ICore.getContext().drawImage(file, 0, 0);

	};

	ICore.openImage = function(path) {

		file.src = path;

	};

	ICore.saveImage = function(bNewImg) {

        var url = '/attaches/raw';
      var request = new XMLHttpRequest();
      request.open("POST",  url, true); // open asynchronous post request
        var dataURL = canvas.toDataURL("image/png");


        var photoID = $("#photo_id").html();
        var userID = $("#user_id").html();
        request.send("<edited_photo><photo>" + dataURL.replace(/^data:image\/(png|jpg);base64,/, "") + "</photo><photo_id>" + photoID + "</photo_id><user_id>" + userID + "</user_id><new_img>" + bNewImg + "</new_img></edited_photo>");

        $(".save_msg").html("<h2>Image saved.</h2>");
	}
	$.Shortcuts.add({

		'type': 'down',
		'mask': 'Ctrl+S',
		'handler': function() {

			ICore.saveImage(false);

	}

    }).start();

}
