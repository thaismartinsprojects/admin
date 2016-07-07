'use strict';

angular.module('adminThaisMartins')
.controller('SkillsController', ['$scope', 'IconService', function ($scope, IconService) {

    $scope.skills = [];
    $scope.skill = {};
    $scope.skill.items = [];

    $scope.icons = IconService.getAll();

    $scope.setIcon = function(icon) {
        $scope.skill.icon = icon;
    };
}]);
