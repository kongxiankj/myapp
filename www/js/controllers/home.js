/**
 * Created by wangying on 16/7/12.
 */
angular.module('starter.HomeController', [])


    .controller('HomeController', function ($scope,$rootScope, $ionicModal,ngDialog) {

        $scope.closeother = function(){
            console.debug("come in outcome");
            $("#other").slideToggle();

        }


        /**
         * 签到页面的规则
         */


        $scope.openhelp = function(){
            $rootScope.tipConfirm('签到规则','');
        }



    })