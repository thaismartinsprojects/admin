'use strict';

angular.module('adminThaisMartins')
.factory('MenuService', function () {

    var items = [
        {id: 1, name: 'Dashboard', icon: 'home', slug: 'dashboard'},
        {id: 2, name: 'Menu', icon: 'index', slug: 'menus'},
        {id: 3, name: 'Serviços', icon: 'lightbulb', slug: 'skills'},
        {id: 4, name: 'Trabalhos', icon: 'laptop', slug: 'works'},
        {id: 5, name: 'Contatos', icon: 'mail', slug: 'contacts'}
    ];

    return {
        getItems: function() {
            return items;
        }
    };
});