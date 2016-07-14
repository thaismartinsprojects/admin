'use strict';

angular.module('adminThaisMartins')
.factory('ValidateService', function () {

    var RESOURCE = {
        'email': {
            'regex': /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
            'message': 'Utilize um email válido.',
            'checkMessage': ''
        },
        'password': {
            'regex': /^([_a-zA-Z0-9-!?@%]{6,})$/,
            'message': 'Sua senha precisa ter no mínimo 6 caracteres.',
            'checkMessage': 'Verifique a senha digitada.'
        },
        'cpf': {
            'regex': /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/,
            'message': 'Utilize um CPF válido.',
            'checkMessage': ''
        },
        'cnpj': {
            'regex': /^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}$/,
            'message': 'Utilize um CNPJ válido.',
            'checkMessage': ''
        },
        'cpf-cnpj': {
            'regex': /^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}|[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/,
            'message': 'Utilize um CPF ou CNPJ válido.',
            'checkMessage': ''
        }
    };


    return {
        isEmpty: function(value) {

            var objectIsEmpty = function (obj) {
                for (var i in obj)
                    if (obj.hasOwnProperty(i) && obj[i] != '')
                        return false;
                return true;
            };

            if(typeof value == 'undefined') return true;
            else if(angular.isArray(value)) return (value.length < 1);
            else if(angular.isObject(value)) return objectIsEmpty(value);
            else return (value == '') || (value == null);
        },
        isValid: function(type, value) {

            var regexCheck = true;
            if(RESOURCE[type].regex != '')
                regexCheck = RESOURCE[type].regex.test(value);

            return !this.isEmpty(value) && regexCheck;
        },
        getMessage: function(type) {
            return RESOURCE[type].message;
        },
        getCheckMessage: function(type) {
            return RESOURCE[type].checkMessage;
        }
    };
});