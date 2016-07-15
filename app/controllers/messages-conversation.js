'use strict';

angular.module('adminThaisMartins')
.controller('MessagesConversationController', ['$scope', 'MessageService', 'ChatService', function ($scope, MessageService, ChatService) {


    $scope.sendMessage = function() {

        if(!$scope.text) return false;

        var message = {
            to: $scope.$parent.current.user._id,
            from: $scope.$parent.code,
            message: $scope.text
        };

        ChatService.emit('message', message);
        $scope.$parent.current.messages.push(message);

        $scope.text = '';
        $scope.$parent.scrollChat();
    };

    ChatService.on('message', function(message) {
        
        $scope.$parent.messages[message.from].messages.push(message);
        if($scope.$parent.current && $scope.$parent.current.user._id == message.from)
            $scope.$parent.scrollChat();

        $scope.$apply();
    });
}]);
