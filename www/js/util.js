/**
 * Created by wangying on 16/7/22.
 */
angular.module('starter.util', [])

    .config(function (ngDialogProvider) {

        // 弹出框

        ngDialogProvider.setDefaults({
            className: 'ngdialog-theme-plain',
            plain: false,
            showClose: true,
            closeByDocument: true,
            closeByEscape: true,
            appendTo: false
            //preCloseCallback: function () {
            //    console.log('default pre-close callback');
            //}
        });
    })

    .run(function($rootScope, $state,ngDialog) {


        // 不带关闭按钮，有取消和确定按钮

        $rootScope.doubleConfirm = function (title,content, confirm,cancel) {
            $rootScope.titletext = title;
            $rootScope.content = content;
            $rootScope.confirmButtonName = confirm;
            $rootScope.cancelButtonName = cancel;

            ngDialog.openConfirm({
                template: 'templates/share/confirm.html',
                showClose: false
                //className: 'ngdialog-theme-plain'
            }).then(function (value) {
                //确认回调函数

                $state.go('tab.home');
            }, function (reason) {
                //取消回调函数


            });
        }


        // 不带关闭按钮和内容，有取消和确定按钮

        $rootScope.titleConfirm = function (title, confirm,cancel) {
            $rootScope.titletext = title;
            $rootScope.confirmButtonName = confirm;
            $rootScope.cancelButtonName = cancel;

            ngDialog.openConfirm({
                template: 'templates/share/titleconfirm.html',
                showClose: false
                //className: 'ngdialog-theme-plain'
            }).then(function (value) {
                //确认回调函数

                $state.go('tab.home');
            }, function (reason) {
                //取消回调函数


            });
        }

        // 带关闭按钮和内容，无取消和确定按钮

        $rootScope.tipConfirm = function (title, content) {
            $rootScope.titletext = title;
            $rootScope.content = content;
            ngDialog.openConfirm({
                template: 'templates/share/alert.html'
                //closeByDocument: true
                //className: 'ngdialog-theme-plain'
            }).then(function (value) {
                //确认回调函数
            }, function (reason) {
                //取消回调函数
            });
        }


        // 分享 文案弹框

        $rootScope.sharedialog = function (title, content) {
            $rootScope.titletext = title;
            $rootScope.content = content;
            ngDialog.openConfirm({
                template: 'templates/share/sharedialog.html'
                //closeByDocument: true
                //className: 'ngdialog-theme-plain'
            }).then(function (value) {
                //确认回调函数
            }, function (reason) {
                //取消回调函数
            });
        }


        // 分享 朋友弹框

        $rootScope.shareforfriend = function () {
            ngDialog.openConfirm({
                template: 'templates/share/shareforfriend.html'
                //closeByDocument: true
                //className: 'ngdialog-theme-plain'
            }).then(function (value) {
                //确认回调函数
            }, function (reason) {
                //取消回调函数
            });
        }




    })