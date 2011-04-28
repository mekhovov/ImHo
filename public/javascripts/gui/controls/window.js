var Window = function(parent, width, height, title) {

	var svg = Raphael(parent, width, height);
	var cnv = svg.canvas;

	this.create = function(className) {

		drawBackground();
		drawTitle();

		cnv.setAttribute('class', className);

	}

	var drawBackground = function() {

		svg.rect(0, 0, width, height).attr({

			'fill': '270-#FEFEFF-#E3E8FD:25-#E7EBFD',
			'stroke': 'none'

		});

	}

	var drawTitle = function() {

		svg.text(width / 2, height / 2, title).attr({

			'fill': '#000',
			'font-size': height * 0.52

		});

	}

}
