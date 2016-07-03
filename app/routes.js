'use strict';

angular.module('adminThaisMartins', [
    'ui.router',
    'ui.mask'
])
.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('root', {
            abstract: true,
            views: {
                'header': {templateUrl: 'app/views/partials/header.html'},
                'menu': {templateUrl: 'app/views/partials/menu.html'}
            }
        })
        .state('login', {
            url: "/login",
            views: {
                'main@': {
                    templateUrl: 'app/views/login/index.html',
                    controller: 'LoginController'
                }
            }
        })
        .state('dashboard', {
            url: "/dashboard",
            parent: 'root',
            views: {
                'main@': {
                    templateUrl: 'app/views/dashboard/index.html',
                    controller: 'DashboardController'
                }
            }
        });


    // $locationProvider.html5Mode(true);
}]);