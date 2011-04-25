/*
 * @author Artyom Deryavka
 * @object registration/(sign in) form
 **/
var RegForm = {

    bForgotPassword: false,


    /**
     * @method that drawing check box for forgot password
     *         using Raphael library
     */
    drawCheckBox: function(){
        // draw checkbox rect
        checkBox = Raphael(document.getElementById("forgot"), 12, 12);
        square = checkBox.rect(0, 0, 12, 12, 1);
        square.attr({fill: '#364a50'});
        // provides checkbox working
        $('#forgot').toggle(function(){
            // draw tick
            sign = checkBox.path("M2 4L4 6L5 9L8 6L8 4L11 0");
            sign.attr({fill: '#384c52', stroke: '#f7d227'});
            // change value of checkbox
            RegForm.bForgotPassword = true;
            // hide password input
            $('input#password').slideUp();
            $('#er_password').hide();
            $('label#lb_password').text('Insructions will be sent to this email').fadeIn();
            // set new validation rules
            aEmailRules = Array({
                field:'email',
                rule:['minLength=1','email','maxLength=130']
            });
            aPassRules = Array ({
                field:'password',
                rule:['']
            });
            aAllRules = Array(aEmailRules[0], aPassRules[0]);
            // Update events for form elements
            RegForm.setEventsErrorSpan(aAllRules);
            RegForm.setEventsForChecking(aEmailRules, aPassRules);
            RegForm.setEventForSignInButton(aAllRules, callbackSI);
        },
        function(){
            // remove tick
            $(sign.node).remove();
            // change value of checkbox
            RegForm.bForgotPassword = false;
            // show password input
            $('input#password').slideDown();
            $('label#lb_password').text('Password:').fadeIn();
            $('#er_password').fadeIn();
            // set new validation rules
            aEmailRules = Array ({
                field:'email',
                rule:['minLength=1','email','maxLength=130']
            });
            aPassRules  = Array ({
                field:'password',
                rule:['minLength=1']
            });
            aAllRules   = Array (aEmailRules[0], aPassRules[0]);
            // Update events for form elements
            RegForm.setEventsErrorSpan(aAllRules);
            RegForm.setEventsForChecking(aEmailRules, aPassRules);
            RegForm.setEventForSignInButton(aAllRules, callbackSI);
        });
    },

    /**
     * @method that checking entered data && enters errors into
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
     * @params array of all validation rules
     */
    setEventsErrorSpan: function(aAllRules){
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
     * @params array of validation email field
     *         array of validation password field
     *         array of validation conf_password field
     */
    setEventsForChecking: function(aEmailRules, aPassRules, aConfirm){
        $('input#email').blur(function(){
            RegForm.chekData(aEmailRules);
        });
        $('input#password').blur(function(){
            RegForm.chekData(aPassRules);
        });
        $('input#conf_password').blur(function(){
            RegForm.chekData(aConfirm);
        });
    },

    /**
     * @method that set events for Sign in button
     * @params array of all validation rules
     *         callback function
     */
    setEventForSignInButton: function(aAllRules, callback){
            $('#regUser').click(function(){
                bValidationAll = RegForm.chekData(aAllRules);
                if (bValidationAll) {
                    callback();
                    $('#regFormMainBlock').html('');
                }
            });
    },

    /**
     * @method that change Role of form 'Sign in' to 'Registration' one
     */
    changeFormRoleToReg: function () {
         // render new tempalte
         $('.modalWindow').html(Jaml.render('form_register'));
         // draw Create account button
         drawButton ("Create account", "regUser");
         // set new object for closing
         Modal.setObjClosing('#regFormMainBlock', '.modalClose');
         // set validation rules
         var aEmailRules = Array({
             field:'email',
             rule:['minLength=1','email','maxLength=130']
         });
         var aPassRules = Array ({
             field:'password',
             rule:['minLength=1']
         });
         var aConfirm = Array ({
             field:'conf_password',
             rule:['confirms#password']
         });
         var aAllRules = Array(aEmailRules[0], aPassRules[0], aConfirm[0]);
         // set events for new elements
         RegForm.setEventsErrorSpan(aAllRules);
         RegForm.setEventsForChecking(aEmailRules, aPassRules, aConfirm);
         RegForm.setEventForSignInButton(aAllRules, callbackCA);
    }

}

