var ICore_Helper = function() {

	ICore.str2rgb = function(color) {

		color = color.replace(new RegExp('\s'), '');
		color = color.substring(4, color.length - 1);
		color = color.split(',', 3);

		return color;

	}

	ICore.str2rgba = function(color) {

		color = color.replace(new RegExp('\s'), '');
		color = color.substring(5, color.length - 1);
		color = color.split(',', 4);

		return color;

	}

	ICore.rgb2str = function(color) {

		color = color.join(',');
		color = 'rgb(' + color + ')';

		return color;

	}

	ICore.rgba2str = function(color) {

		color = color.join(',');
		color = 'rgba(' + color + ')';

		return color;

	}

	ICore.rgb2rgba = function(color, opacity) {

		color = ICore.str2rgb(color);
		color[3] = opacity;
		color = ICore.rgba2str(color);

		return color;

	}

	ICore.hex2rgb = function(color) {

		color = color.substr(1);
		color = [
			parseInt(color.substr(0, 2), 16),
			parseInt(color.substr(2, 2), 16),
			parseInt(color.substr(4, 2), 16)
		];
		color = color.join(',');
		color = 'rgb(' + color + ')';

		return color;

	}

	ICore.hsb2rgb = function(hue, saturation, brightness) {

		var r = 0;
		var g = 0;
		var b = 0;

		if (saturation == 0.0) {

			r = g = b = Math.floor(brightness * 255.0 + 0.5);

		} else {

			var h = (hue - Math.floor(hue)) * 6.0;
			var f = h - Math.floor(h);
			var p = brightness * (1.0 - saturation);
			var q = brightness * (1.0 - saturation * f);
			var t = brightness * (1.0 - (saturation * (1.0 - f)));

			switch (Math.floor(h)) {

				case 0:
					r = Math.floor(brightness * 255.0 + 0.5);
					g = Math.floor(t * 255.0 + 0.5);
					b = Math.floor(p * 255.0 + 0.5);
					break;

				case 1:
					r = Math.floor(q * 255.0 + 0.5);
					g = Math.floor(brightness * 255.0 + 0.5);
					b = Math.floor(p * 255.0 + 0.5);
					break;

				case 2:
					r = Math.floor(p * 255.0 + 0.5);
					g = Math.floor(brightness * 255.0 + 0.5);
					b = Math.floor(t * 255.0 + 0.5);
					break;

				case 3:
					r = Math.floor(p * 255.0 + 0.5);
					g = Math.floor(q * 255.0 + 0.5);
					b = Math.floor(brightness * 255.0 + 0.5);
					break;

				case 4:
					r = Math.floor(t * 255.0 + 0.5);
					g = Math.floor(p * 255.0 + 0.5);
					b = Math.floor(brightness * 255.0 + 0.5);
					break;

				case 5:
					r = Math.floor(brightness * 255.0 + 0.5);
					g = Math.floor(p * 255.0 + 0.5);
					b = Math.floor(q * 255.0 + 0.5);
					break;

			}

		}

		return 'rgb(' + r + ',' + g + ',' + b + ')';

	}

}
