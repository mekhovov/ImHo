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

	}

	ICore.rotateCanvas = function() {

		var w = ICore.getCanvas().width;
		var h = ICore.getCanvas().height;

		ICore.getCanvas().width = h;
		ICore.getCanvas().height = w;

	}

}
