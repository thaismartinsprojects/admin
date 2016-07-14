'use strict';

angular.module('adminThaisMartins')
.controller('MessagesConversationController', ['$scope', function ($scope) {


    $scope.sendMessage = function() {

        if(!$scope.text) return false;

        $scope.current.messages.push({
            'message': $scope.text,
            'created': new Date
        });

        $scope.text = '';
        $scope.$parent.scrollChat();
    };
}]);
