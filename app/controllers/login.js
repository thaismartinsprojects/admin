'use strict';

angular.module('adminThaisMartins')
.controller('LoginController', ['$scope', '$state', 'ValidateService', 'UserService', function ($scope, $state, ValidateService, UserService) {
    $scope.doLogin = function() {

        $scope.error = false;
        if(!$scope.login
            || ValidateService.isEmpty($scope.login.user)
                || ValidateService.isEmpty($scope.login.password)) {
            $scope.error = 'Por favor, preencha todos os dados.';
            return false
        }

        UserService.doLogin($scope.login)
            .then(function(response) {
                localStorage.setItem('token', response.data.content.token);
                localStorage.setItem('code', response.data.content.code);
                $state.go('dashboard');
            }, function(response) {
                $scope.error = 'Por favor, verifique os dados digitados e tente novamente.';
            });
    };
}]);
