'use strict';

angular.module('adminThaisMartins')
.run(['$rootScope', '$state', 'MenuService', 'amMoment', function($rootScope, $state, MenuService, amMoment) {

    amMoment.changeLocale('pt-br');

    $rootScope.activeMenu = true;
    $rootScope.menu = MenuService.getItems();

    $rootScope.toogleMenu = function() {
        $rootScope.activeMenu = !$rootScope.activeMenu;
    };

    $rootScope.openModal = false;
    $rootScope.isLogged = false;

    $rootScope.doLogin = function() {
        $rootScope.isLogged = true;
    };

    $rootScope.goToInfo = function() {
        $state.go('info');
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
}]);