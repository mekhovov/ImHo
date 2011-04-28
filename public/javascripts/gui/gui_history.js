var GUI_History = function() {

	var id = Config.HISTORY;
	var history = $('#' + id);

	GUI.createWindowHistory = function() {

		new Window(id, history.width(), 20, 'History').create('window-title');

		history.append('<div class="clear"></div>');
		history.draggable({'zIndex': 9999});

	}

	new Button_Undo();

	GUI.createWindowHistory();

}
