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
