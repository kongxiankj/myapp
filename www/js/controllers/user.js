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
