///**
// * Created by wangying on 16/6/14.
// */
angular.module('starter.TaskListController', ['starter.TaskListController.service'])


    .controller('TaskListController', function ($scope, $ionicLoading, $timeout, $state, TaskServ, $http) {

        $ionicLoading.show({
            template: "加载中，请稍后..."
        });


        // 获取用户的信息，我的特工和收入

        TaskServ.getUserInfo().then(function (resp) {
            $scope.user = resp.data;
        });

        // 下拉刷新

        $scope.doRefresh = function () {
            TaskServ.getTaskList().then(function (resp) {
                var arr = [];
                var count = 0;
                for (var i = 0; i < resp.tasks.length; i++) {
                    if (resp.tasks[i].id == $scope.tasks[0].id) {
                        count = i;
                        break;
                    }
                }
                arr = $scope.tasks.slice(0, count);
                $scope.tasks = $scope.tasks.slice(count, $scope.tasks.length);
                console.debug($scope.tasks);
                // 数组插入数组最优做法
                Array.prototype.splice.apply($scope.tasks, [0, 0].concat(arr));
            })
                .finally(function () {
                    // Stop the ion-refresher from spinning
                    $scope.$broadcast('scroll.refreshComplete');
                })


        }

        // 滚动刷新

        $scope.index = 0;
        $scope.tasks = [];
        $scope.loadMore = function () {

            // 隐藏加载

            $ionicLoading.hide();
            $scope.loadMoreData = false;

            //下拉添加数据每次添加的个数

            $scope.index += 5;
            TaskServ.getTaskList().then(function (resp) {
                var arr = [];
                if ($scope.tasks.length == resp.tasks.length) {
                    $scope.loadMoreData = true;
                    return;
                }
                arr = resp.tasks.slice(($scope.index - 5), $scope.index);
                // 数组插入数组最优做法
                Array.prototype.push.apply($scope.tasks, arr);
            })

            .finally(function () {
                $scope.$broadcast('scroll.infiniteScrollComplete');
            })

        }

    });
