'use strict';

angular.module('adminThaisMartins')
.controller('UserController', ['$scope', '$rootScope', 'ErrorMessagesService', 'UserService', function ($scope, $rootScope,  ErrorMessagesService, UserService) {

    $scope.visiblePass = false;
    $scope.user = {};

    $scope.showPass = function() {
        $scope.visiblePass = true;
    };

    UserService.get()
        .then(function(response) {
            $scope.user = response.data;
        }, function(response) {
            console.log(response);
        });

    $scope.save = function() {
        $rootScope.error = false;
        UserService.update($scope.user)
            .then(function(response) {
                $scope.user = response.data;
            }, function(response) {
                $rootScope.error = ErrorMessagesService.onSave;
            });
    };
}]);
