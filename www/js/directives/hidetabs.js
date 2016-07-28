/**
 * Created by wangying on 16/6/17.
 */
angular.module('starter.hidetabs', [])

    // 隐藏tab

    .directive('hideTabs', function ($rootScope) {
        return {
            restrict: 'A',
            link: function (scope, element, attributes) {
                scope.$on('$ionicView.beforeEnter', function () {
                    scope.$watch(attributes.hideTabs, function (value) {
                        $rootScope.hideTabs = value;
                    });
                });

                scope.$on('$ionicView.beforeLeave', function () {
                    $rootScope.hideTabs = false;
                });
            }
        };
    })