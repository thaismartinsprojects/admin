'use strict';

angular.module('adminThaisMartins')
.directive('file', function() {
    return {
        require:"ngModel",
        scope: { onSelect: '&', work: '&' },
        restrict: 'AE',
        link: function($scope, elem, attrs, ngModel){

            var isMultiple = attrs.multiple || false;

            var clickHandler = function() {
                input.trigger('click');
            };
            var getFilesName = function(files) {

                var names = '';
                if(files.length > 1) {
                    for(var i in files)
                        if(files[i] instanceof File)
                            names += files[i].name + ', ';
                    names = names.substring(0, 30) + '...';
                } else names = files[0].name;

                return names;
            };


            var changeFilesHandler = function(event){
                var files = event.target.files;
                if(files.length > 1)
                    ngModel.$setViewValue(files);
                else
                    ngModel.$setViewValue(files[0]);

                text.html(getFilesName(files));

                $scope.$apply();
                $scope.onSelect({model: attrs.id});
            };

            var div = $('<div></div>')
                .addClass('input-file')
                .appendTo(elem);

            var text = $('<small></small>')
                        .html('Selecione um arquivo...')
                        .appendTo(div);

            var input = $('<input />')
                .addClass(attrs.classes)
                .attr('type', 'file')
                .attr('id', attrs.id)
                .attr('accept', attrs.types)
                .attr('multiple', isMultiple)
                .bind('change', changeFilesHandler)
                .appendTo(div);

            var span  = $('<span></span>')
                            .html('Escolher')
                            .bind('click', clickHandler)
                            .appendTo(div);

        }
    };
});