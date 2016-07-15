'use strict';

angular.module('adminThaisMartins')
.run(['$rootScope', '$state', 'amMoment', 'MenuService', 'UserService', 'ChatService', function($rootScope, $state, amMoment, MenuService, UserService, ChatService) {

    amMoment.changeLocale('pt-br');

    $rootScope.activeMenu = true;
    $rootScope.menu = MenuService.getItems();
    $rootScope.code = UserService.getCode();

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

    $rootScope.$on('$stateChangeSuccess', function(){
        $rootScope.showMessages = false;
        if($state.current.requiredLogin && !UserService.isLogged())
            $state.go('login')
    });

    UserService.getAll()
        .then(function(response) {
            $rootScope.users = response.data.filter(function(user) {
                return (user._id != $rootScope.code);
            });
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