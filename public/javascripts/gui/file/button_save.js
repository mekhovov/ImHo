var Button_Save = function() {

	var id = Config.FILE;
	var file = $('#' + id);

	GUI.createButtonSave = function() {

		var w = (file.width() - 3) / 2;

		new Button(id, w, w, '/images/save.bmp', function() {

			ICore.saveImage(false);

		}).create('button');

	};

	GUI.createButtonSave();

};
