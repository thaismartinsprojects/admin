'use strict';

angular.module('adminThaisMartins', [
    'ui.router',
    'ui.utils.masks',
    'angularMoment'
])
.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/dashboard");

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
            requiredLogin: false,
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
            requiredLogin: true,
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
            requiredLogin: true,
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
            requiredLogin: true,
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
            requiredLogin: true,
            views: {
                'main@': {
                    templateUrl: 'app/views/menus/form.html',
                    controller: 'MenusController'
                }
            }
        })
        .state('skills', {
            parent: 'root'
        })
        .state('skills.categories', {
            url: "/skills",
            parent: 'root',
            requiredLogin: true,
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
            requiredLogin: true,
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
            requiredLogin: true,
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
            requiredLogin: true,
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
            requiredLogin: true,
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
            requiredLogin: true,
            views: {
                'main@': {
                    templateUrl: 'app/views/works/form.html',
                    controller: 'WorksController'
                }
            }
        })
        .state('contacts', {
            url: "/contacts",
            parent: 'root',
            requiredLogin: true,
            views: {
                'main@': {
                    templateUrl: 'app/views/contacts/index.html',
                    controller: 'ContactsController'
                }
            }
        })
        .state('contacts.edit', {
            url: "/contacts/edit/:id",
            parent: 'root',
            requiredLogin: true,
            views: {
                'main@': {
                    templateUrl: 'app/views/contacts/form.html',
                    controller: 'ContactsController'
                }
            }
        })
        .state('messages', {
            url: "/messages",
            parent: 'root',
            requiredLogin: true,
            views: {
                'main@': {
                    templateUrl: 'app/views/messages/index.html',
                    controller: 'MessagesController'
                },
                'conversation@messages': {
                    templateUrl: 'app/views/messages/conversation.html',
                    controller: 'MessagesConversationController'
                },
                'users@messages': {
                    templateUrl: 'app/views/messages/users.html'
                }
            }
        })
        .state('user', {
            url: "/user",
            parent: 'root',
            requiredLogin: true,
            views: {
                'main@': {
                    templateUrl: 'app/views/user/index.html',
                    controller: 'UserController'
                }
            }
        })
        .state('info', {
            url: "/info",
            parent: 'root',
            requiredLogin: true,
            views: {
                'main@': {
                    templateUrl: 'app/views/info/index.html',
                    controller: 'InfoController'
                }
            }
        });

    // $locationProvider.html5Mode(true);
}]);