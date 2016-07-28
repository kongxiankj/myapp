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
