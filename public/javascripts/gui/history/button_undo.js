var Button_Undo = function() {

	var id = Config.HISTORY;
	var history = $('#' + id);

	GUI.createButtonUndo = function() {

		var w = (history.width() - 3) / 2;

		new Button(id, w, w, 'U', function() {

			ICore.undo();

		}).create('button');

	}

	GUI.createButtonUndo();

}
