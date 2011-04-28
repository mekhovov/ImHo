var Panel_Eraser = function() {

	var id = Config.PANEL;
	var panel = $('#' + id);

	GUI.createPanelEraser = function() {

		GUI.resetWindowPanel();

		var w = panel.width() - 10;

		new TrackBar(id, w, 10, {

			'mouseup': function(value) {

				ICore.getTool().setSize(value);

			}

		}, ICore.getTool().getSize()).create('trackbar');

		GUI.createWindowPanel('Eraser');

	}

}
