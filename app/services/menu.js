'use strict';

angular.module('adminThaisMartins')
.factory('MenuService', function () {

    var items = [
        {id: 1, name: 'Dashboard', icon: 'home', slug: 'dashboard', childs: null},
        {id: 2, name: 'Menu', icon: 'index', slug: 'menus', childs: null},
        {id: 3, name: 'Skills', icon: 'lightbulb', slug: 'skills', childs: [
            {id: 1, name: 'Categorias', icon: 'rows', slug: 'skills.categories'},
            {id: 2, name: 'Items', icon: 'quote', slug: 'skills.items'}
        ]},
        {id: 4, name: 'Trabalhos', icon: 'laptop', slug: 'works', childs: null},
        {id: 5, name: 'Contatos', icon: 'mail', slug: 'contacts', childs: null}
    ];

    return {
        getItems: function() {
            return items;
        }
    };
});