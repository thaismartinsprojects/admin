'use strict';

angular.module('adminThaisMartins')
.controller('MessagesController', ['$scope', function ($scope) {

    $scope.openNewMessage = function() {
        angular.element('#messages').modal({backdrop: 'static', keyboard: false});
    };

    $scope.openMessage = function() {
        angular.element('#messages').modal({backdrop: 'static', keyboard: false});
    };

    $scope.sendMessage = function() {
        
    };
}]);
