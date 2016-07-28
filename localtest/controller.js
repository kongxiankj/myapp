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

/**
 * Created by wangying on 16/7/12.
 */
angular.module('starter.HomeController', [])


    .controller('HomeController', function ($scope,$rootScope, $ionicModal,ngDialog) {

        $scope.closeother = function(){
            console.debug("come in outcome");
            $("#other").slideToggle();

        }


        /**
         * 签到页面的规则
         */


        $scope.openhelp = function(){
            $rootScope.tipConfirm('签到规则','');
        }



    })
/**
 * Created by wangying on 16/7/22.
 */

angular.module('starter.IncomeController', [])


    .controller('IncomeController', function ($scope, $rootScope, $ionicModal, UserServ,$ionicLoading) {


        // 加载动画

        $scope.load = function() {
            //显示载入指示器
            $ionicLoading.show({
                template: "正在载入数据，请稍后..."
            });
        }


        // 查询用户信息

        UserServ.getUserInfo().then(function (resp) {
            $ionicLoading.hide();
            if(1 == resp.status){
                $scope.user = resp.data;
            }else{
                $scope.user = '';
            }

        });

        // 分享
        $scope.share = function () {

            $rootScope.shareforfriend();
//          $scope.showModal('templates/share/share.html');
        };

//        $scope.showModal = function (templateUrl) {
//            $ionicModal.fromTemplateUrl(templateUrl, {
//                scope: $scope
////                animation: 'slide-in-up'
//            }).then(function (modal) {
//                $scope.modal = modal;
//                $scope.modal.show();
//            });
//        };

// Close the modal
        $scope.closeModal = function (index) {
            $scope.modal.hide();
            $scope.modal.remove();
        };
//当我们用到模型时，清除它！
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
// 当隐藏的模型时执行动作
        $scope.$on('modal.hide', function () {
            // 执行动作
        });
// 当移动模型时执行动作
        $scope.$on('modal.removed', function () {
            // 执行动作
        });

    })

/**
 * Created by dyz on 16/7/12.
 */
angular.module('starter.GameController', [])

  .controller('GameController', function ($scope) {
    // 获取画布
    var turntable = document.getElementById('turntable');
    var oGC = turntable.getContext('2d');

    // 设置画布宽高
    var turn = document.getElementById('turn');
    turntable.width = turntable.height = turn.clientWidth*0.85;

    // 加载转盘图片
    var img = new Image();
    img.src = 'testsource/img/turntableNum.png';
    img.width = turntable.width;
    img.height = turntable.height;
    img.onload = function(){
      oGC.drawImage(img,0,0,img.width,img.height);

      //  turn-center
      var turnCenter = document.getElementById('turn_center');
      turnCenter.style.top = turn.clientWidth*0.5 - turnCenter.height*0.8 + 'px';
      turnCenter.style.left = turn.clientWidth*0.5 - turnCenter.width*0.5 + 'px';

      turnCenter.addEventListener('touchend',function(){
        /*--stop start--*/
        //指向每块中间的度数：
        //｛ 块数     度数
        //    1       23度
        //    2       68度
        //    3       113度
        //    4       158度
        //    5       203度
        //    6       248度
        //    7       293度
        //    8       338度
        // ｝
        var endAngle = 80;//后台指定的‘度数’,避免指向线条――系统处理
        var totalAngle = 360*3 + endAngle;
        var currentAngle = 0;
        var srartSpeed = 20;
        var speed = srartSpeed;
        var timer = setInterval(function(){
          currentAngle = turning(currentAngle,speed,img,turntable,turn.clientWidth*0.85,turn.clientWidth*0.85);
          speed = 1+(1-currentAngle/totalAngle)*srartSpeed;
          if(currentAngle>=totalAngle){
            clearInterval(timer);
            var numAngle = Math.floor(endAngle/45)+1;
            var lucydrawResult = document.getElementById('lucydrawresult');
            switch (numAngle){
              case 1: lucydrawResult.innerHTML = "获得5元现金"; break;
              case 2: lucydrawResult.innerHTML = "获得华为荣耀一台";break;
              case 3: lucydrawResult.innerHTML = "获得 诺基亚 一台";break;
              case 4: lucydrawResult.innerHTML = "获得电视机一台";break;
              case 5: lucydrawResult.innerHTML = "获得格力空调一部";break;
              case 6: lucydrawResult.innerHTML = "获得DELL笔记本一台";break;
              case 7: lucydrawResult.innerHTML = "没有中奖，欢迎下次再来";break;
              case 8: lucydrawResult.innerHTML = "获得跑步机一台";break;
            }

            setTimeout(function(){
              document.getElementById('popWin').style.display = 'block';
            },500);

          }

        },50);
      });
    };

    //点击确定后，后台将现金放入钱包
    $scope.touchYes = function(){
      turning(0,0,img,turntable,turn.clientWidth*0.85,turn.clientWidth*0.85);
      document.getElementById('popWin').style.display = 'none';
    };

    //转盘方法(rotateAngle:转的角度、img:转盘图片、oC:画布、oCWidth:画布宽、oCHeight:画布高)
    var turning = function(rotateAngle,speed,img,oC,oCWidth,oCHeight){
      //画布清理
      oC.width = oCWidth;
      oC.height = oCHeight;
      var rotateRadian = rotateAngle*Math.PI/180;
      oGC.save();
      oGC.translate(img.width*0.5, img.width*0.5);
      oGC.rotate(rotateRadian);
      oGC.translate(-img.width*0.5,-img.height*0.5);
      oGC.drawImage(img,0,0,img.width,img.height);
      oGC.restore();
      rotateAngle = rotateAngle + speed;
      return rotateAngle;
    };



  })

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
/**
 * Created by wangying on 16/6/13.
 */
angular.module('starter.PurseController', [])

    .controller('PurseController', function ($scope, $ionicHistory) {
        $scope.goback = function () {
            $ionicHistory.goBack(-1);
        };
    });
/**
 * Created by wangying on 16/6/13.
 */
angular.module('fileUpload', ['ngFileUpload']);
angular.module('starter.SubmitTaskController' ,[])

    .controller('SubmitTaskController', function($scope,$state,Upload,$ionicModal,$rootScope) {

       // 提交任务

        $scope.submitTask = function () {
            $state.go('tab.submitsuccess');
        };



      $scope.allImages = [{
       url:  'img/sub1.png'
      },{
          url:  'img/sub2.png'
      },{
          url:  'img/sub3.png'
      }];

        //浏览示例图片

        $scope.showImages = function (index) {
            $scope.activeSlide = index;
            $scope.showModal('templates/mytask/image-popover.html');
        };

        $scope.showModal = function (templateUrl) {
            $ionicModal.fromTemplateUrl(templateUrl, {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
                $scope.modal.show();
            });
        };

        // Close the modal
        $scope.closeModal = function () {
            $scope.modal.hide();
            $scope.modal.remove()
        };

        $scope.imgurl = {
            "display" : "none"
        }
        //  上传图片

        $scope.upload = function (file) {
            var url = globalInfo.uploadImg;
            Upload.upload({
                url: url,
                file:file
            }).then(function (resp) {
                if(!!resp.data){
                    if (1 == resp.data.status) {
                        console.debug("图片上传成功");
                        $scope.userImgUrl= "http://192.168.1.107:9000/myApp/www/upload/"+resp.data.img_url;
                        $scope.imgurl = {
                            "display" : ""
                        }
                    }else{
                        console.debug("图片上传失败");
                    }
                }else{
                    console.debug("图片上传失败");
                }
            }, function errorCallback(response) {
            });
        };



        //下载链接

        $scope.getdown = function (){
            $rootScope.doubleConfirm('提示','您还没有下载此软件，前去下载？','前去下载','取消');



        }



    })

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

/**
 * Created by wangying on 16/7/13.
 */
/**
 * Created by wangying on 16/7/12.
 */
angular.module('starter.UserController', ['starter.UserServices'])


    .controller('UserController', function ($scope,$rootScope,UserServ,$ionicLoading,$ionicModal,Upload) {


        // 加载动画

        $scope.load = function() {
            //显示载入指示器
            $ionicLoading.show({
                template: "正在载入数据，请稍后..."
            });
        }


    // 退出登录

    $scope.layout =function (){
        $rootScope.titleConfirm('您确认退出','确定','取消');
    }

    // 查询用户信息

    UserServ.getUserInfo().then(function (resp) {
        $ionicLoading.hide();
        if(1 == resp.status){
            $scope.user = resp.data;
        }else{
            $scope.user = '';
        }

    });

      $scope.share = function () {
        //$scope.showModal('templates/share/share.html');
        $rootScope.shareforfriend();
      };

//      $scope.showModal = function (templateUrl) {
//        $ionicModal.fromTemplateUrl(templateUrl, {
//          scope: $scope
////                animation: 'slide-in-up'
//        }).then(function (modal) {
//          $scope.modal = modal;
//          $scope.modal.show();
//        });
//      };
      // Close the modal
      $scope.closeModal = function (index) {
        $scope.modal.hide();
        $scope.modal.remove();
      };


      //  userinfo--设置图像
      //  $scope.userImgUrl = "./img/user.png";

      $scope.upload = function(file) {
        var url = globalInfo.uploadImg;
        Upload.upload({
          url: url,
          file:file
        }).then(function (resp) {
          if(!!resp.data){
            if (1 == resp.data.status) {
              console.debug("图片上传成功");
              $scope.userImgUrl= "http://192.168.1.241:9000/myApp/www/upload/"+resp.data.img_url;
              //$scope.imgurl = {
              //  "display" : ""
              //}
            }else{
              console.debug("图片上传失败");
            }
          }else{
            console.debug("图片上传失败");
          }
        }, function errorCallback(response) {
        });
      };



    })

/**
 * Created by wangying on 16/6/17.
 */
angular.module('starter.filter', [])

.filter('status', function() {
        return function(input, parm) {
//            parm = parseInt(parm);
            input = input || new Array();
            var out = new Array();


            // 过滤符合条件的数据

            for (var i = 0; i < input.length; i++) {
                if (input[i].status  == parm) {
                    out.push(input[i]);
                }
            }
            return out;
        };
    })

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