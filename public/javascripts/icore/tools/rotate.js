var Rotate = function() {

	var angle = Math.PI / 2;
	var direction = '+';

	var setDirection = function(value) {

		direction = value;

	}

	var setStyle = function() {

		ICore.getContext().globalCompositeOperation = 'copy';

		switch (direction) {

			case '+':
				ICore.getContext().translate(ICore.getCanvas().width, 0);
				ICore.getContext().rotate(angle);
				break;

			case '-':
				ICore.getContext().translate(0, ICore.getCanvas().height);
				ICore.getContext().rotate(-angle);
				break;

		}

	}

	this.rotate = function(direction) {

		var image = new Image();

		image.onload = function() {

			ICore.rotateCanvas();
			GUI.resizeWindowCanvas();

			ICore.getContext().save();
			setStyle();
			ICore.getContext().drawImage(image, 0, 0);
			ICore.getContext().restore();

		}

		ICore.addHistory();

		setDirection(direction);

		image.src = ICore.getCanvas().toDataURL();

	}

	ICore.getCanvas().onmousedown = null;

	ICore.getCanvas().onmousemove = null;

	ICore.getCanvas().onmouseup = null;

}
