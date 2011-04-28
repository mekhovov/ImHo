var ICore_File = function() {

	var file = new Image();

	file.onload = function() {

		ICore.getContext().drawImage(file, 0, 0);

	}

	ICore.openImage = function(path) {

		file.src = path;

	}

	ICore.saveImage = function() {

		window.open(ICore.getCanvas().toDataURL());

	}

}
