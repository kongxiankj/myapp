/**
 * Created by wangying on 16/7/25.
 */
angular.module('starter.UserServices', [])
    .factory('UserServ', ['$http', '$q', function($http, $q) {

        // 查询任务列表

        var UserInfo = globalInfo.getUserInfoUrl;

        var sv = {};

        // 获取任务列表

        sv.getUserInfo = function() {
            return $http.get(UserInfo).then(function successCallback(response) {
                return response.data;

            }, function errorCallback(response) {
                console.log("server error");
                return $q.reject(response);
            });
        };
        return sv;
    }])
