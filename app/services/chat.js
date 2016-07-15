'use strict';

angular.module('adminThaisMartins')
.factory('ChatService', ['URI', 'UserService', function (URI, UserService) {

    if(!UserService.isLogged()) return false;

    var socket = io.connect(URI.CHAT);

    socket.on('connect', function() {
        console.log('Chat connected with success');
        socket.emit('openchat', {'code': UserService.getCode()});
    });

    return socket;
}]);