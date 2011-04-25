/*
 * @author Artyom Deryavka
 * @object validation form on the client side
 **/
var ValidationData = {
        /**
	 * @property which shows whether form was filled correctly
         * @type boolean
	 */
	bValid:  true,

        /**
         * @property which contains the array of errors after checking
         * @type array
         */
	aErrors: new Array(),
	
        /**
         * @method which receives the array of validation rules,
         *         parse it, and calls necessary vallidation methods
         * @params array of validation rules like:
         *
         *         [{field:'field1', rule:['rule1',...,'ruleN']},
         *           ...
         *          {field:'fieldN', rule:['rule1',...,'ruleN']}]
         *          
         *         where 'field1'..'fieldN' are 'id' attributes
         *               of form <input> that are being checked
         *               'rule1',...,'ruleN' are list of rules
         *               on which appropriate field is verified
         *               
         * @return boolean value of validation
         */
	run: function (aRules){
		ValidationData.bValid = true;
		ValidationData.aErrors = new Array();
		var sSetRule = '';
                // rules array parsing
		for (var i in aRules){
			for (var j in aRules[i]){
                                // get current field name
				if (j == 'field'){
					var sNameField = aRules[i][j];
					var sCheckField = jQuery.trim(
					$('#'+sNameField).attr('value'));
				}
                                // get validation rules of current field
				if (j == 'rule'){
					for (var k in aRules[i][j]){
						sSetRule = aRules[i][j][k];
                                                // call necessary vallidation
                                                // method for current rule
						ValidationData.callMethod (
							sSetRule,
							sNameField,
							sCheckField
						);
					}
				}
			}
		}
                return ValidationData.bValid;
	},

        /**
         * @method that parse value of every rule and calls
         *         appropriate method with necessary arguments
         * @params string of rule name,
         *         string of field name that is being checked,
         *         string of field value that was be entered
         */
	callMethod: function (sSetRule, sNameField, sCheckField){
                // parse rules with '='
		var regWithEqual = /^([a-z]+)=[1-9]([0-9]*)/i;
		if (regWithEqual.test (sSetRule)){
			var aWithEqual = sSetRule.split('=');
			    sSetRule   = aWithEqual[0];
			var iValue     = aWithEqual[1]*1;
		}
                // parse rules with '#' (e.g. confirmation password)
		var regWithConfirms = /^confirms#([0-9a-z]+)/i;
		if (regWithConfirms.test (sSetRule)){
			var aWithConfirms = sSetRule.split('#');
			    sSetRule      = aWithConfirms[0];
			var idConfElem    = aWithConfirms[1];
		}
                // switch necessary vallidation method
		switch (sSetRule){
			case 'email':
			ValidationData.email     (sNameField,
                                                  sCheckField);
			break;
			case 'maxLength':
			ValidationData.maxLength (sNameField,
                                                  sCheckField,
                                                  iValue);
			break;
			case 'minLength':
			ValidationData.minLength (sNameField,
                                                  sCheckField,
                                                  iValue);
			break;
			case 'confirms':
			ValidationData.confirms  (sNameField,
                                                  sCheckField,
                                                  idConfElem);
			break;
		}
	},

        /**
         * @method that verifies if in the <input> with id=sNameField
         *         data (sCheckField) entered by user were correct email address
         * @params string of field name,
         *         string of data entered by user in the field
         */
	email: function (sNameField, sCheckField){
var reg = /^[a-zà-ÿ]([a-z0-9à-ÿ\+_\-]+)(\.[a-z0-9à-ÿ\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/i;
		if (!(reg.test (sCheckField)) || (sCheckField.length > 130)){
			sError = 'invalid email';
                        erar = ValidationData.aErrors[sNameField];
                        if ((typeof erar == 'undefined') || (erar == ' ')){
                            ValidationData.aErrors[sNameField]=sError;
                        }
			ValidationData.bValid = false;	
		}
                else {
                    erar = ValidationData.aErrors[sNameField];
                    if ((typeof erar == 'undefined') || (erar == ' ')){
                        ValidationData.aErrors[sNameField] = ' ';
                    }
                }
	},

        /**
         * @method that verifies if in the <input> whith id=sNameField
         *         data (sCheckField) entered by user is shorter than iMaxLength
         * @params string of field name,
         *         string of data entered by user in the field,
         *         integer max length of data entered in the field
         */
	maxLength: function (sNameField, sCheckField, iMaxLength){
		if (sCheckField.length > iMaxLength){
			sError = 'max ';
			sError += iMaxLength + ' chars';
			erar = ValidationData.aErrors[sNameField];
                        if ((typeof erar == 'undefined') || (erar == ' ')){
                            ValidationData.aErrors[sNameField]=sError;
                        }
                       
			ValidationData.bValid = false;	
		}
                else {
                    erar = ValidationData.aErrors[sNameField];
                    if ((typeof erar == 'undefined') || (erar == ' ')){
                        ValidationData.aErrors[sNameField]=' ';
                    }
                }
	},

        /**
         * @method that verifies if in the <input> whith id=sNameField
         *         data (sCheckField) entered by user is longer than iMinLength
         * @params string of field name,
         *         string of data entered by user in the field,
         *         integer min length of data entered in the field
         */
	minLength: function (sNameField, sCheckField, iMinLength){
		if (sCheckField.length < iMinLength){
                        if (iMinLength == 1){
                            sError = 'required';
                        }
                        else{
                            sError = 'min ';
                            sError += iMinLength + ' chars';
                        }
			erar = ValidationData.aErrors[sNameField];
                        if ((typeof erar == 'undefined') || (erar == ' ')){
                            ValidationData.aErrors[sNameField]=sError;
                        }   
			ValidationData.bValid = false;	
		}
                else {
                    erar = ValidationData.aErrors[sNameField];
                    if ((typeof erar == 'undefined') || (erar == ' ')){
                        ValidationData.aErrors[sNameField]=' ';
                    }
                }

	},

        /**
         * @method that can check if the field with id=idConfElem confirms
         *         the field with id=sNameField
         * @params string of field name,
         *         string of data entered by user in the field,
         *         string of field name that must confirm the first field
         *
         */
	confirms: function (sNameField, sCheckField, idConfElem){
                var valConfElem = jQuery.trim($('#'+idConfElem).attr('value'));
		if (sCheckField != valConfElem){
			sError ='miss match';
			 erar = ValidationData.aErrors[sNameField];
                        if ((typeof erar == 'undefined') || (erar == ' ')){
                            ValidationData.aErrors[sNameField]=sError;
                        }
			ValidationData.bValid = false;		
		}
                else {
                    erar = ValidationData.aErrors[sNameField];
                    if ((typeof erar == 'undefined') || (erar == ' ')){
                        ValidationData.aErrors[sNameField]=' ';
                    }
                }
	},
        
        /**
         * @method that returns array of validation errors
         * @return array of validation errors
         */
	getErrArr: function (){
		return ValidationData.aErrors;
	}
}
