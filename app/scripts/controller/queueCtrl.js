﻿'use strict';

var devQ = angular.module('devQ');

devQ.controller('queueCtrl', [ '$scope', 'queueRef', 'firebaseService', function($scope, queueRef) {

    $scope.queue = queueRef.$asArray();

    $scope.checkMentor = function () {
        debugger;
        if ($scope.mentor === null) {
            $scope.isMentor = false;
        } else {
            $scope.isMentor = true;
        }
    };

    $scope.enterQueue = function () {
        var question = {};
        question.text = $scope.text || '';
        question.status = 'Red';
        question.submittedBy = $scope.student || '';
        question.submittedAt = new Date().toISOString();
        $scope.queue.$add(question);
        $scope.text = '';
    };

    $scope.leaveQueue = function(question) {
        question.status = 'Green';
        $scope.queue.$save(question);
    };

    $scope.assigned = function(question) {
        question.status = 'yellow';
        question.mentor = $scope.mentor || '';
        $scope.queue.$save(question);
    };
}]);