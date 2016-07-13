'use strict';

angular.module('adminThaisMartins')
.controller('UserController', ['$scope', function ($scope) {

    $scope.visiblePass = false;

    $scope.showPass = function() {
        $scope.visiblePass = true;
    };
}]);
