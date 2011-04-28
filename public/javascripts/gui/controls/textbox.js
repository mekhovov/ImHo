var TextBox = function(parent, width, height) {

	var svg = Raphael(parent, width, height);
	var cnv = svg.canvas;

	var background, textfield;

	this.create = function(className) {

		drawBackground();
		drawTextField();
		setClickEvent();
		setKeypressEvent();

		cnv.setAttribute('class', className);

	}

	var drawBackground = function() {

		background = svg.rect(0, 0, width, height);

		background.attr({

			'fill': '#FFF',
			'stroke': '#000'

		});

	}

	var drawTextField = function() {

		textfield = svg.text(0, 0, '');

		textfield.attr({

			'font-size': height * 0.52

		});

	}

	var setClickEvent = function() {

		$(textfield).click(function() {

			alert('Focus in.');

		});

	}

	var setKeypressEvent = function() {

		$(document).keypress(function(event) {

			alert('Key pressed.');

//			textfield.node.innerHTML += event.keyCode;

		});

	}

}
