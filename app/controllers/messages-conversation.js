'use strict';

angular.module('adminThaisMartins')
.controller('MessagesConversationController', ['$scope', 'MessageService', 'ChatService', function ($scope, MessageService, ChatService) {

    var isUnvisualized = function(userId, messageFrom) {
        return (typeof $scope.current.user == 'undefined' || $scope.current.user._id != messageFrom)
            && (userId == messageFrom);
    };

    $scope.visibleSearch = false;
    $scope.showSearch = function() {
        $scope.search.message = '';
        $scope.visibleSearch = !$scope.visibleSearch;
    };

    $scope.sendMessage = function() {
        if(!$scope.text) return false;
        var message = {
            to: $scope.$parent.current.user._id,
            from: $scope.$parent.code,
            message: $scope.text,
            created: new Date
        };

        ChatService.emit('message', message);
        $scope.$parent.current.messages.push(message);

        $scope.text = '';
        $scope.$parent.scrollChat();
    };

    ChatService.on('message', function(message) {
        angular.forEach($scope.$parent.users, function(user) {
            if(isUnvisualized(user._id, message._id)) user.hasMessage.push(message);
            else ChatService.emit('visualized', message);
        });
        $scope.$parent.messages[message.from].messages.push(message);
        $scope.$parent.scrollChat();
        $scope.$apply();
    });
}]);
