'use strict';

angular.module('adminThaisMartins')
.factory('MessageService', function () {

    var items = [
        {
            to: {
                name: "Thais Martins"
            },
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat tincidunt dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat tincidunt dolor..",
            created: 'Wed Jul 13 2016 22:19:07 GMT-0300 (BRT)',
            visualized: false
        },
        {
            to: {
                name: "Thais Martins"
            },
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat tincidunt dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat tincidunt dolor..",
            created: 'Wed Jul 13 2016 21:52:55 GMT-0300 (BRT)',
            visualized: false
        },
        {
            to: {
                name: "Thais Martins"
            },
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat tincidunt dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat tincidunt dolor..",
            created: 'Wed Jul 13 2016 21:42:07 GMT-0300 (BRT)',
            visualized: false
        }
    ];

    return {
        getAll: function() {
            return items;
        }
    };
});