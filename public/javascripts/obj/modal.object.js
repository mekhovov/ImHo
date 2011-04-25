/*
 * @author Artyom Deryavka
 * @object driving modal window
**/
var Modal = {

    /**
     * @method that sets modal window draggable
     */
    setDraggable: function(){
        $('.modalWindow').draggable({ stack: "body" });
    },

    /**
     * @method that sets elements for closing modal window
     * @params string element where modal window is inserted
     *         string element that will close modal window
     */
    setObjClosing: function(sInsertElem, sClosingElem){
        //if sClosingElem is clicked
        $(sClosingElem).click(function(){
            $(sInsertElem).html('');
        });
        $(document).keyup(function(event) {
	//if ESC is pressed
            if (event.keyCode == 27) {
                $(sInsertElem).html('');
            }
        });
    }
}