var Panel_Resize = function() {

	var id = Config.PANEL;
	var panel = $('#' + id);

	GUI.createPanelResize = function() {

		GUI.resetWindowPanel();

		var w = (panel.width() - 3) / 2;

		new Button(id, w, 25, 'Apply', function() {

			ICore.getTool().resize(100, 100);

		}).create('button');

		new TextBox(id, w, 25).create('textbox');

		GUI.createWindowPanel('Resize');

	}

}
