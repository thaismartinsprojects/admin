'use strict';

angular.module("adminThaisMartins")
.directive("ngEnter", function() {
    return function(scope, element, attrs) {

        var keypressHandler = function(event) {

            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                });

                event.preventDefault();
            }
        };
        element.bind("keydown keypress", keypressHandler);
    };
});