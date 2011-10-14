var GUI_File = function() {

	var id = Config.FILE;
	var file = $('#' + id);

	GUI.createWindowFile = function() {

		new Window(id, file.width(), 20, 'File').create('window-title');

		file.append('<div class="clear"></div>');
		file.draggable({'zIndex': 9999});

	};

    new Button_Save_New();
	new Button_Save();


	GUI.createWindowFile();

};
