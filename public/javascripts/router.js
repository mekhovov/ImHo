var Router = function() {

	$.router(/^open=(.+)$/, function(m, path) {

		ICore.openImage(path);

	});

}
