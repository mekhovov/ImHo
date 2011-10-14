var Button_Save_New = function() {

	var id = Config.FILE;
	var file = $('#' + id);

	GUI.createButtonSave = function() {

		var w = (file.width() - 3) / 2;

		new Button(id, w, w, '/images/save_new.bmp', function() {

			ICore.saveImage(true);


		}).create('button');

	};

	GUI.createButtonSave();

};
