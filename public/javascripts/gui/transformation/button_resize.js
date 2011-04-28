var Button_Resize = function() {

	new Panel_Resize();

	var id = Config.TRANSFORMATION;
	var transformation = $('#' + id);

	GUI.createButtonResize = function() {

		var w = (transformation.width() - 3) / 2;

		new Button(id, w, 25, 'Resize', function() {

			ICore.setTool(new Resize());

			GUI.createPanelResize();

		}).create('button');

	}

	GUI.createButtonResize();

}
