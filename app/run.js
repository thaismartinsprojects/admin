'use strict';

angular.module('adminThaisMartins')
.run(['$rootScope', 'MenuService', function($rootScope, MenuService) {

    $rootScope.activeMenu = false;
    $rootScope.menu = MenuService.getItems();

    $rootScope.toogleMenu = function() {
        $rootScope.activeMenu = !$rootScope.activeMenu;
    };

    $rootScope.openModal = false;
}]);