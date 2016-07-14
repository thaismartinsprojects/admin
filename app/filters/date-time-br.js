'use strict';

angular.module('adminThaisMartins')
.filter('dateTimeBr', function() {

    return function(input) {

        if(typeof input == 'undefined') return '';

        moment.locale('pt-br');
        return moment(new Date(input)).calendar(null, {sameElse: 'DD/MM/YYYY - H:mm'});
    }
});