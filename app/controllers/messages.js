'use strict';

angular.module('adminThaisMartins')
.controller('MessagesController', ['$scope', '$filter', 'UserService', 'MessageService', function ($scope, $filter, UserService, MessageService) {

    $scope.visibleSearch = false;
    $scope.search = {};

    $scope.users = [];
    $scope.messages = [];
    $scope.current = {};
    $scope.text = '';

    $scope.code = UserService.getCode();

    UserService.getAll()
        .then(function(response) {
            angular.forEach(response.data, function(user) {
                if(user._id != UserService.getCode())
                    $scope.users.push(user);
            });
            return MessageService.getAll();
        })
        .then(function(response) {
            angular.forEach($scope.users, function(user) {
                var userMessages = $filter('filter')(response.data, {'to': $scope.code, 'from': user._id});
                var myMessages = $filter('filter')(response.data, {'to': user._id, 'from': $scope.code});
                $scope.messages[user._id] = {
                    messages: myMessages.concat(userMessages),
                    user: user
                };
            });
        });

    $scope.scrollChat = function() {
        setTimeout(function() {
            var box = document.getElementById('talks');
            $('#talks-box').animate({scrollTop: box.scrollHeight}, 100);
        }, 300);
    };

    $scope.showConversation = function(userId) {
        $scope.current.messages = $scope.messages[userId].messages;
        $scope.current.user = $scope.messages[userId].user;
        $scope.scrollChat();
    };
}]);
