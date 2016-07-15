'use strict';

angular.module('adminThaisMartins')
.controller('UserController', ['$scope', '$rootScope', 'URI', 'ActMessagesService', 'UserService', function ($scope, $rootScope, URI, ActMessagesService, UserService) {

    $scope.visiblePass = false;
    $scope.user = {};

    $scope.showPass = function() {
        $scope.visiblePass = true;
    };

    UserService.get()
        .then(function(response) {
            $scope.user = response.data;
            if(!$scope.user.photo)
                $scope.user.thumbnail = 'public/images/user.png';
            else
                $scope.user.thumbnail = URI.API + '/files/users/' + $scope.user.photo;
        }, function(response) {
            $rootScope.doLogout();
        });

    $scope.save = function() {

        $rootScope.error = false;
        UserService.update($scope.user)
            .then(function(response) {

                var photo = $scope.user.photo;

                $scope.user = response.data;
                $scope.user.password = '';

                if(photo) {
                    var upload = new FormData;
                    upload.append('photo', photo);
                    UserService.upload(upload)
                        .then(function(response) {
                            $scope.user.thumbnail = URI.API + '/files/users/' + response.data.photo;
                        });
                }

                $rootScope.success = ActMessagesService.success.onSave;
            }, function(response) {
                $rootScope.error = ActMessagesService.error.onSave;
            });
    };
}]);
