var Button = function(parent, width, height, title, fn) {

	var background;

	var svg = Raphael(parent, width, height);
	var cnv = svg.canvas;

	this.create = function(className) {

		drawBackground();
		drawTitle();
		setHoverEvent();
		setClickEvent();

		cnv.setAttribute('class', className);

	}

	var drawBackground = function() {

		background = svg.rect(0, 0, width, height);

		background.attr({

			'fill': '270-#EFF5FA-#E1EAF3:39.99-#D8E2EF:40.01-#EAF3FA',
			'stroke': '#BAC9DB'

		});

	}

	var drawTitle = function() {

    if (title.substr(-4, 4) == '.bmp') {

      svg.image(title, 0, 0, width, height);

    } else {

		svg.text(width / 2, height / 2, title).attr({

			'font-size': height * 0.52

		});

	}

	}

	var setHoverEvent = function() {

		$(cnv).hover(function() {

			background.attr({

				fill: '270-#FEF9F3-#FDDFBB:39.99-#FFCE64:40.01-#FFFFF0',
				stroke: '#FFB700'

			});

		}, function() {

			background.attr({

				fill: '270-#EFF5FA-#E1EAF3:39.99-#D8E2EF:40.01-#EAF3FA',
				stroke: '#BAC9DB'

			})

		});

	}

	var setClickEvent = function() {

		$(cnv).click(fn);

	}

}
