var GUI_Canvas = function() {

	var canvas = $('#' + Config.CANVAS);
	var windowCanvas = canvas.parent();

	GUI.resetWindowCanvas = function() {

		windowCanvas[0].removeChild(windowCanvas[0].firstChild);
		windowCanvas[0].removeChild(windowCanvas[0].lastChild);

	}

	GUI.createWindowCanvas = function() {

		var w = canvas.width();

		new Window(windowCanvas[0], w, 20, 'Image').create('window-title');

		windowCanvas.width(w);
		windowCanvas.append('<div class="clear"></div>');
		windowCanvas.draggable({'zIndex': 9999});

	}

	GUI.resizeWindowCanvas = function() {

		GUI.resetWindowCanvas();
		GUI.createWindowCanvas();

	}

	GUI.createWindowCanvas();

}
