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
