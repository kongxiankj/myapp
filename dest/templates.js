angular.module('templates-main', ['../www/templates/game/lucydraw.html', '../www/templates/game/lucydrawdetail.html', '../www/templates/home/regular.html', '../www/templates/home/sign.html', '../www/templates/home/tab-home.html', '../www/templates/income/incomedetail.html', '../www/templates/income/tab-income.html', '../www/templates/mytask/image-popover.html', '../www/templates/mytask/mytask.html', '../www/templates/mytask/submittask.html', '../www/templates/outcome/applyoutcome.html', '../www/templates/product/productdetail.html', '../www/templates/product/productlist.html', '../www/templates/share/alert.html', '../www/templates/share/confirm.html', '../www/templates/share/share.html', '../www/templates/share/sharedialog.html', '../www/templates/share/shareforfriend.html', '../www/templates/share/titleconfirm.html', '../www/templates/tabs.html', '../www/templates/user/feedback.html', '../www/templates/user/message.html', '../www/templates/user/tab-user.html', '../www/templates/user/userinfo.html']);

angular.module("../www/templates/game/lucydraw.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/game/lucydraw.html",
    "<ion-view class=\"lucydraw\" hide-tabs=\"true\" cache-view=\"false\">\n" +
    "  <ion-header-bar class=\"header-bgc\">\n" +
    "    <a onclick=\"history.go(-1)\" nav-direction=\"back\"> <i class=\"ion-chevron-left backion light\" style=\"font-size: 20px ;line-height: 30px;padding-left: 10px\"></i></a>\n" +
    "  </ion-header-bar>\n" +
    "  <ion-content class=\"content\">\n" +
    "\n" +
    "    <div class=\"row\"  style=\"padding: 10% 3% 0px;\">\n" +
    "      <div class=\"col col-70 text-left\">\n" +
    "        <p class=\"light\" style=\"font-size: 48px;padding-left: 20px;font-weight: 700;\">9301</p>\n" +
    "        <p class=\"light\" style=\"font-size: 22px;text-align: center;padding-top: 5px;\">积分</p>\n" +
    "      </div>\n" +
    "      <div class=\"col col-30 text-right\" style=\"padding: 25px 10px;font-size: 15px\">\n" +
    "        <a ui-sref=\"lucydrawdetail\" class=\"light\" style=\"padding-right: 10px;\">中奖记录</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"turn\" id=\"turn\">\n" +
    "      <canvas class=\"turntable\" id=\"turntable\">\n" +
    "      </canvas>\n" +
    "      <!--turntable阴影-->\n" +
    "      <img src=\"img/turntableshadow.png\" alt=\"转盘阴影\" class=\"turn\">\n" +
    "      <img src=\"img/lucydraw2.png\" alt=\"点击抽奖\" class=\"turn-center\" id=\"turn_center\">\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "\n" +
    "  <!--抽奖结果-->\n" +
    "  <div id=\"popWin\" class=\"popWin\" style=\"display: none\">\n" +
    "    <div class=\"popWin-content\">\n" +
    "      <div class=\"popWin-box\" id=\"popWin_box\">\n" +
    "        <div class=\"text\" id=\"lucydrawresult\"></div>\n" +
    "        <div class=\"butt\">\n" +
    "          <a href=\"javascript:;\" class=\"submit\" ng-click=\"touchYes()\">确定</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <img src=\"img/lucydrawcat.png\" alt=\"恭喜\" class=\"lucydraw-cat\"/>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</ion-view>\n" +
    "\n" +
    "");
}]);

angular.module("../www/templates/game/lucydrawdetail.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/game/lucydrawdetail.html",
    "<ion-view class=\"lucydrawdetail\" hide-tabs=\"true\">\n" +
    "  <ion-header-bar class=\"bar-header bar-calm\">\n" +
    "    <a onclick=\"history.go(-1)\"> <i class=\"ion-chevron-left backion light\" style=\"font-size: 20px ;line-height: 30px;padding-left: 10px\"></i></a>\n" +
    "    <h5 class=\"title\">抽奖记录</h5>\n" +
    "  </ion-header-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "    <div class=\"detaillist\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col col-50 text-left money\"><i class=\"num\">10元</i>现金</div>\n" +
    "        <div class=\"col col-50 text-right\"><i class=\"date\">2016-07-22</i></div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col col-50 text-left money\"><i class=\"num\">10元</i>现金</div>\n" +
    "        <div class=\"col col-50 text-right\"><i class=\"date\">2016-07-22</i></div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("../www/templates/home/regular.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/home/regular.html",
    "<ion-view hide-tabs=\"true\" class=\"regular\">\n" +
    "    <ion-header-bar class=\"bar-header bar-calm\">\n" +
    "        <a ui-sref=\"tab.home\" nav-direction=\"back\">\n" +
    "            <i class=\"ion-chevron-left text-center\"\n" +
    "               style=\"font-size: 20px ;padding: 10px 10px;line-height: 1.8;\"></i>\n" +
    "        </a>\n" +
    "        <h5 class=\"title\">规则</h5>\n" +
    "    </ion-header-bar>\n" +
    "    <ion-content style=\"background-color: #f5f5f5\">\n" +
    "        <div>\n" +
    "            <p class=\"regular-title\"><span class=\"rg\"></span>怎么赚钱</p>\n" +
    "            <div class=\"regular-text\">\n" +
    "                <p>1、首先，新用户可以通过下载本地APP并注册得到新手红包现金</p><br/>\n" +
    "\n" +
    "                <p>2、接下来，您可以在本APP首页中分类的任务中选取您喜欢的任务点击进入详情页面阅读任务步骤\n" +
    "                    ，开始点击领取任务，开始任务。</p><br/>\n" +
    "                <p>3、最后，您可以在收益页查看您的收益并提现到您的微信钱包或支付宝中</p>\n" +
    "            </div>\n" +
    "\n" +
    "            <p class=\"regular-title\"><span class=\"rg\"></span>了解积分</p>\n" +
    "            <div class=\"regular-text\">\n" +
    "                <p>1、首先，新用户可以通过下载本地APP并注册得到新手红包现金</p><br/>\n" +
    "\n" +
    "                <p>2、接下来，您可以在本APP首页中分类的任务中选取您喜欢的任务点击进入详情页面阅读任务步骤\n" +
    "                    ，开始点击领取任务，开始任务。</p><br/>\n" +
    "                <p>3、最后，您可以在收益页查看您的收益并提现到您的微信钱包或支付宝中</p>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </ion-content>\n" +
    "\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("../www/templates/home/sign.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/home/sign.html",
    "<ion-view hide-tabs=\"true\" class=\"sign\">\n" +
    "    <ion-content class=\"cbg\">\n" +
    "        <div>\n" +
    "            <img src=\"img/sign.png\" width=\"100%\">\n" +
    "\n" +
    "            <div class=\"row hed\">\n" +
    "                <div class=\"col col-50\" >\n" +
    "                    <!--<a >-->\n" +
    "                    <div style=\"width: 30px;height: 30px\" ui-sref=\"tab.home\">\n" +
    "\n" +
    "\n" +
    "                        <i class=\"ion-chevron-left text-center\"\n" +
    "                           style=\"font-size: 20px ;color: #ffffff\"></i>\n" +
    "                    </div>\n" +
    "                    <!--</a>-->\n" +
    "                </div>\n" +
    "                <div class=\"col col-50 text-right\">\n" +
    "                    <div style=\"height: 30px;text-align: right\" ng-click=\"openhelp()\">\n" +
    "                        <i class=\"ion-help-circled text-right\"\n" +
    "                           style=\"font-size: 20px ; color: #ffffff\"></i>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"tnum\">\n" +
    "                <span>10</span><span style=\"font-size: 24px;padding-left: 10px\">积分</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"text-center qdgz\">\n" +
    "            <span>明日签到可获得<span class=\"num\">15</span>积分</span><br/>\n" +
    "            <span style=\"color: #7a7a7a\">连续签到更多惊喜等你来拿！</span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"tsign text-center\">\n" +
    "            签到\n" +
    "        </div>\n" +
    "\n" +
    "    </ion-content>\n" +
    "</ion-view>");
}]);

angular.module("../www/templates/home/tab-home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/home/tab-home.html",
    "<ion-view cache-view=\"false\" hide-nav-bar=\"true\">\n" +
    "    <ion-content class=\" home\">\n" +
    "        <ion-slide-box does-continue=\"true\" auto-play=\"true\">\n" +
    "            <ion-slide>\n" +
    "                <div class=\"box item item-image\">\n" +
    "                    <img src=\"img/banner1.png\"/>\n" +
    "                </div>\n" +
    "            </ion-slide>\n" +
    "            <ion-slide>\n" +
    "                <div class=\"box item item-image\">\n" +
    "                    <img src=\"img/banner1.png\"/>\n" +
    "                </div>\n" +
    "            </ion-slide>\n" +
    "            <ion-slide>\n" +
    "                <div class=\"box item item-image\">\n" +
    "                    <img src=\"img/banner1.png\"/>\n" +
    "                </div>\n" +
    "            </ion-slide>\n" +
    "        </ion-slide-box>\n" +
    "        <div class=\"row flex-wrap nav-bg\">\n" +
    "            <div class=\"col col-33 text-center sub-head\" ui-sref=\"tab.sign\">\n" +
    "                <div class=\"del\">\n" +
    "                    <img src=\"img/home-qd.png\" style=\"width: 100%\" >\n" +
    "\n" +
    "                    <p class=\"text-center\">签到</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col col-33  text-center sub-head\" ui-sref=\"lucydraw\" nav-direction=\"forward\">\n" +
    "                <img src=\"img/home-cj.png\">\n" +
    "                <p>抽奖</p>\n" +
    "            </div>\n" +
    "            <div class=\"col col-33 text-center sub-head\" ui-sref=\"tab.regular\" >\n" +
    "                <div class=\"right\">\n" +
    "\n" +
    "                    <img src=\"img/home-gz.png\" style=\"width: 100%\">\n" +
    "                    <p>规则</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"margin-top: -20px\">\n" +
    "\n" +
    "\n" +
    "        <div class=\"row home-calm\">\n" +
    "            <div class=\"col col-50 home-pad\" ui-sref=\"productlist\" nav-direction=\"forward\">\n" +
    "                <img src=\"img/home-calm1.png\">\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"col col-50 home-pad\" ui-sref=\"productlist\" nav-direction=\"forward\">\n" +
    "                <img src=\"img/home-calm2.png\">\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row home-calm\">\n" +
    "            <div class=\"col col-50 home-pad\" ui-sref=\"productlist\" nav-direction=\"forward\">\n" +
    "                <img src=\"img/home-calm3.png\">\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"col col-50 home-pad\">\n" +
    "                <img src=\"img/home-calm4.png\" ui-sref=\"productlist\" nav-direction=\"forward\">\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        </div>\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("../www/templates/income/incomedetail.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/income/incomedetail.html",
    "<ion-view hide-tabs=\"true\" class=\"incomedetail\">\n" +
    "    <ion-header-bar class=\"bar-header bar-calm\">\n" +
    "        <a ui-sref=\"tab.income\" class=\"backbtn\"> <i class=\"ion-chevron-left text-center\"\n" +
    "                                                    style=\"font-size: 20px ;padding: 10px 10px;line-height: 1.8;\"></i></a>\n" +
    "        <h5 class=\"title\">收益明细</h5>\n" +
    "    </ion-header-bar>\n" +
    "    <ion-content class=\"cbg\">\n" +
    "        <div class=\"row itemlist\">\n" +
    "            <div class=\"col col-50 hed\">\n" +
    "                <div class=\"item-input item-select selecthg\">\n" +
    "                    <div class=\"text-left\">\n" +
    "                        2016年\n" +
    "                    </div>\n" +
    "                    <select class=\"text-right select\">\n" +
    "                        <option value=\"1\">01月</option>\n" +
    "                        <option value=\"2\">02月</option>\n" +
    "                        <option value=\"3\">03月</option>\n" +
    "                        <option value=\"4\">04月</option>\n" +
    "                        <option value=\"5\">05月</option>\n" +
    "                        <option value=\"6\">06月</option>\n" +
    "                        <option value=\"7\" selected=\"\">07</option>\n" +
    "                        <option value=\"8\">08月</option>\n" +
    "                        <option value=\"9\">09月</option>\n" +
    "                        <option value=\"10\">10月</option>\n" +
    "                        <option value=\"11\"><11月</option>\n" +
    "                        <option value=\"12\">12月</option>\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col col-50\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col col-50 text-left\">收入 (元)</div>\n" +
    "                    <div class=\"col col-50 text-right\">0.00</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\" padding headtitle\">\n" +
    "            明细\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"itemlist\">\n" +
    "            <p class=\"pad date\">13日－星期一</p>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col col-50 text-left\">自己收益</div>\n" +
    "                <div class=\"col col-50 text-right\">+4.00</div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"pad\">\n" +
    "                <hr class=\"hr\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col col-50 text-left\">徒弟收益</div>\n" +
    "                <div class=\"col col-50 text-right\">+3.50</div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </ion-content>\n" +
    "</ion-view>");
}]);

angular.module("../www/templates/income/tab-income.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/income/tab-income.html",
    "<ion-view class=\"income\" view-title=\"消息\">\n" +
    "    <ion-content>\n" +
    "        <div class=\"contentbg\">\n" +
    "            <div class=\"bg syh\">\n" +
    "                <div class=\"row head\">\n" +
    "                    <div class=\"col col-50 text-left\">\n" +
    "                        今日收益(元)\n" +
    "                        <p class=\"time\">2016-07-12</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col col-50 text-right\" ui-sref=\"tab.incomedetail\">收益明细</div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\" col col-50 text-left tincome\">0.00</div>\n" +
    "                </div>\n" +
    "                <div class=\"row \">\n" +
    "                    <div class=\"col col-50 text-left\">\n" +
    "                        昨日收益(元)\n" +
    "                        <p>0.00</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col col-50 text-left\">总收益(元)\n" +
    "                        <p>{{user.balance}}</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"item-bg\">\n" +
    "                <div class=\"row padding\">\n" +
    "                    <div class=\"col col-50 text-left\">可用余额（元） <span style=\"color: #ff611b\">{{user.balance}}</span></div>\n" +
    "                    <div class=\"col col-50 text-right\">\n" +
    "                        <span class=\"out\" ui-sref=\"applyoutcome\" nav-direction=\"forward\">提现</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"item-bg\">\n" +
    "                <div class=\"row padding\">\n" +
    "                    <div class=\"col col-50 text-left\">\n" +
    "                        徒弟收益（元）\n" +
    "                        <p>0.00</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col col-50 text-left\">\n" +
    "                        徒弟数 (人)\n" +
    "                        <p>5</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"text-center code\">\n" +
    "                <p class=\"usercode\">您的邀请码</p>\n" +
    "\n" +
    "                <div class=\"codebd\">\n" +
    "                    {{user.promo_code}}\n" +
    "                </div>\n" +
    "\n" +
    "                <p class=\" fontc\">\n" +
    "                    <span class=\"ion-information-circled\" style=\"color: #ff611b\"></span>\n" +
    "                    点击虚线框拷贝邀请码</p>\n" +
    "\n" +
    "                <div class=\"add\" ng-click=\"share()\">\n" +
    "                    立即邀请好友\n" +
    "                </div>\n" +
    "                <p class=\"fontc\">邀请好友可获得高额徒弟收益</p>\n" +
    "            </div>\n" +
    "            <div class=\"padding regbg\">\n" +
    "                <h5 class=\"rg\">徒弟奖励规则</h5>\n" +
    "\n" +
    "                <p class=\" fontc\">1、好友注册时添加注册码，或好友通过扫描您的二维码注册。<br/>\n" +
    "                    2、您的徒弟完成任务之后，您可得奖励1元钱，最高为10元\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("../www/templates/mytask/image-popover.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/mytask/image-popover.html",
    "<div class=\"modal\" ng-click=\"closeModal()\">\n" +
    "    <ion-slide-box on-slide-changed=\"slideChanged(index)\" show-pager=\"true\" active-slide=\"activeSlide\">\n" +
    "        <ion-slide ng-repeat=\"image in allImages\">\n" +
    "            <img ng-src=\"{{image.url}}\" style=\"width:100%\"/>\n" +
    "        </ion-slide>\n" +
    "    </ion-slide-box>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../www/templates/mytask/mytask.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/mytask/mytask.html",
    "<ion-view class=\"mytask\" cache-view=\"false\">\n" +
    "    <ion-header-bar class=\"bar-header bar-calm\">\n" +
    "        <h5 class=\"title\">我的任务</h5>\n" +
    "    </ion-header-bar>\n" +
    "    <ion-tabs class=\" tabs-striped tabs-top \">\n" +
    "        <ion-tab  class=\"our-task\" title=\"全部\">\n" +
    "            <ion-view>\n" +
    "                <ion-content class=\"bg\">\n" +
    "                    <!--<ion-refresher-->\n" +
    "                    <!--pulling-text=\"Pull to refresh...\"-->\n" +
    "                    <!--on-refresh=\"doRefresh()\">-->\n" +
    "                    <!--</ion-refresher>-->\n" +
    "                    <ion-list>\n" +
    "                        <div class=\"card pro\">\n" +
    "                            <div class=\"item-remove-animate  item-thumbnail-left pro-item\">\n" +
    "                                <img class=\"thumb\" src=\"img/pro1.png\">\n" +
    "                                <span style=\"font-size: 14px\">关注公众号＋转发朋友圈</span><br>\n" +
    "                                <span style=\"font-size: 10px\">北京｜学生</span><br>\n" +
    "                                   <span class=\"item-note pro-mon\">\n" +
    "                                        <span style=\"font-size: 20px;color: #ff611b\">1.5</span>元\n" +
    "                                  </span>\n" +
    "                                <span style=\"font-size: 10px\">剩余200次</span><br>\n" +
    "                                <span style=\"font-size: 10px\">2016-07-30截止</span>\n" +
    "                            </div>\n" +
    "                            <p class=\"text-center pro-tip\">\n" +
    "                                请在00:00:00内按任务提交请求\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"card pro\">\n" +
    "                            <div class=\"item-remove-animate  item-thumbnail-left pro-item\">\n" +
    "                                <img class=\"thumb\" src=\"img/pro2.png\">\n" +
    "                                <span style=\"font-size: 14px\">关注公众号＋转发朋友圈</span><br>\n" +
    "                                <span style=\"font-size: 10px\">北京｜学生</span><br>\n" +
    "                                   <span class=\"item-note pro-mon\">\n" +
    "                                        <span style=\"font-size: 20px;color: #ff611b\">1.5</span>元\n" +
    "                                  </span>\n" +
    "                                <span style=\"font-size: 10px\">剩余200次</span><br>\n" +
    "                                <span style=\"font-size: 10px\">2016-07-30截止</span>\n" +
    "                            </div>\n" +
    "                            <p class=\"text-center pro-tip\">\n" +
    "                                请在00:00:00内按任务提交请求\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"card pro\">\n" +
    "                            <div class=\"item-remove-animate  item-thumbnail-left pro-item\">\n" +
    "                                <img class=\"thumb\" src=\"img/pro3.png\">\n" +
    "                                <span style=\"font-size: 14px\">关注公众号＋转发朋友圈</span><br>\n" +
    "                                <span style=\"font-size: 10px\">北京｜学生</span><br>\n" +
    "                                   <span class=\"item-note pro-mon\">\n" +
    "                                        <span style=\"font-size: 20px;color: #ff611b\">1.5</span>元\n" +
    "                                  </span>\n" +
    "                                <span style=\"font-size: 10px\">剩余200次</span><br>\n" +
    "                                <span style=\"font-size: 10px\">2016-07-30截止</span>\n" +
    "                            </div>\n" +
    "                            <p class=\"text-center pro-tip\">\n" +
    "                                请在00:00:00内按任务提交请求\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                    </ion-list>\n" +
    "                    <!--<ion-infinite-scroll on-infinite=\"load_more();\">-->\n" +
    "                    <!--</ion-infinite-scroll>-->\n" +
    "                </ion-content>\n" +
    "            </ion-view>\n" +
    "        </ion-tab>\n" +
    "        <ion-tab title=\"进行中\">\n" +
    "            <ion-view>\n" +
    "                <ion-content class=\"bg\">\n" +
    "                    <ion-list>\n" +
    "                    <div class=\"card pro\">\n" +
    "                        <div class=\"item-remove-animate  item-thumbnail-left pro-item\">\n" +
    "                            <img class=\"thumb\" src=\"img/pro3.png\">\n" +
    "                            <span style=\"font-size: 14px\">关注公众号＋转发朋友圈</span><br>\n" +
    "                            <span style=\"font-size: 10px\">北京｜学生</span><br>\n" +
    "                                   <span class=\"item-note pro-mon\">\n" +
    "                                        <span style=\"font-size: 20px;color: #ff611b\">1.5</span>元\n" +
    "                                  </span>\n" +
    "                            <span style=\"font-size: 10px\">剩余200次</span><br>\n" +
    "                            <span style=\"font-size: 10px\">2016-07-30截止</span>\n" +
    "                        </div>\n" +
    "                        <p class=\"text-center pro-tip\">\n" +
    "                            请在00:00:00内按任务提交请求\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                    </ion-list>\n" +
    "                </ion-content>\n" +
    "            </ion-view>\n" +
    "        </ion-tab>\n" +
    "        <ion-tab title=\"审核中\">\n" +
    "            <ion-view>\n" +
    "                <ion-content class=\"bg\">\n" +
    "                    <ion-list>\n" +
    "                        <div class=\"card pro\">\n" +
    "                            <div class=\"item-remove-animate  item-thumbnail-left pro-item\">\n" +
    "                                <img class=\"thumb\" src=\"img/pro2.png\">\n" +
    "                                <span style=\"font-size: 14px\">关注公众号＋转发朋友圈</span><br>\n" +
    "                                <span style=\"font-size: 10px\">北京｜学生</span><br>\n" +
    "                                   <span class=\"item-note pro-mon\">\n" +
    "                                        <span style=\"font-size: 20px;color: #ff611b\">1.5</span>元\n" +
    "                                  </span>\n" +
    "                                <span style=\"font-size: 10px\">剩余200次</span><br>\n" +
    "                                <span style=\"font-size: 10px\">2016-07-30截止</span>\n" +
    "                            </div>\n" +
    "                            <p class=\"text-center pro-tip\">\n" +
    "                                审核中\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </ion-list>\n" +
    "\n" +
    "                </ion-content>\n" +
    "            </ion-view>\n" +
    "        </ion-tab>\n" +
    "        <ion-tab title=\"已结束\">\n" +
    "            <ion-view>\n" +
    "                <ion-content class=\"bg\">\n" +
    "                    <ion-list>\n" +
    "                        <div class=\"card pro\">\n" +
    "                            <div class=\"item-remove-animate  item-thumbnail-left pro-item\">\n" +
    "                                <img class=\"thumb\" src=\"img/pro1.png\">\n" +
    "                                <span style=\"font-size: 14px\">关注公众号＋转发朋友圈</span><br>\n" +
    "                                <span style=\"font-size: 10px\">北京｜学生</span><br>\n" +
    "                                   <span class=\"item-note pro-mon\">\n" +
    "                                        <span style=\"font-size: 20px;color: #ff611b\">1.5</span>元\n" +
    "                                  </span>\n" +
    "                                <span style=\"font-size: 10px\">剩余200次</span><br>\n" +
    "                                <span style=\"font-size: 10px\">2016-07-30截止</span>\n" +
    "                            </div>\n" +
    "                            <p class=\"text-center pro-tip\">\n" +
    "                                已结束\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </ion-list>\n" +
    "                </ion-content>\n" +
    "            </ion-view>\n" +
    "        </ion-tab>\n" +
    "    </ion-tabs>\n" +
    "\n" +
    "</ion-view>");
}]);

angular.module("../www/templates/mytask/submittask.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/mytask/submittask.html",
    "<ion-view class=\"submittask\"  hide-tabs=\"true\">\n" +
    "    <ion-header-bar class=\"bar-header bar-calm\">\n" +
    "        <a ui-sref=\"productdetail\" nav-direction=\"back\">\n" +
    "            <i class=\"ion-chevron-left text-center\"\n" +
    "               style=\"font-size: 20px ;padding: 10px 10px;line-height: 1.8;\"></i>\n" +
    "        </a>\n" +
    "        <h5 class=\"title\">提交任务</h5>\n" +
    "    </ion-header-bar>\n" +
    "    <ion-content>\n" +
    "        <div class=\"pro-explain\">\n" +
    "            <p class=\"detail-title\"><span class=\"rg\"></span>任务说明</p>\n" +
    "\n" +
    "            <p class=\"text-center pro-tip\">\n" +
    "            </p>\n" +
    "\n" +
    "            <div class=\"instruction\">1、好友注册时添加注册码，或好友通过扫描您的二维码注册。<br/>\n" +
    "                2、您的徒弟完成任务之后，您可得奖励1元钱，最高为10元\n" +
    "            </div>\n" +
    "            <div class=\"godown\" ng-click=\"getdown()\">下载链接</div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"margin: 5px 0px\" class=\"pro-explain\">\n" +
    "            <p class=\"detail-title\"><span class=\"rg\"></span>注意事项</p>\n" +
    "\n" +
    "            <p class=\"text-center pro-tip\">\n" +
    "            </p>\n" +
    "\n" +
    "            <div class=\"instruction\">\n" +
    "                1、将本文分享到你的朋友圈，微信好友，QQ好友。在朋友点阅之后，即可获得相应的收益。<br/>\n" +
    "                2、下载本APP后，分享到你的朋友圈，在朋友点阅之后，即可获得相应的收益\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "            <form class=\"form\" name=\"submittask\">\n" +
    "                <div class=\"sub-input\">\n" +
    "                <div class=\"item-input input\">\n" +
    "                    <span style=\"padding:0px 8px\"><span class=\"rg\"></span>电话号码:</span>\n" +
    "                    <input class=\"mobile\" type=\"text\" placeholder=\"请输入做任务手机号\">\n" +
    "                </div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div style=\"margin: 5px 0px\" class=\"pro-explain\">\n" +
    "                    <p class=\"detail-title\"><span class=\"rg\"></span>图片示例</p>\n" +
    "\n" +
    "                    <p class=\"text-center pro-tip\">\n" +
    "                    </p>\n" +
    "                    <a class=\"item item-list-detail img-padding\" >\n" +
    "                        <ion-scroll direction=\"x\">\n" +
    "                            <img ng-repeat=\"image in allImages\" ng-src=\"{{image.url}}\"\n" +
    "                                 ng-click=\"showImages($index)\" class=\"image-list-thumb scroll-img\"/>\n" +
    "                        </ion-scroll>\n" +
    "                    </a>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div style=\"margin: 5px 0px\" class=\"pro-explain\">\n" +
    "                    <p class=\"detail-title\"><span class=\"rg\"></span>上传截图</p>\n" +
    "\n" +
    "                    <p class=\"text-center pro-tip\">\n" +
    "                    </p>\n" +
    "\n" +
    "                    <label class=\"item item-input img-padding\">\n" +
    "                        <div class=\"row text-center\">\n" +
    "                            <div class=\"inp\" ng-style=\"imgurl\" >\n" +
    "                                <img ng-src=\"{{userImgUrl}}\" />\n" +
    "                            </div>\n" +
    "                            <!--<div class=\"inp\"><img ng-src=\"{{userImgUrl==null||userImgUrl.length<=0?'upload/5.jpg':userImgUrl}}\" /> </div>-->\n" +
    "                            <div class=\"inp img-up ion-ios-plus-empty text-center\" id=\"photo\" ngf-select=\"upload($file)\" ng-model=\"file\" name=\"file\" ngf-pattern=\"'image/*'\"\n" +
    "                                 accept=\"image/*\" ngf-max-size=\"1MB\" ngf-min-height=\"100\"\n" +
    "                                 ngf-resize=\"{width: 100, height: 100}\" style=\"position: relative;\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </label>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "            </form>\n" +
    "\n" +
    "    </ion-content>\n" +
    "    <ion-footer-bar class=\"bar-positive foot\" align-title=\"center\">\n" +
    "        <a class=\"title foot\" ng-click=\"submitTask();\">提交</a>\n" +
    "    </ion-footer-bar>\n" +
    "\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("../www/templates/outcome/applyoutcome.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/outcome/applyoutcome.html",
    "<ion-view class=\"outcome\" hide-tabs=\"true\">\n" +
    "    <ion-header-bar class=\"bar-calm\">\n" +
    "        <a onclick=\"history.go(-1)\" nav-direction=\"back\"> <i class=\"ion-chevron-left backion\"\n" +
    "                ></i></a>\n" +
    "        <h5 class=\"title\">提现</h5>\n" +
    "    </ion-header-bar>\n" +
    "\n" +
    "    <ion-content>\n" +
    "        <div class=\"cbg\">\n" +
    "\n" +
    "\n" +
    "            <ul class=\"item-list\">\n" +
    "\n" +
    "                <li class=\"item item-thumbnail-left ht\">\n" +
    "                    <img src=\"img/zhifubao.png\">\n" +
    "\n" +
    "                    <div class=\"apply\">\n" +
    "                        <h2>支付宝</h2>\n" +
    "\n" +
    "                        <p>未绑定</p>\n" +
    "                    </div>\n" +
    "\n" +
    "                </li>\n" +
    "                <div id=\"btn\" class=\"open\" ng-click=\"openother()\">\n" +
    "                    查看更多提现方式<span class=\" ion-ios-arrow-down\"></span>\n" +
    "                </div>\n" +
    "                <div id=\"other\">\n" +
    "                    <li class=\"item item-thumbnail-left ht\">\n" +
    "                        <img src=\"img/weixin.png\">\n" +
    "\n" +
    "                        <div class=\"apply\">\n" +
    "                            <h2>微信</h2>\n" +
    "\n" +
    "                            <p>未绑定</p>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "\n" +
    "                    <li class=\"item item-thumbnail-left ht\">\n" +
    "                        <img src=\"img/yinhangka.png\">\n" +
    "\n" +
    "                        <div class=\"apply\">\n" +
    "                            <h2>银行卡</h2>\n" +
    "\n" +
    "                            <p>未绑定</p>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                    <div class=\"ion-chevron-up open\" ng-click=\"closeother()\">\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </ul>\n" +
    "            <div style=\"height: 5px\"> </div>\n" +
    "            <div class=\"padding balance\" style=\"border-bottom: 1px solid #a3a3a3\">\n" +
    "                可提现余额： 30 元\n" +
    "            </div>\n" +
    "            <ion-item class=\"clam\">\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col col-20 text-left\" style=\"width: 90px;line-height: 35px;\">提现金额：</div>\n" +
    "                    <div class=\"col col-80\">\n" +
    "                        <div class=\"row text-center\" style=\"margin-bottom:20px;\">\n" +
    "                            <div class=\"col col-33 \">\n" +
    "                                <span class=\"moneybox active\">10元</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"col col-33\">\n" +
    "                                <span class=\"moneybox\">20元</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"col col-33\">\n" +
    "                                <span class=\"moneybox\">30元</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row text-center\" style=\"margin-bottom:20px;\">\n" +
    "                            <div class=\"col col-33 \">\n" +
    "                                <span class=\"moneybox\">10元</span></div>\n" +
    "                            <div class=\"col col-33\">\n" +
    "                                <span class=\"moneybox\">20元</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"col col-33\">\n" +
    "                                <span class=\"moneybox\">30元</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row text-center\">\n" +
    "                            <div class=\"col col-33 \">\n" +
    "                                <span class=\"moneybox\">10元</span></div>\n" +
    "                            <div class=\"col col-33\">\n" +
    "                                <span class=\"moneybox\">20元</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"col col-33\">\n" +
    "                                <span class=\"moneybox\">30元</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </ion-item>\n" +
    "            <div  class=\"padding\">\n" +
    "\n" +
    "                <p class=\"tip\">支付宝提现每天下午5点之前，当日到账，下午5点之后，次日到账，每日提现最多10次</p>\n" +
    "            <div class=\"subbtn\">确认提交</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("../www/templates/product/productdetail.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/product/productdetail.html",
    "<ion-view hide-tabs=\"true\" class=\"productdetail\">\n" +
    "    <ion-header-bar class=\"bar-header bar-calm\">\n" +
    "        <a ui-sref=\"productlist\" nav-direction=\"back\">\n" +
    "            <i class=\"ion-chevron-left text-center\"\n" +
    "               style=\"font-size: 20px ;padding: 10px 10px;line-height: 1.8;\"></i>\n" +
    "        </a>\n" +
    "        <h5 class=\"title\">任务</h5>\n" +
    "    </ion-header-bar>\n" +
    "    <ion-content style=\"background-color: #f5f5f5\">\n" +
    "        <div class=\"cbg\">\n" +
    "            <p class=\"detail-title\"><span class=\"rg\"></span>关注公众号＋转发朋友圈</p>\n" +
    "\n" +
    "            <p class=\"text-center pro-tip\">\n" +
    "            </p>\n" +
    "\n" +
    "            <div class=\"card pro\">\n" +
    "                <div class=\"item-remove-animate  item-thumbnail-left pro-item\">\n" +
    "                    <img class=\"thumb\" src=\"img/pro1.png\">\n" +
    "                    <span style=\"font-size: 12px\">剩余： 200次</span><br>\n" +
    "                                   <span class=\"item-note pro-mon\">\n" +
    "                                        <span style=\"font-size: 30px;color: #ff611b\">1.5</span>元\n" +
    "                                  </span>\n" +
    "                    <span style=\"font-size: 12px\">限制： 不限</span><br>\n" +
    "\n" +
    "                    <span style=\"font-size: 12px\">审核： 2小时</span><br>\n" +
    "                    <span style=\"font-size: 12px\">截止： 2016-07-30</span>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"pro-explain\">\n" +
    "                <p class=\"detail-title\"><span class=\"rg\"></span>任务说明</p>\n" +
    "\n" +
    "                <p class=\"text-center pro-tip\">\n" +
    "                </p>\n" +
    "\n" +
    "                <p class=\"fontc\">1、好友注册时添加注册码，或好友通过扫描您的二维码注册。<br/>\n" +
    "                    2、您的徒弟完成任务之后，您可得奖励1元钱，最高为10元\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"pro-explain\">\n" +
    "                <p class=\"detail-title\"><span class=\"rg\"></span>美文</p>\n" +
    "\n" +
    "                <p class=\"text-center pro-tip\">\n" +
    "                </p>\n" +
    "\n" +
    "                <p class=\"fontc\">1、好友注册时添加注册码，或好友通过扫描您的二维码注册。<br/>\n" +
    "                    2、您的徒弟完成任务之后，您可得奖励1元钱，最高为10元\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </ion-content>\n" +
    "    <ion-footer-bar>\n" +
    "        <a class=\"title foot\" ng-click=\"showConfirm();\">领取任务</a>\n" +
    "        <!--<a ui-sref=\"submittask\" nav-direction=\"forward\" class=\"title foot\" ng-click=\"showConfirm();\">领取任务</a>-->\n" +
    "        <!--<a class=\"button leftbtn\" href=\"#/tasking\">预览</a>-->\n" +
    "        <!--<a class=\"button rightbtn\" ng-click=\"gobottom();\">立即申请</a>-->\n" +
    "    </ion-footer-bar>\n" +
    "\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("../www/templates/product/productlist.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/product/productlist.html",
    "<ion-view class=\"productlist\" cache-view=\"false\">\n" +
    "    <ion-header-bar class=\"bar-header bar-calm\">\n" +
    "        <a ui-sref=\"tab.home\" nav-direction=\"back\"> <i class=\"ion-chevron-left text-center\"\n" +
    "                                  style=\"font-size: 20px ;padding: 10px 10px;line-height: 1.8;\"></i></a>\n" +
    "        <h5 class=\"title\">0.5-2元区</h5>\n" +
    "    </ion-header-bar>\n" +
    "                <ion-content class=\"bg\">\n" +
    "                    <!--<ion-refresher-->\n" +
    "                    <!--pulling-text=\"Pull to refresh...\"-->\n" +
    "                    <!--on-refresh=\"doRefresh()\">-->\n" +
    "                    <!--</ion-refresher>-->\n" +
    "                    <ion-list>\n" +
    "                        <div class=\"card pro\" ui-sref=\"productdetail\" nav-direction=\"forward\">\n" +
    "                            <div class=\"item-remove-animate  item-thumbnail-left pro-item\">\n" +
    "                                <img class=\"thumb\" src=\"img/pro1.png\">\n" +
    "                                <span style=\"font-size: 14px\">关注公众号＋转发朋友圈</span><br>\n" +
    "                                <span style=\"font-size: 10px\">北京｜学生</span><br>\n" +
    "                                   <span class=\"item-note pro-mon\">\n" +
    "                                        <span style=\"font-size: 20px;color: #ff611b\">1.5</span>元\n" +
    "                                  </span>\n" +
    "                                <span style=\"font-size: 10px\">剩余200次</span><br>\n" +
    "                                <span style=\"font-size: 10px\">2016-07-30截止</span>\n" +
    "                            </div>\n" +
    "                            <p class=\"text-center pro-tip\">\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"card pro\"  ui-sref=\"productdetail\" nav-direction=\"forward\">\n" +
    "                            <div class=\"item-remove-animate  item-thumbnail-left pro-item\">\n" +
    "                                <img class=\"thumb\" src=\"img/pro2.png\">\n" +
    "                                <span style=\"font-size: 14px\">关注公众号＋转发朋友圈</span><br>\n" +
    "                                <span style=\"font-size: 10px\">北京｜学生</span><br>\n" +
    "                                   <span class=\"item-note pro-mon\">\n" +
    "                                        <span style=\"font-size: 20px;color: #ff611b\">1.5</span>元\n" +
    "                                  </span>\n" +
    "                                <span style=\"font-size: 10px\">剩余200次</span><br>\n" +
    "                                <span style=\"font-size: 10px\">2016-07-30截止</span>\n" +
    "                            </div>\n" +
    "                            <p class=\"text-center pro-tip\">\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </ion-list>\n" +
    "                    <!--<ion-infinite-scroll on-infinite=\"load_more();\">-->\n" +
    "                    <!--</ion-infinite-scroll>-->\n" +
    "                </ion-content>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</ion-view>");
}]);

angular.module("../www/templates/share/alert.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/share/alert.html",
    "<style>\n" +
    "    .ngdialog.ngdialog-theme-plain .ngdialog-content {\n" +
    "        color: #000000;\n" +
    "        font-family: 'Helvetica Neue',sans-serif;\n" +
    "        font-size: 1.1em;\n" +
    "        line-height: 1.5em;\n" +
    "        margin: 0 auto;\n" +
    "        max-width: 100%;\n" +
    "        padding:0;\n" +
    "        position: relative;\n" +
    "        width: 80%;\n" +
    "        -moz-border-radius: 10px;\n" +
    "        -webkit-border-radius: 10px;\n" +
    "        border-radius: 10px;\n" +
    "\n" +
    "    }\n" +
    "    .ngdialog.ngdialog-theme-plain .ngdialog-close:before {\n" +
    "        color: #fff;\n" +
    "        font-size: 36px;\n" +
    "\n" +
    "\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"alert\">\n" +
    "    <div class=\"head\">签到规则</div>\n" +
    "    <div class=\"content\">\n" +
    "    <p>1、以10天为单位，第一天签到得10积分</p> </br>\n" +
    "    <p>2、连续签到一天加5积分</p> <br/>\n" +
    "    <p>如：第一天：10积分</p><br/>\n" +
    "    <p>第二天：15积分</p><br/>\n" +
    "    <p>第三天：20积分</p><br/>\n" +
    "    <p>第一天：10积分</p><br/>\n" +
    "    <p>3、如未连续签到，则重第一天开始</p>\n" +
    "    <br>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("../www/templates/share/confirm.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/share/confirm.html",
    "<style>\n" +
    "    .confirmbox{text-align: center;}\n" +
    "    .ngdialog.ngdialog-theme-plain .ngdialog-content {\n" +
    "        color: #000000;\n" +
    "        font-family: 'Helvetica Neue',sans-serif;\n" +
    "        font-size: 1.1em;\n" +
    "        line-height: 1.5em;\n" +
    "        margin: 0 auto;\n" +
    "        max-width: 100%;\n" +
    "        padding:0;\n" +
    "        position: relative;\n" +
    "        width: 80%;\n" +
    "        -moz-border-radius: 10px;\n" +
    "        -webkit-border-radius: 10px;\n" +
    "        border-radius: 10px;\n" +
    "    }\n" +
    "\n" +
    "</style>\n" +
    "<div class=\"confirm\">\n" +
    "\n" +
    "\n" +
    "<div class=\"confirmbox\">\n" +
    "    <div class=\"head\">{{titletext}}</div>\n" +
    "    <br>\n" +
    "    <div class=\"context\">{{content}}</div>\n" +
    "</div>\n" +
    "<div class=\"row btn\">\n" +
    "    <div class=\"col col-50 text-center border-left\" ng-click=\"closeThisDialog('button')\">{{cancelButtonName}}</div>\n" +
    "    <div class=\"col col-50 text-center color-right\" ng-click=\"confirm(confirmValue)\" >{{confirmButtonName}}</div>\n" +
    "</div>\n" +
    "</div>");
}]);

angular.module("../www/templates/share/share.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/share/share.html",
    "<div class=\"modal modal-bg\" ng-click=\"closeModal()\"></div>\n" +
    "<div class=\"black\">\n" +
    "    <div class=\"row text-center sharecontent\">\n" +
    "        <a class=\" col col-33\">\n" +
    "            <img ng-src=\"img/weixin.png\">\n" +
    "            <!--<p>weixin</p>-->\n" +
    "        </a>\n" +
    "        <a class=\" col col-33\">\n" +
    "            <img ng-src=\"img/QQ.png\">\n" +
    "            <!--<p>weixin</p>-->\n" +
    "        </a>\n" +
    "        <a class=\" col col-33\">\n" +
    "            <img ng-src=\"img/weibo.png\">\n" +
    "            <!--<p>weixin</p>-->\n" +
    "        </a>\n" +
    "\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../www/templates/share/sharedialog.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/share/sharedialog.html",
    "<style>\n" +
    "    .confirmbox {\n" +
    "        text-align: center;\n" +
    "    }\n" +
    "\n" +
    "    .ngdialog.ngdialog-theme-plain .ngdialog-content {\n" +
    "        color: #000000;\n" +
    "        font-family: 'Helvetica Neue', sans-serif;\n" +
    "        font-size: 1.1em;\n" +
    "        line-height: 1.5em;\n" +
    "        margin-bottom: 0px;\n" +
    "        max-width: 100%;\n" +
    "        padding: 0;\n" +
    "        position: fixed;\n" +
    "        bottom: 0px;\n" +
    "        width: 100%;\n" +
    "        height: 200px;\n" +
    "\n" +
    "    }\n" +
    "\n" +
    "</style>\n" +
    "<div class=\"sharedialog\" ng-controller=\"ProductController\">\n" +
    "\n" +
    "\n" +
    "    <div class=\"confirmbox\">\n" +
    "        <div class=\"item-input lab\">\n" +
    "            <span class=\"item-lab\">添加分享描述:</span>\n" +
    "            <input class=\"text\" type=\"text\" placeholder=\"\">\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <textarea class=\"textarea\">{{titles}}</textarea>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row row-btn\">\n" +
    "        <div class=\"col col-33 text-center\" ng-click=\"closeThisDialog('button')\" style=\"padding: 8px 10px;\">\n" +
    "            <button class=\"button button-full btn jump\">\n" +
    "                跳过\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"col col-33 text-center\" ng-click=\"changevalue()\" style=\"padding:8px 10px;\">\n" +
    "            <button class=\"button button-full btn change\">\n" +
    "                换一换\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"col col-33 text-center\" ng-click=\"confirm(confirmValue)\" style=\"padding:8px 10px;\">\n" +
    "            <button class=\"button button-full btn copy\">\n" +
    "                复制\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../www/templates/share/shareforfriend.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/share/shareforfriend.html",
    "<style>\n" +
    "    .confirmbox {\n" +
    "        text-align: center;\n" +
    "    }\n" +
    "\n" +
    "    .ngdialog.ngdialog-theme-plain .ngdialog-content {\n" +
    "        color: #000000;\n" +
    "        font-family: 'Helvetica Neue', sans-serif;\n" +
    "        font-size: 1.1em;\n" +
    "        line-height: 1.5em;\n" +
    "        margin-bottom: 0px;\n" +
    "        max-width: 100%;\n" +
    "        padding: 0;\n" +
    "        position: fixed;\n" +
    "        bottom: 0px;\n" +
    "        width: 100%;\n" +
    "        height: 100px;\n" +
    "\n" +
    "    }\n" +
    "\n" +
    "</style>\n" +
    "<div class=\"sharedialog\">\n" +
    "    <div class=\"black\">\n" +
    "        <div class=\"row text-center sharecontent\">\n" +
    "            <a class=\" col col-33\">\n" +
    "                <img ng-src=\"img/weixin.png\">\n" +
    "                <!--<p>weixin</p>-->\n" +
    "            </a>\n" +
    "            <a class=\" col col-33\">\n" +
    "                <img ng-src=\"img/QQ.png\">\n" +
    "                <!--<p>weixin</p>-->\n" +
    "            </a>\n" +
    "            <a class=\" col col-33\">\n" +
    "                <img ng-src=\"img/weibo.png\">\n" +
    "                <!--<p>weixin</p>-->\n" +
    "            </a>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("../www/templates/share/titleconfirm.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/share/titleconfirm.html",
    "<style>\n" +
    "    .confirmbox{text-align: center;}\n" +
    "    .ngdialog.ngdialog-theme-plain .ngdialog-content {\n" +
    "        color: #000000;\n" +
    "        font-family: 'Helvetica Neue',sans-serif;\n" +
    "        font-size: 1.1em;\n" +
    "        line-height: 1.5em;\n" +
    "        margin: 0 auto;\n" +
    "        max-width: 100%;\n" +
    "        padding:0;\n" +
    "        position: relative;\n" +
    "        width: 80%;\n" +
    "        -moz-border-radius: 10px;\n" +
    "        -webkit-border-radius: 10px;\n" +
    "        border-radius: 10px;\n" +
    "    }\n" +
    "\n" +
    "</style>\n" +
    "<div class=\"confirm\">\n" +
    "\n" +
    "\n" +
    "<div class=\"confirmbox\">\n" +
    "    <div class=\"head\">{{titletext}}</div>\n" +
    "</div>\n" +
    "<div class=\"row btn\">\n" +
    "    <div class=\"col col-50 text-center border-left\" ng-click=\"closeThisDialog('button')\">{{cancelButtonName}}</div>\n" +
    "    <div class=\"col col-50 text-center color-right\" ng-click=\"confirm(confirmValue)\" >{{confirmButtonName}}</div>\n" +
    "</div>\n" +
    "</div>");
}]);

angular.module("../www/templates/tabs.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/tabs.html",
    "<!--\n" +
    "Create tabs with an icon and label, using the tabs-positive style.\n" +
    "Each tab's child <ion-nav-view> directive will have its own\n" +
    "navigation history that also transitions its views in and out.\n" +
    "-->\n" +
    "\n" +
    "<!--<ion-nav-bar class=\"bar-stable bar-dark\">-->\n" +
    "    <!--<ion-nav-back-button class=\"button-clear\" style=\"color: #fff\">-->\n" +
    "        <!--<i class=\"ion-arrow-left-c\"></i> -->\n" +
    "    <!--</ion-nav-back-button>-->\n" +
    "<!--</ion-nav-bar>-->\n" +
    "<!--<div class=\"tabs tabs-icon-top tabs-color-active-positive\" ng-class=\"{'tabs-item-hide': $root.hideTabs}\">-->\n" +
    "    <!--<a class=\"tab-item\" href=\"#/tab/home\">-->\n" +
    "        <!--<i><img src=\"img/home.png\"style=\"width: 35%\" ></i>-->\n" +
    "        <!--<p>主页</p>-->\n" +
    "        <!--<ion-nav-view name=\"tab-income\"></ion-nav-view>-->\n" +
    "    <!--</a>-->\n" +
    "<style>\n" +
    "    .tabsize {color:red;\n" +
    "    }\n" +
    "\n" +
    "</style>\n" +
    "\n" +
    "\n" +
    "\n" +
    "     <ion-tabs class=\"tabs-icon-top   tabs-color-active-positive\" ng-class=\"{'tabs-item-hide': $root.hideTabs}\">\n" +
    "         <ion-tab title=\"首页\" class=\"tabsize\" icon-off=\"icon-Home-page\" icon-on=\"icon-Home-page_sx\" ui-sref=\"tab.home\">\n" +
    "             <ion-nav-view name=\"tab-home\"></ion-nav-view>\n" +
    "         </ion-tab>\n" +
    "         <!-- Dashboard Tab -->\n" +
    "         <ion-tab title=\"我的任务\" icon-off=\"icon-My-task\" icon-on=\"icon-My-task_sx\" ui-sref=\"tab.mytask\">\n" +
    "             <ion-nav-view name=\"tab-mytask\"></ion-nav-view>\n" +
    "         </ion-tab>\n" +
    "\n" +
    "         <!--Chats Tab -->\n" +
    "         <ion-tab title=\"收益\" icon-off=\"icon-earnings\" icon-on=\"icon-earnings_sx\" ui-sref=\"tab.income\">\n" +
    "             <ion-nav-view name=\"tab-income\"></ion-nav-view>\n" +
    "         </ion-tab>\n" +
    "\n" +
    "         <!-- Account Tab -->\n" +
    "         <ion-tab title=\"我的\" class=\"tabsize\" icon-off=\"icon-me\" icon-on=\"icon-me_sx\" ui-sref=\"tab.user\">\n" +
    "             <ion-nav-view name=\"tab-user\"></ion-nav-view>\n" +
    "         </ion-tab>\n" +
    "\n" +
    "\n" +
    "     </ion-tabs>\n" +
    "\n" +
    "");
}]);

angular.module("../www/templates/user/feedback.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/user/feedback.html",
    "<ion-view class=\"message\" hide-tabs=\"true\">\n" +
    "    <ion-header-bar class=\"bar-calm\">\n" +
    "        <a ui-sref=\"tab.user\"> <i class=\"ion-chevron-left backion\" style=\"font-size: 20px ;padding-left: 10px\"></i></a>\n" +
    "        <h5 class=\"title\">提现申请</h5>\n" +
    "    </ion-header-bar>\n" +
    "    <ion-content>\n" +
    "        <ul class=\"list\">\n" +
    "\n" +
    "            <li class=\"item item-thumbnail-left\">\n" +
    "                <img src=\"img/home.png\">\n" +
    "\n" +
    "                <h2>支付宝</h2>\n" +
    "\n" +
    "                <p>未绑定</p>\n" +
    "            </li>\n" +
    "\n" +
    "            <li class=\"item item-thumbnail-left msh\">\n" +
    "                <img src=\"img/home.png\">\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col col-70  \">\n" +
    "                        <h2>微信</h2>\n" +
    "\n" +
    "                        <p>未绑定</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col col-30 text-center\">07-03</div>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("../www/templates/user/message.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/user/message.html",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head lang=\"en\">\n" +
    "    <meta charset=\"UTF-8\">\n" +
    "    <title></title>\n" +
    "</head>\n" +
    "<body>\n" +
    "\n" +
    "</body>\n" +
    "</html>");
}]);

angular.module("../www/templates/user/tab-user.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/user/tab-user.html",
    "<ion-view class=\"user\" cache-view=\"false\">\n" +
    "    <ion-content>\n" +
    "\n" +
    "        <div class=\"list\" style=\"background-color: #f5f5f5\">\n" +
    "\n" +
    "\n" +
    "            <div class=\"item item-avatar-left userhed\" style=\"background-color: #5ac7ff\">\n" +
    "\n" +
    "                <img class=\"uimg\" ng-src=\"{{user.head_img_url == '' ? 'img/user.png' :user.head_img_url}}\" ui-sref=\"tab.userinfo\">\n" +
    "\n" +
    "                <h2 style=\"margin: 10px 10px 10px 0px;font-size: 16px;color: #ffffff\">用户名</h2>\n" +
    "\n" +
    "                <p style=\"color: #ffffff;font-size: 18px\" class=\"ion-iphone\"><span style=\"font-size: 14px;padding-left: 5px\">{{user.phone}}</span></p>\n" +
    "            </div>\n" +
    "            <div class=\"card\" style=\"margin: 0px 0px;box-shadow:none;\">\n" +
    "                <div class=\"item row text-center  sub-head\">\n" +
    "                    <div class=\"col col-50 borderright text-left \" style=\"padding: 3px 10px;line-height: 20px\">\n" +
    "                        <a ui-sref=\"applyoutcome\" nav-direction=\"forward\">\n" +
    "                            <div class=\"row sub-head\">\n" +
    "                                <div class=\"col col-50\" style=\"padding: 3px\">\n" +
    "                                    <p style=\"font-size: 12px\">钱包余额</p>\n" +
    "\n" +
    "                                    <p style=\"font-size: 10px\"><span class=\"red\">{{user.balance > 0 ?user.balance :0}}</span>元\n" +
    "                                    </p>\n" +
    "\n" +
    "                                </div>\n" +
    "                                <div class=\"col col-50 text-right\"\n" +
    "                                     style=\"padding: 16px 10px;font-size: 12px;font-weight: bold\">提现\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col col-50\" style=\"padding: 3px;line-height: 20px\" ui-sref=\"lucydraw\" nav-direction=\"forward\">\n" +
    "                        <div class=\"row text-left sub-head\">\n" +
    "                            <div class=\"col col-50\" style=\"padding: 3px\">\n" +
    "                                <p style=\"font-size: 12px\">积分</p>\n" +
    "\n" +
    "                                <p style=\"font-size: 10px\"><span class=\"red\">{{user.points}}</span>分</p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col col-50 text-right\"\n" +
    "                                 style=\"padding: 16px 10px;font-size: 12px;font-weight: bold\">抽奖\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card pro\">\n" +
    "                <div class=\"item item-icon-left item-icon-right pro-item\">\n" +
    "                    <i class=\"icon icon-enlightening icon-our\"></i>\n" +
    "\n" +
    "                    <h2 class=\"msg\">意见反馈</h2>\n" +
    "                    <i class=\"icon ion-ios-arrow-right go\"></i>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"item item-icon-left item-icon-right pro-item\" ui-sref=\"tab.message\">\n" +
    "                    <i class=\"icon icon-My-news icon-our go\"></i>\n" +
    "\n" +
    "                    <h2 class=\"msg\">我的消息</h2>\n" +
    "                    <i class=\"icon ion-ios-arrow-right go\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card pro\">\n" +
    "                <div class=\"item item-icon-left item-icon-right pro-item\" ui-sref=\"tab.feedback\">\n" +
    "                    <i class=\"icon icon-feedback icon-our\"></i>\n" +
    "\n" +
    "                    <h2 class=\"msg\">意见反馈</h2>\n" +
    "                    <i class=\"icon ion-ios-arrow-right go\"></i>\n" +
    "                </div>\n" +
    "                <div class=\"item item-icon-left item-icon-right pro-item\">\n" +
    "                    <i class=\"icon icon-Contact-customer-service icon-our\"></i>\n" +
    "\n" +
    "                    <h2 class=\"msg\">联系客服</h2>\n" +
    "                    <i class=\"icon ion-ios-arrow-right go\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card pro\">\n" +
    "                <div class=\"itempad item item-icon-left item-icon-right \">\n" +
    "                    <i class=\"icon icon-Clear-the-cache go\"></i>\n" +
    "\n" +
    "                    <h2 style=\"color: #363636;\">清理缓存</h2>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card pro\">\n" +
    "                <div class=\"itempad item item-icon-left item-icon-right \">\n" +
    "                    <i class=\"icon icon-Check-the-update go\"></i>\n" +
    "\n" +
    "                    <h2 style=\"color: #363636;\">检查更新</h2>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card pro\"  ng-click=\"layout()\">\n" +
    "                <div class=\"text-center\" style=\"padding: 10px;color: #363636;\">\n" +
    "                    退出当前账户\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("../www/templates/user/userinfo.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../www/templates/user/userinfo.html",
    "<ion-view class=\"userinfo\" cache-view=\"false\">\n" +
    "    <ion-content>\n" +
    "        <div style=\"background-color: #f5f5f5\">\n" +
    "            <div class=\"item item-avatar text-center \" style=\"height:100px;background-color: #5ac7ff\">\n" +
    "                <img class=\"uimg\" ng-src=\"img/pic1.jpg\">\n" +
    "                <h2>设置头像</h2>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"user-list text-center\" ng-click=\"layout()\">\n" +
    "                <div class=\"item\">\n" +
    "                    <h2>退出当前账户</h2>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);
