/**
 * Created by wangying on 16/6/8.
 */
angular.module('starter.ProductController', ['starter.ProductServices'])


    .controller('ProductController', function ($scope, $state,$ionicLoading,$stateParams,ProductServ,$rootScope) {

        $ionicLoading.show({
            template: "加载中，请稍后..."
        });

        // 查询任务列表

        ProductServ.getProductList().then(function (resp) {
            $ionicLoading.hide();
            if (1 == resp.status) {
                $scope.user = resp.data;
            } else {
                $scope.user = '';
            }
        })

            // 查询任务详情

//        var id = $stateParams.taskId;
//        TaskServ.getTaskDetail(id).then(function(resp) {
//
//            //隐藏载入指示器
//
//            $ionicLoading.hide();
//            $scope.taskDetail = resp.data;
//        });



        $scope.showConfirm = function () {
            $rootScope.sharedialog('','');
        };



        // 分享任务－领取任务的描述文案

        $scope.titles = '非常好的应用，收藏了';
        $scope.changevalue =function(){
            $scope.titles = '大家快来看，很好的APP';
        }


    })