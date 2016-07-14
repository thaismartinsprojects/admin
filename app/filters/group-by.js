'use strict';

angular.module('adminThaisMartins')
.filter('groupBy', function() {

    return function(list, field) {

        if(typeof list == 'undefined') return false;

        var listGrouped = [];
        angular.forEach(list, function(item, key) {
            
            if (typeof listGrouped[item[field]] == 'undefined')
                listGrouped[item[field]] = [];

            listGrouped[item[field]].push(item);
        });

        return listGrouped;
    }
});