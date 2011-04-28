var GUI_ColorPicker = function() {

	var id = Config.COLORPICKER;
	var colorpicker = $('#' + id);

	GUI.createWindowColorPicker = function() {

		new Window(id, colorpicker.width(), 20, 'ColorPicker')
			.create('window-title');

		colorpicker.append('<div class="clear"></div>');
		colorpicker.draggable({'zIndex': 9999});

	}

	new ColorPicker();

	GUI.createWindowColorPicker();

}
