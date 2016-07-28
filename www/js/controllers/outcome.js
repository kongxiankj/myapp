/**
 * Created by wangying on 16/7/18.
 */

angular.module('starter.OutComeController', [])


    .controller('OutComeController', function ($scope, $timeout) {

        $("#other").hide();
        $scope.openother = function () {
            $("#btn").hide();
            $("#other").slideToggle();
        }
        $scope.closeother = function () {
            $("#btn").show();
            $("#other").slideToggle();
        }

        $scope.select = function(index){
          var length = $('#pickmoney span').length;
          for(var i=0; i<length; i++){
            $('#pickmoney span')[i].className = 'moneybox ';
          }
          $('#pickmoney span')[index].className = 'moneybox active';
        };
    })
