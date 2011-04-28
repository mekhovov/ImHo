var ColorPicker_A = function(parent, size, fn, init) {

	var palette, hue, sliderPalette, sliderHue;

	var paletteX = size / 25;
	var paletteY = size / 25;
	var paletteW = size - paletteX * 2;
	var paletteH = size - paletteY * 2;

	var hueX = paletteX * 2 + paletteW;
	var hueY = paletteY;
	var hueW = paletteW / 11;
	var hueH = paletteH;

	var sliderPaletteR = hueW / 4;

	var sliderPaletteMinX = paletteX;
	var sliderPaletteMaxX = paletteX + paletteW;
	var sliderPaletteMinY = paletteY;
	var sliderPaletteMaxY = paletteY + paletteH;

	var sliderPaletteX = sliderPaletteMaxX;
	var sliderPaletteY = sliderPaletteMinY;

	var sliderHueW = hueW + hueW / 5;
	var sliderHueH = hueW / 2;
	var sliderHueR = sliderHueH / 2;

	var sliderHueMinY = hueY - sliderHueH / 2 - 1;
	var sliderHueMaxY = hueY + hueH - sliderHueH / 2 - 1;

	var sliderHueX = hueX - hueW / 10;
	var sliderHueY = sliderHueMaxY;

	var h = 0, s = 1, b = 1;

	var svgW = paletteX * 3 + paletteW + hueW;
	var svgH = size;

	var svg = Raphael(parent, svgW, svgH);
	var cnv = svg.canvas;

	this.create = function(className) {

		drawPalette();
		drawHue();
		drawSliderPalette();
		drawSliderHue();
		setDragEventPalette();
		setDragEventHue();

		cnv.setAttribute('class', className);

	}

	var drawPalette = function() {

		palette = svg.rect(paletteX, paletteY, paletteW, paletteH);

		palette.attr({

			'fill': '#F00',
			'stroke': 'none'

		});

		svg.rect(paletteX, paletteY, paletteW, paletteH).attr({

			'fill': '0-#FFF-#FFF',
			'opacity': 0,
			'stroke': 'none'

		});

		svg.rect(paletteX, paletteY, paletteW, paletteH).attr({

			'fill': '90-#000-#000',
			'opacity': 0,
			'stroke': 'none'

		});

	}

	var drawHue = function() {

		hue = svg.rect(hueX, hueY, hueW, hueH);

		hue.attr({

			'fill': '90-#F00-#FF0-#0F0-#0FF-#00F-#F0F-#F00',
			'stroke': 'none'

		});

	}

	var drawSliderPalette = function() {

		sliderPalette = svg
			.circle(sliderPaletteX, sliderPaletteY, sliderPaletteR);

		sliderPalette.attr({

			'fill': '#F00',
			'stroke': '#FFF',
			'stroke-width': '2px',
			'cursor': 'pointer'

		});

	}

	var drawSliderHue = function() {

		sliderHue = svg
			.rect(sliderHueX, sliderHueY, sliderHueW, sliderHueH, sliderHueR);

		sliderHue.attr({

			'fill': '#F00',
			'stroke': '#FFF',
			'stroke-width': '2px',
			'cursor': 'pointer'

		});

	}

	var setDragEventPalette = function() {

		var mousedown = function() {

			// Temporary disable drag'n'drop
			$('.ui-draggable').draggable({'disabled': true});

			this.startX = this.attr('cx');
			this.startY = this.attr('cy');

			// Custom function
			if (fn.mousedown != null) {

				fn.mousedown();

			}

		}

		var mousemove = function(dx, dy) {

			this.currentX = this.startX + dx;
			this.currentY = this.startY + dy;

			if (this.currentX >= sliderPaletteMinX
				&& this.currentX <= sliderPaletteMaxX) {

				s = (this.currentX - sliderPaletteMinX) /
					(sliderPaletteMaxX - sliderPaletteMinX);

				this.color = ICore.hsb2rgb(h, s, b);

				this.attr({

					'cx': this.currentX,
					'fill': this.color

				});

			}

			if (this.currentY >= sliderPaletteMinY
				&& this.currentY <= sliderPaletteMaxY) {

				b = 1 - (this.currentY - sliderPaletteMinY) /
					(sliderPaletteMaxY - sliderPaletteMinY);

				this.color = ICore.hsb2rgb(h, s, b);

				this.attr({

					'cy': this.currentY,
					'fill': this.color

				});

			}

			// Custom function
			if (fn.mousemove != null) {

				fn.mousemove(this.color);

			}

		}

		var mouseup = function() {

			// Custom function
			if (fn.mouseup != null) {

				fn.mouseup(this.color);

			}

			// Enable drag'n'drop
			$('.ui-draggable').draggable({'disabled': false});

		};

		// Set the drag event
		sliderPalette.drag(mousemove, mousedown, mouseup);

	}

	var setDragEventHue = function() {

		var mousedown = function() {

			// Temporary disable drag'n'drop
			$('.ui-draggable').draggable({'disabled': true});

			this.startY = this.attr('y');

			// Custom function
			if (fn.mousedown != null) {

				fn.mousedown();

			}

		}

		var mousemove = function(dx, dy) {

			this.currentY = this.startY + dy;

			if (this.currentY >= sliderHueMinY
				&& this.currentY <= sliderHueMaxY) {

				h = 1 - (this.currentY - sliderHueMinY) /
					(sliderHueMaxY - sliderHueMinY);

				this.color = ICore.hsb2rgb(h, s, b);

				var sliderHueColor = 'hsl(' + h * 360 + ',100,50)';

				this.attr({

					'y': this.currentY,
					'fill': sliderHueColor

				});

				palette.attr('fill', sliderHueColor);

				sliderPalette.attr('fill', this.color);

			}

			// Custom function
			if (fn.mousemove != null) {

				fn.mousemove(this.color);

			}

		}

		var mouseup = function() {

			// Custom function
			if (fn.mouseup != null) {

				fn.mouseup(this.color);

			}

			// Enable drag'n'drop
			$('.ui-draggable').draggable({'disabled': false});

		};

		// Set the drag event
		sliderHue.drag(mousemove, mousedown, mouseup);

	}

}
