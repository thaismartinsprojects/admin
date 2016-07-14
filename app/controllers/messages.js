'use strict';

angular.module('adminThaisMartins')
.controller('MessagesController', ['$scope', function ($scope) {

    $scope.visibleSearch = false;

    $scope.openNewMessage = function() {
        angular.element('#messages').modal({backdrop: 'static', keyboard: false});
    };

    $scope.openMessage = function() {
        angular.element('#messages').modal({backdrop: 'static', keyboard: false});
    };

    $scope.sendMessage = function() {
        
    };

    $scope.showSearch = function() {
        $scope.visibleSearch = !$scope.visibleSearch;
    };
}]);
