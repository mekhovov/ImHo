var GUI_Transformation = function() {

	var id = Config.TRANSFORMATION;
	var transformation = $('#' + id);

	GUI.createWindowTransformation = function() {

		new Window(id, transformation.width(), 20, 'Transformation')
			.create('window-title');

		transformation.append('<div class="clear"></div>');
		transformation.draggable({'zIndex': 9999});

	}

	new Button_Rotate();
	new Button_Resize();

	GUI.createWindowTransformation();

}
