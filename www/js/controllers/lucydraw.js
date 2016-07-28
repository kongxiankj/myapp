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
