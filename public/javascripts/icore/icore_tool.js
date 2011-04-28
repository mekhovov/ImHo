var ICore_Tool = function() {

	var currentTool = new Object();

	ICore.getTool = function() {

		return currentTool;

	}

	ICore.setTool = function(tool) {

		currentTool = tool;

	}

}
