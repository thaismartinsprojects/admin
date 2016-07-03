'use strict';

var app = angular.module('adminThaisMartins');
app.factory('MenuService', function () {

    var items = [
        {id: 1, name: 'Dashboard', icon: 'book', slug: 'dashboard'},
        {id: 2, name: 'Menu', icon: 'bars', slug: 'menu'},
        {id: 3, name: 'Serviços', icon: 'flash', slug: 'skills'},
        {id: 4, name: 'Trabalhos', icon: 'code', slug: 'works'},
        {id: 5, name: 'Contatos', icon: 'comments-o', slug: 'contact'}
    ];

    return {
        getItems: function() {
            return items;
        }
    };
});