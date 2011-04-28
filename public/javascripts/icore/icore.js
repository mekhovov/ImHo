/**
 * General class of ICore engine
 */
var ICore = function() {

	// Include modules of the engine
	new ICore_Canvas();
	new ICore_Mouse();
	new ICore_Tool();
	new ICore_File();
	new ICore_History();
	new ICore_Helper();

}
