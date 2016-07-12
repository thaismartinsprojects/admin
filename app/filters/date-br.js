'use strict';

angular.module('adminThaisMartins')
.filter('dateBr', function() {

    return function(input) {

        if(typeof input == 'undefined') return '';

        var date = input.split('T');
        return moment(date[0]).format('DD/MM/YYYY');
    }
});