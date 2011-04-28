var GUI_Toolbar = function() {

	var id = Config.TOOLBAR;
	var toolbar = $('#' + id);

	GUI.createWindowToolbar = function() {

		new Window(id, toolbar.width(), 20, 'Tool').create('window-title');

		toolbar.append('<div class="clear"></div>');
		toolbar.draggable({'zIndex': 9999});

	}

	new Button_Eraser();
	new Button_Brush();

	GUI.createWindowToolbar();

}
