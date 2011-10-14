var TextBox = function(parent, width, height) {

	var background, textfield;

	var svg = Raphael(parent, width, height);
	var cnv = svg.canvas;

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

		textfield = svg.text(height, height / 2, 'Test');

		textfield.attr({

			'font-size': height * 0.52

		});

	}

	var setClickEvent = function() {

		var focus = function() {

			document.onkeypress = function(event) {

				if (event.isChar) {

					textfield.node.firstChild.firstChild.data += String
					.fromCharCode(event.charCode);

	}

			}

		}

		svg.set().push(background, textfield).click(focus);

	}

	var setKeypressEvent = function() {

	}

}
