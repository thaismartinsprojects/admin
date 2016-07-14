'use strict';

angular.module('adminThaisMartins')
.controller('MessagesController', ['$scope', 'MessageService', function ($scope, MessageService) {

    $scope.visibleSearch = false;
    $scope.message = null;

    $scope.current = {};
    $scope.current.messages = MessageService.getAll();
    $scope.current.user = {
        name: "Thais Martins"
    };

    var scrollChat = function() {
        var box = document.getElementById('talks');
        $('#talks-box').animate({scrollTop: box.scrollHeight}, 500);
    };

    setTimeout(scrollChat, 1000);

    $scope.openNewMessage = function() {
        angular.element('#messages').modal({backdrop: 'static', keyboard: false});
    };

    $scope.openMessage = function() {
        angular.element('#messages').modal({backdrop: 'static', keyboard: false});
    };

    $scope.showConversation = function(userId) {

        console.log('Entrou');
        $scope.current.messages = null;
        $scope.current.user = {
            name: "Thais Martins " + userId
        };
    };

    $scope.sendMessage = function() {

        if(!$scope.message) return false;

        $scope.current.messages.push({
            'message': $scope.message,
            'created': new Date
        });

        $scope.message = '';
        scrollChat();
    };

    $scope.showSearch = function() {
        $scope.visibleSearch = !$scope.visibleSearch;
    };
}]);
