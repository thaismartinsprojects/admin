'use strict';

angular.module('adminThaisMartins')
.filter('adminThaisMartins', ['$filter', function($filter) {

    return function(list, field) {

        if(typeof list == 'undefined') return false;
        var listOrderded = [];

        for(var index in list) {
            if (list.hasOwnProperty(index))
                listOrderded[index] = $filter('orderBy')(list[index], field);
        }

        return listOrderded;
    }
}]);