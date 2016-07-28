/**
 * Created by wangying on 16/7/25.
 */
angular.module('starter.ProductServices', [])
    .factory('ProductServ', ['$http', '$q', function($http, $q) {

        // 查询任务列表

        var ProductList = globalInfo.getProductListUrl;

        var sv = {};

        // 获取任务列表

        sv.getProductList = function() {
            return $http.get(ProductList).then(function successCallback(response) {
                return response.data;

            }, function errorCallback(response) {
                console.log("server error");
                return $q.reject(response);
            });
        };
        return sv;
    }])
