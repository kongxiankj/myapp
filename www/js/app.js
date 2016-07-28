// Ionic Starter App

angular.module('starter', [
    'ionic',
    'starter.SubmitTaskController',
    'starter.PurseController',
    'fileUpload',
    'starter.MyTaskController',
    'starter.hidetabs',
    'starter.filter',
    'starter.HomeController',
    'starter.UserController',
    'starter.OutComeController',
    'ngDialog',
    'starter.util',
    'starter.IncomeController',
    'starter.GameController',
    'starter.ProductController',
    'templates-main'

])
//    .constant("$ionicLoadingConfig",{
//        template : "加载中 ..."
//    })

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, ngDialogProvider) {

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


        //固定tab在手机的底部

        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('bottom');
        $ionicConfigProvider.platform.android.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-ios-arrow-back');
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            //  home

            .state('tab.home', {
                url: '/home',
                views: {
                    'tab-home': {
                        templateUrl: 'templates/home/tab-home.html',
                        controller: 'HomeController'
                    }
                }
            })

            //  签到

            .state('tab.sign', {
                url: '/sign',
                views: {
                    'tab-home': {
                        templateUrl: 'templates/home/sign.html',
                        controller: 'HomeController'
                    }
                }
            })


            //  规则

            .state('tab.regular', {
                url: '/regular',
                views: {
                    'tab-home': {
                        templateUrl: 'templates/home/regular.html'
//                        controller: 'HomeController'
                    }
                }
            })

            //  抽奖

            .state('lucydraw', {
                url: '/lucydraw',
                templateUrl: 'templates/game/lucydraw.html',
                controller: 'GameController'
            })

            //中奖记录(dyz)
            .state('lucydrawdetail', {
                url: '/lucydrawdetail',
                templateUrl: 'templates/game/lucydrawdetail.html',
                controller: 'GameController'
            })



            // 产品列表

            .state('productlist', {
                url: '/productlist',
                templateUrl: 'templates/product/productlist.html'
            })

            .state('productdetail', {
                url: '/productdetail',
                templateUrl: 'templates/product/productdetail.html',
                controller:'ProductController'
            })

            //提交任务
            .state('submittask', {
                url: '/submittask',
                templateUrl: 'templates/mytask/submittask.html',
                controller: 'SubmitTaskController'
            })


            //我的任务

            .state('tab.mytask', {
                url: '/mytask',
                views: {
                    'tab-mytask': {
                        templateUrl: 'templates/mytask/mytask.html',
                        controller: 'MyTaskController'
                    }
                }
            })

            //income

            .state('tab.income', {
                url: '/income',
                views: {
                    'tab-income': {
                        templateUrl: 'templates/income/tab-income.html',
                        controller: 'IncomeController'
                    }
                }
            })

            // 收益明细

            .state('tab.incomedetail', {
                url: '/incomedetail',
                views: {
                    'tab-income': {
                        templateUrl: 'templates/income/incomedetail.html'
//                        controller:'IncomeController'
                    }
                }
            })

            // 申请提现

            .state('applyoutcome', {
                url: '/applyoutcome',
                templateUrl: 'templates/outcome/applyoutcome.html',
                controller: 'OutComeController'
            })


            //用户中心

            .state('tab.user', {
                url: '/user',
                views: {
                    'tab-user': {
                        templateUrl: 'templates/user/tab-user.html',
                        controller: 'UserController'
                    }
                }
            })

            ////意见反馈
            //
            //.state('tab.feedback', {
            //    url: '/feedback',
            //    views: {
            //        'tab-user': {
            //            templateUrl: 'templates/user/feedback.html'
            //        }
            //    }
            //})

            //我的消息

            .state('tab.message', {
                url: '/message',
                views: {
                    'tab-user': {
                        templateUrl: 'templates/user/message.html'
                    }
                }
            })
            //  我要收徒
          .state('tab.receivepupil', {
            url: '/receivepupil',
            views: {
              'tab-user': {
                templateUrl: 'templates/user/receivepupil.html',
                controller: 'UserController'
              }
            }
          })
          //  联系客服
          .state('tab.linkman', {
            url: '/linkman',
            views: {
              'tab-user': {
                templateUrl: 'templates/user/linkman.html'
              }
            }
          })
          // 客服留言
          .state('tab.leaveword', {
            url: '/leaveword',
            views: {
              'tab-user': {
                templateUrl: 'templates/user/leaveword.html'
              }
            }
          })
            //个人资料

            .state('tab.userinfo', {
                url: '/userinfo',
                views: {
                    'tab-user': {
                        templateUrl: 'templates/user/userinfo.html'
                    }
                }
            })


        $urlRouterProvider.otherwise('/tab/home');

    })

// 全局配饰信息

var globalInfo = function () {
};
var baseurl = "http://10.1.1.205"

globalInfo.getUserInfoUrl = baseurl + ':9000/myApp/www/data/user.json';
globalInfo.getProductListUrl = baseurl + ':9000/myApp/www/data/product.json';
globalInfo.getTaskUserInfoUrl = baseurl + ':9000/myApp/www/data/taskuserinfo.json';
globalInfo.uploadImg = baseurl + ':9000/myApp/www/data/uploadimg.json';
globalInfo.getMyTaskUrl = baseurl + ':9000/myApp/www/data/mytask.json';
