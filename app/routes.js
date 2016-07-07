'use strict';

angular.module('adminThaisMartins', [
    'ui.router',
    'ui.mask'
])
.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/login");

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
        })
        .state('menus', {
            url: "/menus",
            parent: 'root',
            views: {
                'main@': {
                    templateUrl: 'app/views/menus/index.html',
                    controller: 'MenusController'
                }
            }
        })
        .state('menus.add', {
            url: "/menus/new",
            parent: 'root',
            views: {
                'main@': {
                    templateUrl: 'app/views/menus/form.html',
                    controller: 'MenusController'
                }
            }
        })
        .state('menus.edit', {
            url: "/menus/edit/:id",
            parent: 'root',
            views: {
                'main@': {
                    templateUrl: 'app/views/menus/form.html',
                    controller: 'MenusController'
                }
            }
        })
        .state('skills', {
            parent: 'root',
        })
        .state('skills.categories', {
            url: "/skills",
            parent: 'root',
            views: {
                'main@': {
                    templateUrl: 'app/views/skills/categories/index.html',
                    controller: 'SkillsController'
                }
            }
        })
        .state('skills.categories.add', {
            url: "/skills/new",
            parent: 'root',
            views: {
                'main@': {
                    templateUrl: 'app/views/skills/categories/form.html',
                    controller: 'SkillsController'
                }
            }
        })
        .state('skills.items', {
            url: "/skills/items",
            parent: 'root',
            views: {
                'main@': {
                    templateUrl: 'app/views/skills/items/index.html',
                    controller: 'SkillsController'
                }
            }
        })
        .state('skills.items.add', {
            url: "/skills/items/new",
            parent: 'root',
            views: {
                'main@': {
                    templateUrl: 'app/views/skills/items/form.html',
                    controller: 'SkillsController'
                }
            }
        })
        .state('works', {
            url: "/works",
            parent: 'root',
            views: {
                'main@': {
                    templateUrl: 'app/views/works/index.html',
                    controller: 'WorksController'
                }
            }
        })
        .state('works.add', {
            url: "/works/new",
            parent: 'root',
            views: {
                'main@': {
                    templateUrl: 'app/views/works/form.html',
                    controller: 'WorksController'
                }
            }
        });


    // $locationProvider.html5Mode(true);
}]);