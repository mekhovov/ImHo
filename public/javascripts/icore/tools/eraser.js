var Eraser = function() {

	var size = 40;

	this.getSize = function() {

		return (size - 5) / 45;

	}

	this.setSize = function(value) {

		size = value * 45 + 5;

	}

	var setStyle = function() {

		ICore.getContext().globalCompositeOperation = 'copy';
		ICore.getContext().fillStyle = 'transparent';

	}

	var erase = function() {

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
		erase();

	}

	ICore.getCanvas().onmousemove = function() {

		if (ICore.mouseDragged()) {

			erase();
			
		}

	}

	ICore.getCanvas().onmouseup = function() {

		ICore.getContext().restore();

	}

}
