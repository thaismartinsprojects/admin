'use strict';

angular.module('adminThaisMartins')
.factory('MessageService', ['URI', '$http', 'UserService', function (URI, $http, UserService) {

    var apiUrl = URI.API + '/messages';
    $http.defaults.headers.common["x-access-token"] = UserService.getToken();

    return {
        getAll: function() {
            return $http.get(apiUrl);
        }
    };
}]);