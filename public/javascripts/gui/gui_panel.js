var GUI_Panel = function() {

	var id = Config.PANEL;
	var panel = $('#' + id);

	GUI.resetWindowPanel = function() {

		panel.html('');
		panel.show();

	}

	GUI.createWindowPanel = function(title) {

		new Window(id, panel.width(), 20, title).create('window-title');

		panel.append('<div class="clear"></div>');
		panel.draggable({'zIndex': 9999});

	}

	panel.hide();

}
