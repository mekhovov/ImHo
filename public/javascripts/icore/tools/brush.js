var Brush = function() {

	var size = 25;
	var hardness = 0.5;
	var opacity = 0.8;

	var getColorA = function() {

		colorA = ICore.str2rgba(colorA);
		colorA[3] = opacity;
		colorA = ICore.rgba2str(colorA);

		return colorA;

	}

	var colorA = 'rgba(255,0,0,' + opacity + ')';

	var getColorB = function() {

		colorB = ICore.str2rgba(colorA);
		colorB[3] = 0;
		colorB = ICore.rgba2str(colorB);

		return colorB;

	}

	var colorB = getColorB();

	this.getSize = function() {

		return (size - 10) / 40;

	}

	this.setSize = function(value) {

		size = value * 40 + 10;

	}

	this.getHardness = function() {

		return hardness / 0.9;

	}

	this.setHardness = function(value) {

		hardness = value * 0.9;

	}

	this.getOpacity = function() {

		return (opacity - 0.02) / 0.98;

	}

	this.setOpacity = function(value) {

		opacity = value * 0.98 + 0.02;
		colorA = getColorA();

	}

	this.getColor = function() {

		return colorA;

	}

	this.setColor = function(value) {

		colorA = ICore.rgb2rgba(value, opacity);
		colorB = getColorB();

	}

	var setStyle = function() {

		var gradient = ICore.getContext().createRadialGradient(
			ICore.mouseX(), ICore.mouseY(),
			size / 2 * hardness,
			ICore.mouseX(), ICore.mouseY(),
			size / 2
		);

		gradient.addColorStop(0, colorA);
		gradient.addColorStop(1, colorB);

		ICore.getContext().fillStyle = gradient;

	}

	var draw = function() {

		ICore.getContext().beginPath();
		ICore.getContext().arc(
			ICore.mouseX(), ICore.mouseY(),
			size / 2, 0, Math.PI * 2
		);
		ICore.getContext().closePath();
		ICore.getContext().fill();

	}

	ICore.getCanvas().onmousedown = function() {

		ICore.addHistory();

		ICore.getContext().save();

		setStyle();
		draw();

	}

	ICore.getCanvas().onmousemove = function() {

		if (ICore.mouseDragged()) {

			setStyle();
			draw();

		}

	}

	ICore.getCanvas().onmouseup = function() {

		ICore.getContext().restore();

	}

}
