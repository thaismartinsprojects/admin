'use strict';

angular.module('adminThaisMartins')
.controller('MessagesController', ['$scope', '$rootScope', '$filter', 'UserService', 'MessageService', 'ChatService', function ($scope, $rootScope, $filter, UserService, MessageService, ChatService) {

    $scope.visibleSearch = false;
    $scope.search = {};

    $scope.messages = [];
    $scope.current = {};
    $scope.text = '';

    MessageService.getAll()
        .then(function(response) {
            angular.forEach($rootScope.users, function(user) {

                var userMessages = $filter('filter')(response.data, {'to': $rootScope.code, 'from': user._id});
                var myMessages = $filter('filter')(response.data, {'to': user._id, 'from': $rootScope.code});
                var allMessages = myMessages.concat(userMessages);

                user.hasMessage = $filter('filter')(allMessages, {'to': $rootScope.code, 'visualized': false});
                $scope.messages[user._id] = {
                    messages: $filter('orderBy')(allMessages, 'created'),
                    user: user
                };
            });
        });

    $scope.scrollChat = function() {
        setTimeout(function() {
            var box = document.getElementById('talks');
            if(box) $('#talks-box').animate({scrollTop: box.scrollHeight}, 300);
        }, 300);
    };

    $scope.showConversation = function(userId) {

        $scope.current.messages = $scope.messages[userId].messages;
        $scope.current.user = $scope.messages[userId].user;
        $scope.scrollChat();

        var notVisualized =  $filter('filter')($scope.current.messages, {'to': $rootScope.code, 'visualized': false});
        angular.forEach(notVisualized, function(message) {
            if(!message.visualized) ChatService.emit('visualized', message);
        });

        angular.forEach($scope.users, function(user) {
            if(user._id == userId) user.hasMessage = [];
        });
    };
}]);
