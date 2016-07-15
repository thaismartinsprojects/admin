'use strict';

angular.module('adminThaisMartins')
.run(['$rootScope', '$state', 'amMoment', 'URI', 'MenuService', 'UserService', 'ChatService', function($rootScope, $state, amMoment, URI, MenuService, UserService, ChatService) {

    amMoment.changeLocale('pt-br');

    $rootScope.activeMenu = true;
    $rootScope.error = false;

    $rootScope.menu = MenuService.getItems();
    $rootScope.code = UserService.getCode();

    $rootScope.users = false;

    $rootScope.toogleMenu = function() {
        $rootScope.activeMenu = !$rootScope.activeMenu;
    };

    $rootScope.doLogout = function() {
        UserService.doLogout();
        $state.go('login');
    };

    $rootScope.goToUser = function() {
        $state.go('user');
    };

    $rootScope.showMessages = false;

    $rootScope.toggleMessages = function() {
        $rootScope.showMessages = !$rootScope.showMessages;
    };

    $rootScope.$on('$stateChangeSuccess', function() {

        $rootScope.showMessages = false;
        if($state.current.requiredLogin && !UserService.isLogged())
            $state.go('login')

        if($state.current.name != 'login' && !$rootScope.users) {
            UserService.getAll()
                .then(function(response) {
                    $rootScope.users = response.data.filter(function(user) {
                        return (user._id != $rootScope.code);
                    });
                });

            UserService.get()
                .then(function(response) {
                    $rootScope.user = response.data;
                    if(!$rootScope.user.photo)
                        $rootScope.user.thumbnail = 'public/images/user.png';
                    else
                        $rootScope.user.thumbnail = URI.API + '/files/users/' + $rootScope.user.photo;
                }, function(response) {
                    $rootScope.doLogout();
                });
        }
    });
    
    ChatService.on('userconnected', function(message) {
        angular.forEach($rootScope.users, function(user) {
            user.online = (message.online.indexOf(user._id) != -1);
        });
        $rootScope.$apply();
    });

    ChatService.on('userdisconnected', function(message) {
        angular.forEach($rootScope.users, function(user) {
            if(message.user == user._id) user.online = false;
        });
        $rootScope.$apply();
    });
}])
.constant('URI', {
    'API': 'http://localhost:3000/api',
    'CHAT': 'http://localhost:9000'
});