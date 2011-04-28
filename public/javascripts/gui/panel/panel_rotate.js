var Panel_Rotate = function() {

	var id = Config.PANEL;
	var panel = $('#' + id);

	GUI.createPanelRotate = function() {

		GUI.resetWindowPanel();

		var w = (panel.width() - 3) / 2;

		new Button(id, w, 25, 'Clockwise', function() {

			ICore.getTool().rotate('+');

		}).create('button');

		new Button(id, w, 25, 'Anticlockwise', function() {

			ICore.getTool().rotate('-');

		}).create('button');

		GUI.createWindowPanel('Rotate');

	}

}
