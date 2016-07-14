'use strict';

angular.module('adminThaisMartins')
.factory('UserService', ['URI', '$http', function (URI, $http) {

    var apiUrl = URI.API + '/accounts';
    $http.defaults.headers.common["x-access-token"] = localStorage.getItem('code');

    return {
        isLogged: function() {
           return localStorage.getItem('code') ? true : false;
        },
        doLogout: function() {
            localStorage.removeItem('code');
        },
        doLogin: function(login) {
            return $http.post(apiUrl + '/auth', login);
        },
        getAll: function() {
            return $http.get(apiUrl);
        }
    };
}]);