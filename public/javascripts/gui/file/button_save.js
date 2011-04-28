var Button_Save = function() {

	var id = Config.FILE;
	var file = $('#' + id);

	GUI.createButtonSave = function() {

		var w = (file.width() - 3) / 2;

		new Button(id, w, w, 'S', function() {

			ICore.saveImage();

		}).create('button');

	}

	GUI.createButtonSave();

}
