'use strict';

angular.module('adminThaisMartins')
.run(['$rootScope', '$state', 'amMoment', 'MenuService', 'UserService', function($rootScope, $state, amMoment, MenuService, UserService) {

    amMoment.changeLocale('pt-br');

    $rootScope.activeMenu = true;
    $rootScope.menu = MenuService.getItems();

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
}])
.constant('URI', {
    'API': 'http://localhost:3000/api'
});