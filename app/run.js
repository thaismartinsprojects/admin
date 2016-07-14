'use strict';

angular.module('adminThaisMartins')
.run(['$rootScope', '$state', 'amMoment', 'MenuService', 'UserService', function($rootScope, $state, amMoment, MenuService, UserService) {

    amMoment.changeLocale('pt-br');

    $rootScope.activeMenu = true;
    $rootScope.menu = MenuService.getItems();

    $rootScope.toogleMenu = function() {
        $rootScope.activeMenu = !$rootScope.activeMenu;
    };

    $rootScope.openModal = false;
    $rootScope.isLogged = UserService.isLogged();
    console.log('ok: ' + $rootScope.isLogged);
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

    // OnChange page set header style and close menues
    $rootScope.$on('$stateChangeSuccess', function(){

        // if(typeof $rootScope.isLogged == 'undefined')
        //     $rootScope.isLogged = true;

        // $rootScope.headerDark = $state.current.headerDark;
        // $rootScope.showSideMenu = false;
        // $rootScope.showCategoriesMenu = false;
        $rootScope.showMessages = false;
    });
}])
.constant('URI', {
    'API': 'http://localhost:3000/api'
});