'use strict';

angular.module('adminThaisMartins')
.directive('uiBrDateMask', function() {
    return {
        require:"ngModel",
        restrict: 'AE',
        link: function($scope, element, attrs, ngModel) {

            ngModel.$formatters.push(function(value) {

                if(typeof value == 'undefined') return false;

                if(isDate(value))
                    value = moment(new Date(value)).format('DD/MM/YYYY');

                return value;
            });

            ngModel.$parsers.push(function(value) {

                if(typeof value == 'undefined') return false;
                value = value.toString().replace(/['"R$;:.,*\/?=\\-]/g, '');

                var regexNumber = /^\d+$/;
                if(regexNumber.test(value) && value.length == 8)
                    value = formatToDateDB(value);

                return value;
            });

            var isDate = function(date) {
                return date instanceof Date
                            || Object.prototype.toString.call(date) === '[object Date]'
                                || new Date(date) != 'Invalid date';
            };

            var formatToDateBr = function(date) {
                return date.replace(/^(\d{2})(\d{2})(\d{4})/,"$2/$1/$3");
            };

            var formatToDateDB = function(date) {
                date = formatToDateBr(date);
                return new Date(date);
            };

            var handlerKeypress = function() {

                var date = element.val();
                date.toString().replace(/\D/g, '');
                date = date.toString().replace(/['"R$;:.,*\/?=\\-]/g, '');
                date = date.substring(0, 8);

                date = date.replace(/\D/g,"");
                date = date.replace(/(\d{2})(\d)/,"$1/$2");
                date = date.replace(/(\d{2})(\d)/,"$1/$2");

                ngModel.$setViewValue(date);
                ngModel.$render();
            };

            element.bind('keydown keypress keyup', handlerKeypress);
        }
    };
});