/**
 * Created by wangying on 16/6/13.
 */
angular.module('starter.PurseController', [])

    .controller('PurseController', function ($scope, $ionicHistory) {
        $scope.goback = function () {
            $ionicHistory.goBack(-1);
        };
    });