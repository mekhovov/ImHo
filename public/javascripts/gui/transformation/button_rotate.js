var Button_Rotate = function() {

	new Panel_Rotate();

	var id = Config.TRANSFORMATION;
	var transformation = $('#' + id);

	GUI.createButtonRotate = function() {

		var w = (transformation.width() - 3) / 2;

		new Button(id, w, 25, 'Rotate', function() {

			ICore.setTool(new Rotate());

			GUI.createPanelRotate();

		}).create('button');

	}

	GUI.createButtonRotate();

}
