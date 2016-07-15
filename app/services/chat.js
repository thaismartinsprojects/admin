'use strict';

angular.module('adminThaisMartins')
.factory('ChatService', ['URI', 'UserService', function (URI, UserService) {

    var socket = io.connect(URI.CHAT);

    if(UserService.isLogged()) {
        socket.on('connect', function() {
            console.log('Chat connected with success');
            socket.emit('openchat', {'code': UserService.getCode()});
        });
    }
    
    return socket;
}]);