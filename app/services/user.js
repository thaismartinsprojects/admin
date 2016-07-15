'use strict';

angular.module('adminThaisMartins')
.factory('UserService', ['URI', '$http', function (URI, $http) {

    var apiUrl = URI.API + '/accounts';

    return {
        isLogged: function() {
           return localStorage.getItem('token') ? true : false;
        },
        doLogout: function() {
            localStorage.removeItem('token');
        },
        doLogin: function(login) {
            return $http.post(apiUrl + '/auth', login);
        },
        getToken: function() {
            return localStorage.getItem('token');
        },
        getCode: function() {
            return localStorage.getItem('code');
        },
        getAll: function() {
            $http.defaults.headers.common["x-access-token"] = this.getToken();
            return $http.get(apiUrl);
        }
    };
}]);