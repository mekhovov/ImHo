var Resize = function() {

	var ratioX = 1;
	var ratioY = 1;

	var setRatioX = function(width) {

		ratioX = width / ICore.getCanvas().width;

	}

	var setRatioY = function(height) {

		ratioY = height / ICore.getCanvas().height;

	}

	var setStyle = function() {

		ICore.getContext().globalCompositeOperation = 'copy';
		ICore.getContext().scale(ratioX, ratioY);

	}

	this.resize = function(width, height) {

		var image = new Image();

		image.onload = function() {

			ICore.resizeCanvas(width, height);
			GUI.resizeWindowCanvas();

			ICore.getContext().save();
			setStyle();
			ICore.getContext().drawImage(image, 0, 0);
			ICore.getContext().restore();

		}

		ICore.addHistory();

		setRatioX(width);
		setRatioY(height);

		image.src = ICore.getCanvas().toDataURL();

	}

	ICore.getCanvas().onmousedown = null;

	ICore.getCanvas().onmousemove = null;

	ICore.getCanvas().onmouseup = null;

}
