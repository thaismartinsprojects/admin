'use strict';

angular.module("adminThaisMartins")
.directive("multipleList", function() {

    return {
        restrict: 'EA',
        require: '?ngModel',
        template: '<div class="multiple-list">' +
                    '<ul></ul>' +
                  '</div>',
        link:  function(scope, element, attrs) {

            var getModel = function(model) {
                var array = model;
                if(array.indexOf('.') > 0) {
                    var models = array.split('.');
                    array = scope;
                    for(var i in models) array = array[models[i]];
                }
                return array;
            };

            var model = getModel(attrs.ngModelList);

            var closeHandler = function() {
                var parent = $(this).closest('li');
                model = jQuery.grep(model, function( a ) {
                    return a !== parent.find('.value').html();
                });
                scope.$apply();
                parent.remove();
            };

            var keypressHandler = function(event) {
                if(event.which === 44 || event.which === 13) {

                    var li = $('<li></li>').html('<span class="value">' + this.value + '</span>');
                    $('<span></span>')
                        .addClass('remove')
                        .html('x')
                        .bind('click', closeHandler)
                        .appendTo(li);
                    li.appendTo($('.multiple-list ul'));

                    model.push(this.value);
                    scope.$apply();

                    this.value = '';
                    event.preventDefault();
                }
            };

            $('#multiple-option').bind("keydown keypress", keypressHandler);
        }
    };
});