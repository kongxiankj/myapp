/**
* Created by wangying on 16/6/14.
*/
/**
* officialTask.service Module
*
* Description
*/
angular.module('starter.TaskListController.service', [])
    .factory('TaskServ', ['$http', '$q', function($http, $q) {

        // 查询任务列表

        var TaskList = globalInfo.getTaskListUrl;

        // 查询任务详情

        var TaskDetail = globalInfo.getTaskDetailUrl;

        // 获取任务列表页面的用户信息

        var taskUserInfo = globalInfo.getTaskUserInfoUrl;

        // 获取我的任务列表

        var getMyTaskUrl = globalInfo.getMyTaskUrl;

        var sv = {};

        // 获取任务列表

        sv.getTaskList = function() {
            console.debug("come service");
//            showLoading();
            return $http.get(TaskList).then(function successCallback(response) {
//                hideLoading();
                if (1 == response.data.status) {
                    return response.data.data;

                } else {
                    if (response.data.reload_page != null) {
                        location.href = response.data.reload_page;
                    }
                }


            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
//                hideLoading();
            });

        };


        // 获取任务详情

        sv.getTaskDetail = function(id) {
//            showLoading();
            return $http.get(TaskDetail).then(function successCallback(response) {
//                hideLoading();
                if (1 == response.data.status) {
                    return response.data;

                } else {
                    if (response.data.reload_page != null) {
                        location.href = response.data.reload_page;
                    }
                }


            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
//                hideLoading();
            });

        };

        // 获取首页面的用户信息

        sv.getUserInfo = function() {
            return $http.get(taskUserInfo).then(function successCallback(response) {
                if (1 == response.data.status) {
                    return response.data;

                } else {
                    if (response.data.reload_page != null) {
                        location.href = response.data.reload_page;
                    }
                }


            }, function errorCallback(response) {
            });

        };

        // 获取我的任务

        sv.getMyTask = function() {
            return $http.get(getMyTaskUrl).then(function successCallback(response) {
                if (1 == response.data.status) {
                    return response.data;

                } else {
                    if (response.data.reload_page != null) {
                        location.href = response.data.reload_page;
                    }
                }


            }, function errorCallback(response) {
            });

        };

        return sv;
    }])
