///**
// * Created by wangying on 16/6/14.
// */
angular.module('starter.MyTaskController', ['starter.TaskListController.service'])


    .controller('MyTaskController', function ($scope, $ionicLoading, $timeout, $state, TaskServ) {

//        $ionicLoading.show({
//            template: "加载中，请稍后..."
//        });

        // 获取我的任务列表

        TaskServ.getMyTask().then(function (resp) {

            //隐藏载入指示器

            $ionicLoading.hide();
            console.debug(resp);
            $scope.tasks = resp.data.tasks;

        });

        // 跳转任务详情页面

        $scope.goTaskDetail = function (id) {
            $state.go('taskdetail', {taskId: id});
        }



    });
