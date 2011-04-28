var Button_Eraser = function() {

	new Panel_Eraser();

	var id = Config.TOOLBAR;
	var toolbar = $('#' + id);

	GUI.createButtonEraser = function() {

		var w = (toolbar.width() - 3) / 2;

		new Button(id, w, w, 'E', function() {

			ICore.setTool(new Eraser());

			GUI.createPanelEraser();

		}).create('button');

	}

	GUI.createButtonEraser();

}
