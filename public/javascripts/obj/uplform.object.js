/*
 * @author Artyom Deryavka
 * @object upload file form
 **/
var UplForm = {

    bForgotPassword: false,

    /**
     * @method that drawing Sign in button
     *         using Raphael library
     */
    drawUploadButton: function() {
        drawButton ("Upload", "regUser");
    },


    /**
     * @method that checking entered data && entered errors into
     *         special error spans with id='er_' + checking field name
     * @params array of validation rules
     * @return bool
     */

    chekData: function(rules){
        valid = ValidationData.run(rules);
        err=ValidationData.getErrArr();
        for (i in err){
            $('#er_'+i).html(err[i]);
        }
        return valid;
    },

    /**
     * @method that sets events for error spans
     */
    setEventsErrorSpan: function(){
        $('#regUser').mousedown(function(){
            bValidationAll = RegForm.chekData(aAllRules);
            if (!bValidationAll) {
                $("span[id^='er_']").css('font-size','13pt');
            }
        });
        $('#regUser').mouseup(function(){
            bValidationAll = RegForm.chekData(aAllRules);
            if (!bValidationAll) {
                $("span[id^='er_']").css('font-size','12pt');
            }
        });
    },

    /**
     * @method that sets events for checking single field
     */
    setEventsForChecking: function(){
        $('input#email').blur(function(){
            RegForm.chekData(aEmailRules);
        });
        $('input#password').blur(function(){
            RegForm.chekData(aPassRules);
        });
    },

    /**
     * @method that set events for Sign in button
     */
    setEventForSignInButton: function(callback){
                $('#regUser').click(function(){
            bValidationAll = RegForm.chekData(aAllRules);
            if (bValidationAll) {
                callback();
                $('#regFormMainBlock').html('');
            }
        });
    }
}

