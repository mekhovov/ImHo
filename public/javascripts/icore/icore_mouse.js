var ICore_Mouse = function() {

	var x = 0;
	var y = 0;
	var isDragged = false;

	ICore.mouseX = function() {

		return x;

	}

	ICore.mouseY = function() {

		return y;

	}

	ICore.mouseDragged = function() {

		return isDragged;

	}

	var updatePosition = function(event) {

		var wc = ICore.getCanvas().parentNode;

		x = event.pageX - wc.offsetLeft - wc.clientLeft;
		y = event.pageY - wc.offsetTop - wc.clientTop -
			wc.firstChild.getAttribute('height');

	}

	ICore.getCanvas().addEventListener('mouseover', function(event) {

		if (isDragged) {

			ICore.getContext().beginPath();

		}

	}, false);

	ICore.getCanvas().addEventListener('mouseout', function(event) {

		if (isDragged) {

			ICore.getContext().closePath();

		}

	}, false);

	ICore.getCanvas().addEventListener('mousedown', function(event) {

		// Temporary disable drag'n'drop
		$('.ui-draggable').draggable('disable');

		isDragged = true;
		updatePosition(event);

	}, false);

	ICore.getCanvas().addEventListener('mousemove', function(event) {

		if (isDragged) {

			updatePosition(event);

		}

	}, false);

	ICore.getCanvas().addEventListener('mouseup', function(event) {

		isDragged = false;

		// Enable drag'n'drop
		$('.ui-draggable').draggable('enable');

	}, false);

}
