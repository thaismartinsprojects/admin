'use strict';

angular.module('adminThaisMartins')
.run(['$rootScope', 'MenuService', 'amMoment', function($rootScope, MenuService, amMoment) {

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

    $rootScope.showMessages = false;

    $rootScope.toggleMessages = function() {
        $rootScope.showMessages = !$rootScope.showMessages;
    };

}]);