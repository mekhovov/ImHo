//*******************
//* load reg form
//*******************


function drawButton (text, element, button) {
        var signInButton = Raphael(document.getElementById(element), 160, 38);
        signInButton.rect(0, 0, 160, 38, 7);
        x = (160 / 2) - (element.length / 2);
        textOnButton=signInButton.text(x, 17, text);
        textOnButton.attr({font: '17px Geneva, Arial, Helvetica, sans-serif',
        opacity: 0.8, fill: 'black'});
    }


$(document).ready(function() {
    drawButton ("Upload Photo", "button_upload_photo");
    
    //load reg/sign in form
    $('#button_sign_in').click(function(){
        // rendering form template
        $('#forSignInForm').html(Jaml.render('form_sign_in'));
        // set modal window draggable
        Modal.setDraggable();
        // set objects closing modal window
        Modal.setObjClosing('#regFormMainBlock', '.modalClose');
        Modal.setObjClosing('#regFormMainBlock', '.modalOverlay');
        // defaul value of checkbox
        RegForm.bForgotPassword = false;
        // drawing form elements
        drawButton('Sign in', 'regUser');
        RegForm.drawCheckBox();
        $('#linkToRegistration').click(function(){
           RegForm.changeFormRoleToReg();
        });
        $('#linkToSignIn').click(function(){
           RegForm.changeFormRoleToReg();
        });
        //validation rules
        var aEmailRules = Array({field:'email', rule:['minLength=1','email','maxLength=130']});
        var aPassRules = Array ({field:'password', rule:['minLength=1']});
        var aAllRules = Array(aEmailRules[0], aPassRules[0]);
        // set events for error span
        RegForm.setEventsErrorSpan(aAllRules);
        // set events for checking single
        RegForm.setEventsForChecking(aEmailRules, aPassRules);
        //set event for sign on button

        // callback function for Sign in
        callbackSI = function (){
            var sValidEmail = $('#email').attr('value');
            var sValidPassword = $('#password').attr('value');
            var bForgot = RegForm.bForgotPassword;

            // TODO: temp test soap
            var userData = {
                user_email: sValidEmail,
                user_password: sValidPassword
            }
            var p = new SOAPClientParameters();
            p.add('sUserData', $.toJSON(userData));
            SOAPClient.invoke(soap_url, 'ModuleUserCheckItem', p, true, ModuleUserCheckItemCallback);

            function ModuleUserCheckItemCallback (soapRes) {
              alert('ModuleUserCheckItem res: ' + soapRes);
            };

        }

        // callback function for creating an account
        callbackCA = function (){
            var sValidEmail = $('#email').attr('value');
            var sValidPassword = $('#password').attr('value');
            var bForgot = RegForm.bForgotPassword;

            // TODO: temp test soap
            var userData = {
                user_email: sValidEmail,
                user_password: sValidPassword
            }
            var p = new SOAPClientParameters();
            p.add('sUserData', $.toJSON(userData));
            SOAPClient.invoke(soap_url, 'ModuleUserAddItem', p, true, ModuleUserAddItemCallback);

            function ModuleUserAddItemCallback (soapRes){
              alert('ModuleUserAddItem res: ' + soapRes);
            };
        }

        RegForm.setEventForSignInButton(aAllRules, callbackSI);
    });

    //load upload form
    $('#button_upload_photo').click(function(){
        // rendering form template
        $('#forSignInForm').html(Jaml.render('form_upload'));
        // set modal window draggable
        Modal.setDraggable();
        // set objects closing modal window
        Modal.setObjClosing('#regFormMainBlock', '.modalClose');
        Modal.setObjClosing('#regFormMainBlock', '.modalOverlay');
        // default value of checkbox
        UplForm.bForgotPassword = false;
        // drawing form elements
        UplForm.drawUploadButton();
        // set events for error span
        UplForm.setEventsErrorSpan();
        // set events for checking single
        UplForm.setEventsForChecking();

        // set style for input[type=file]
        $("input[type=file]").filestyle({
            image: "images/browse.jpg",
            imageheight : 32,
            imagewidth : 94,
            width : 226
         });

        // showing mini when input[type=file] is changed
        $('input[type=file]').change(function() {
 	    var options = {
  		url: "http://imhoed.pp.ua/_php_core/create_mini.php",//address for server script
  		success: showResponse  //function when AJAX response comes
            };
            $('#uplForm').ajaxSubmit(options);//AJAX submit form with options above
        });

	//call when AJAX response comes
        function showResponse(responseText, statusText)  {
            $('#mini').html('<img id="miniature" src="'+responseText+'"/>');
        }

        //set event for sign on button
        UplForm.setEventForSignInButton(function(){
            var sValidEmail = $('#email').attr('value');
            var sValidPassword = $('#password').attr('value');
            var bForgot = RegForm.bForgotPassword;


        /*!!!!!!!! here we can send soap request to the server !!!!!!!*/
        //test alert
        alert("email: " + sValidEmail + "   |    pass: " + sValidPassword + "   |    forgot: " + bForgot);
        });
    });
});

