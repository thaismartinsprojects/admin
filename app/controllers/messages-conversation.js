'use strict';

angular.module('adminThaisMartins')
.controller('MessagesConversationController', ['$scope', 'MessageService', function ($scope, MessageService) {


    $scope.sendMessage = function() {

        if(!$scope.text) return false;

        var message = {
            to: $scope.$parent.current.user._id,
            from: $scope.$parent.code,
            message: $scope.text
        };
        
        MessageService.create(message)
            .then(function(response) {
                $scope.current.messages.push(message);
            });

        $scope.text = '';
        $scope.$parent.scrollChat();
    };
}]);
