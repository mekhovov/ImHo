var TrackBar = function(parent, width, height, fn, init) {

	var slider;

	var svg = Raphael(parent, width, height);
	var cnv = svg.canvas;

	this.create = function(className) {

		drawBackground();
		drawSlider();
		setHoverEvent();
		setDragEvent();

		cnv.setAttribute('class', className);

	}

	var drawBackground = function() {

		svg.rect(0, 0, width, height).attr({

			'fill': '90-#F0F0F0-#EFEFEF:19-#EDEDED:20-#EDEDED:80-#EAEAEA:81-#E1E1E1',
			'stroke': '#F8F8F8'

		});

	}

	var drawSlider = function() {

		var h = height - 2;
		var w = h * 1.5;

		slider = svg.rect(1, 1, w, h);

		slider.attr({

			'fill': '90-#C0C0C4-#D5D5D8:44-#E9E9EB:45-#F1F1F2',
			'stroke': 'none',
			'cursor': 'pointer'

		});

	}

	var setHoverEvent = function() {

		$(cnv).hover(function() {

			slider.attr({

				'fill': '90-#9CCAE3-#A9DBF6:44-#D6EEFB:45-#DCF0FB'

			});

		}, function() {

			slider.attr({

				'fill': '90-#C0C0C4-#D5D5D8:44-#E9E9EB:45-#F1F1F2'

			})

		});

	}

	var setDragEvent = function() {

		var minX = (height - slider.attr('height')) / 2;
		var maxX = width - slider.attr('width') - minX;

		// Move slider to initial position
		if (init != null) {

			slider.attr('x', init * (maxX - minX) + minX);

		}

		var mousedown = function() {

			// Temporary disable drag'n'drop
			$('.ui-draggable').draggable({'disabled': true});

			this.startX = this.attr('x');

			// Custom function
			if (fn.mousedown != null) {

				fn.mousedown();

			}

		}

		var mousemove = function(dx) {

			this.currentX = this.startX + dx;

			if (this.currentX >= minX && this.currentX <= maxX) {

				this.value = (this.currentX - minX) / (maxX - minX);

				this.attr('x', this.currentX);

			}

			// Custom function
			if (fn.mousemove != null) {

				fn.mousemove(this.value);

			}

		}

		var mouseup = function() {

			// Custom function
			if (fn.mouseup != null) {

				fn.mouseup(this.value);

			}

			// Enable drag'n'drop
			$('.ui-draggable').draggable({'disabled': false});

		};

		// Set the drag event
		slider.drag(mousemove, mousedown, mouseup);

	}

}
