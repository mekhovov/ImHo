var ColorPicker = function() {

	var id = Config.COLORPICKER;
	var colorpicker = $('#' + id);

	GUI.createColorPicker = function() {

		new ColorPicker_A(id, 225, {

			'mouseup': function(color) {

				var tool = ICore.getTool();

				if (tool instanceof Brush) {

					tool.setColor(color);

				}

			}

		}).create('colorpicker');

	}

	GUI.createColorPicker();

}
