var Panel_Brush = function() {

	var id = Config.PANEL;
	var panel = $('#' + id);

	GUI.createPanelBrush = function() {

		GUI.resetWindowPanel();

		var w = panel.width() - 10;

		new TrackBar(id, w, 10, {

			'mouseup': function(value) {

				ICore.getTool().setOpacity(value);

			}

		}, ICore.getTool().getOpacity()).create('trackbar');

		new TrackBar(id, w, 10, {

			'mouseup': function(value) {

				ICore.getTool().setHardness(value);

			}

		}, ICore.getTool().getHardness()).create('trackbar');

		new TrackBar(id, w, 10, {

			'mouseup': function(value) {

				ICore.getTool().setSize(value);

			}

		}, ICore.getTool().getSize()).create('trackbar');

		GUI.createWindowPanel('Brush');

	}

}
