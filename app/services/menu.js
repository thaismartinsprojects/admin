'use strict';

var app = angular.module('adminThaisMartins');
app.factory('MenuService', function () {

    var items = [
        {id: 1, name: 'Home', slug: 'home'},
        {id: 2, name: 'Quem Sou', slug: 'about'},
        {id: 3, name: 'Serviços', slug: 'skills'},
        {id: 4, name: 'Meus Trabalhos', slug: 'works'},
        {id: 5, name: 'Contato', slug: 'contact'}
    ];

    return {
        getItems: function() {
            return items;
        }
    };
});