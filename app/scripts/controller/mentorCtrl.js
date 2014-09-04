﻿var devQ = angular.module('devQ');

devQ.controller('mentorCtrl', function ($scope, $state, authService) {

    $scope.reg = true;
    $scope.status = 'Register';

    $scope.showReg = function () {
        if ($scope.reg) {
            $('.modal').modal('show')
        } else {
            $scope.status = 'Register';
            $scope.reg = !$scope.reg;
        }
    };

    $scope.logMeIn = function () {
        authService.logIn($scope.email, $scope.password).then(function () {
            $state.go('secure.queue');
        });
    };

    $scope.register = function () {
        authService.register($scope.registerEmail, $scope.registerPassword, $scope.registerName);
        $scope.email = $scope.registerEmail;
        $scope.registerName = '';
        $scope.registerEmail = '';
        $scope.registerPassword = '';
        $scope.showReg();
    };


    $scope.registerCont = function (initPW) {
        var res = authService.initRegistrantPassword(initPW)
        if(res) {
            $scope.status = 'Log In';
            $scope.reg = !$scope.reg;
            $('.modal').modal('hide')
        }
        $scope.initPassword = '';
    }
});