var ICore_Canvas = function() {

	var canvas = document.getElementById(Config.CANVAS);
	var context = canvas.getContext('2d');

	ICore.getCanvas = function() {

		return canvas;

	}

	ICore.getContext = function() {

		return context;

	}

	ICore.resizeCanvas = function(width, height) {

		ICore.getCanvas().width = width;
		ICore.getCanvas().height = height;

		GUI.resizeWindowCanvas();

	}

	ICore.rotateCanvas = function() {

		var width = ICore.getCanvas().width;
		var height = ICore.getCanvas().height;

		ICore.getCanvas().width = height;
		ICore.getCanvas().height = width;

	}

}
