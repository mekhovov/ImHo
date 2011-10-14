var Button_Brush = function() {

	new Panel_Brush();

	var id = Config.TOOLBAR;
	var toolbar = $('#' + id);

	GUI.createButtonBrush = function() {

		var w = (toolbar.width() - 3) / 2;

		new Button(id, w, w, '/images/brush.bmp', function() {

			ICore.setTool(new Brush());

			GUI.createPanelBrush();

		}).create('button');

	}

	GUI.createButtonBrush();

}
