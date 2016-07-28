angular.module('templates-main', ['templates/game/lucydraw.html', 'templates/game/lucydrawdetail.html', 'templates/home/regular.html', 'templates/home/sign.html', 'templates/home/tab-home.html', 'templates/income/incomedetail.html', 'templates/income/tab-income.html', 'templates/mytask/image-popover.html', 'templates/mytask/mytask.html', 'templates/mytask/submittask.html', 'templates/outcome/applyoutcome.html', 'templates/product/productdetail.html', 'templates/product/productlist.html', 'templates/share/alert.html', 'templates/share/confirm.html', 'templates/share/share.html', 'templates/share/sharedialog.html', 'templates/share/shareforfriend.html', 'templates/share/titleconfirm.html', 'templates/tabs.html', 'templates/user/feedback.html', 'templates/user/leaveword.html', 'templates/user/linkman.html', 'templates/user/message.html', 'templates/user/receivepupil.html', 'templates/user/tab-user.html', 'templates/user/userinfo.html']);

angular.module("templates/game/lucydraw.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/game/lucydraw.html",
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
    "      <img src=\"testsource/img////////////////////turntableshadow.png\" alt=\"转盘阴影\" class=\"turn\">\n" +
    "      <img src=\"testsource/img////////////////////lucydraw2.png\" alt=\"点击抽奖\" class=\"turn-center\" id=\"turn_center\">\n" +
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
    "      <img src=\"testsource/img////////////////////lucydrawcat.png\" alt=\"恭喜\" class=\"lucydraw-cat\"/>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</ion-view>\n" +
    "\n" +
    "");
}]);

angular.module("templates/game/lucydrawdetail.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/game/lucydrawdetail.html",
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

angular.module("templates/home/regular.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/home/regular.html",
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

angular.module("templates/home/sign.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/home/sign.html",
    "<ion-view hide-tabs=\"true\" class=\"sign\">\n" +
    "    <ion-content class=\"cbg\">\n" +
    "        <div>\n" +
    "            <img src=\"testsource/img////////////////////////////////////////////////////////////sign.png\" width=\"100%\">\n" +
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

angular.module("templates/home/tab-home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/home/tab-home.html",
    "<ion-view cache-view=\"false\" hide-nav-bar=\"true\">\n" +
    "    <ion-content class=\" home\">\n" +
    "        <ion-slide-box does-continue=\"true\" auto-play=\"true\">\n" +
    "            <ion-slide>\n" +
    "                <div class=\"box item item-image\">\n" +
    "                    <img src=\"testsource/img////////////////////////////////////////////////////////////banner1.png\"/>\n" +
    "                </div>\n" +
    "            </ion-slide>\n" +
    "            <ion-slide>\n" +
    "                <div class=\"box item item-image\">\n" +
    "                    <img src=\"testsource/img////////////////////////////////////////////////////////////banner1.png\"/>\n" +
    "                </div>\n" +
    "            </ion-slide>\n" +
    "            <ion-slide>\n" +
    "                <div class=\"box item item-image\">\n" +
    "                    <img src=\"testsource/img////////////////////////////////////////////////////////////banner1.png\"/>\n" +
    "                </div>\n" +
    "            </ion-slide>\n" +
    "        </ion-slide-box>\n" +
    "        <div class=\"row flex-wrap nav-bg\">\n" +
    "            <div class=\"col col-33 text-center sub-head\" ui-sref=\"tab.sign\">\n" +
    "                <div class=\"del\">\n" +
    "                    <img src=\"testsource/img////////////////////////////////////////////////////////////home-qd.png\" style=\"width: 100%\" >\n" +
    "\n" +
    "                    <p class=\"text-center\">签到</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col col-33  text-center sub-head\" ui-sref=\"lucydraw\" nav-direction=\"forward\">\n" +
    "                <img src=\"testsource/img////////////////////////////////////////////////////////////home-cj.png\">\n" +
    "                <p>抽奖</p>\n" +
    "            </div>\n" +
    "            <div class=\"col col-33 text-center sub-head\" ui-sref=\"tab.regular\" >\n" +
    "                <div class=\"right\">\n" +
    "\n" +
    "                    <img src=\"testsource/img////////////////////////////////////////////////////////////home-gz.png\" style=\"width: 100%\">\n" +
    "                    <p>规则</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"margin-top: -20px\">\n" +
    "\n" +
    "\n" +
    "        <div class=\"row home-calm\">\n" +
    "            <div class=\"col col-50 home-pad\" ui-sref=\"productlist\" nav-direction=\"forward\">\n" +
    "                <img src=\"testsource/img////////////////////////////////////////////////////////////home-calm1.png\">\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"col col-50 home-pad\" ui-sref=\"productlist\" nav-direction=\"forward\">\n" +
    "                <img src=\"testsource/img////////////////////////////////////////////////////////////home-calm2.png\">\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row home-calm\">\n" +
    "            <div class=\"col col-50 home-pad\" ui-sref=\"productlist\" nav-direction=\"forward\">\n" +
    "                <img src=\"testsource/img////////////////////////////////////////////////////////////home-calm3.png\">\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"col col-50 home-pad\">\n" +
    "                <img src=\"testsource/img////////////////////////////////////////////////////////////home-calm4.png\" ui-sref=\"productlist\" nav-direction=\"forward\">\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        </div>\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("templates/income/incomedetail.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/income/incomedetail.html",
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

angular.module("templates/income/tab-income.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/income/tab-income.html",
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

angular.module("templates/mytask/image-popover.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/mytask/image-popover.html",
    "<div class=\"modal\" ng-click=\"closeModal()\">\n" +
    "    <ion-slide-box on-slide-changed=\"slideChanged(index)\" show-pager=\"true\" active-slide=\"activeSlide\">\n" +
    "        <ion-slide ng-repeat=\"image in allImages\">\n" +
    "            <img ng-src=\"{{image.url}}\" style=\"width:100%\"/>\n" +
    "        </ion-slide>\n" +
    "    </ion-slide-box>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/mytask/mytask.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/mytask/mytask.html",
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
    "                                <img class=\"thumb\" src=\"testsource/img////////////////////////////////////////////////////////////pro1.png\">\n" +
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
    "                                <img class=\"thumb\" src=\"testsource/img////////////////////////////////////////////////////////////pro2.png\">\n" +
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
    "                                <img class=\"thumb\" src=\"testsource/img////////////////////////////////////////////////////////////pro3.png\">\n" +
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
    "                            <img class=\"thumb\" src=\"testsource/img////////////////////////////////////////////////////////////pro3.png\">\n" +
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
    "                                <img class=\"thumb\" src=\"testsource/img////////////////////////////////////////////////////////////pro2.png\">\n" +
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
    "                                <img class=\"thumb\" src=\"testsource/img////////////////////////////////////////////////////////////pro1.png\">\n" +
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

angular.module("templates/mytask/submittask.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/mytask/submittask.html",
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

angular.module("templates/outcome/applyoutcome.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/outcome/applyoutcome.html",
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
    "                    <img src=\"testsource/img///////////////////////////////////////////////////////////zhifubao.png\">\n" +
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
    "                        <img src=\"testsource/img///////////////////////////////////////////////////////////weixin.png\">\n" +
    "\n" +
    "                        <div class=\"apply\">\n" +
    "                            <h2>微信</h2>\n" +
    "\n" +
    "                            <p>未绑定</p>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "\n" +
    "                    <li class=\"item item-thumbnail-left ht\">\n" +
    "                        <img src=\"testsource/img///////////////////////////////////////////////////////////yinhangka.png\">\n" +
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
    "                <div class=\"row\" id=\"pickmoney\">\n" +
    "                    <div class=\"col col-20 text-left\" style=\"width: 90px;line-height: 35px;\">提现金额：</div>\n" +
    "                    <div class=\"col col-80\">\n" +
    "                        <div class=\"row text-center\" style=\"margin-bottom:20px;\">\n" +
    "                            <div class=\"col col-33 \">\n" +
    "                                <span class=\"moneybox active\" ng-click=\"select(0)\">10元</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"col col-33\">\n" +
    "                                <span class=\"moneybox\" ng-click=\"select(1)\">20元</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"col col-33\">\n" +
    "                                <span class=\"moneybox\" ng-click=\"select(2)\">30元</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row text-center\" style=\"margin-bottom:20px;\">\n" +
    "                            <div class=\"col col-33 \">\n" +
    "                                <span class=\"moneybox\" ng-click=\"select(3)\">10元</span></div>\n" +
    "                            <div class=\"col col-33\">\n" +
    "                                <span class=\"moneybox\" ng-click=\"select(4)\">20元</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"col col-33\">\n" +
    "                                <span class=\"moneybox\" ng-click=\"select(5)\">30元</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row text-center\">\n" +
    "                            <div class=\"col col-33 \">\n" +
    "                                <span class=\"moneybox\" ng-click=\"select(6)\">10元</span></div>\n" +
    "                            <div class=\"col col-33\">\n" +
    "                                <span class=\"moneybox\" ng-click=\"select(7)\">20元</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"col col-33\">\n" +
    "                                <span class=\"moneybox\" ng-click=\"select(8)\">30元</span>\n" +
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

angular.module("templates/product/productdetail.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/product/productdetail.html",
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
    "                    <img class=\"thumb\" src=\"testsource/img////////////////////////////////////////////////////////////pro1.png\">\n" +
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

angular.module("templates/product/productlist.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/product/productlist.html",
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
    "                                <img class=\"thumb\" src=\"testsource/img////////////////////////////////////////////////////////////pro1.png\">\n" +
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
    "                                <img class=\"thumb\" src=\"testsource/img////////////////////////////////////////////////////////////pro2.png\">\n" +
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

angular.module("templates/share/alert.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/share/alert.html",
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

angular.module("templates/share/confirm.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/share/confirm.html",
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

angular.module("templates/share/share.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/share/share.html",
    "<div class=\"modal modal-bg\" ng-click=\"closeModal()\"></div>\n" +
    "<div class=\"black\">\n" +
    "    <div class=\"row text-center sharecontent\">\n" +
    "        <a class=\" col col-33\">\n" +
    "            <img ng-src=\"testsource/img////////////////////////////////////////////////////////////weixin.png\">\n" +
    "            <!--<p>weixin</p>-->\n" +
    "        </a>\n" +
    "        <a class=\" col col-33\">\n" +
    "            <img ng-src=\"testsource/img////////////////////////////////////////////////////////////QQ.png\">\n" +
    "            <!--<p>weixin</p>-->\n" +
    "        </a>\n" +
    "        <a class=\" col col-33\">\n" +
    "            <img ng-src=\"testsource/img////////////////////////////////////////////////////////////weibo.png\">\n" +
    "            <!--<p>weixin</p>-->\n" +
    "        </a>\n" +
    "\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/share/sharedialog.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/share/sharedialog.html",
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

angular.module("templates/share/shareforfriend.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/share/shareforfriend.html",
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
    "                <img ng-src=\"testsource/img////////////////////////////////////////////////////////////weixin.png\">\n" +
    "                <!--<p>weixin</p>-->\n" +
    "            </a>\n" +
    "            <a class=\" col col-33\">\n" +
    "                <img ng-src=\"testsource/img////////////////////////////////////////////////////////////QQ.png\">\n" +
    "                <!--<p>weixin</p>-->\n" +
    "            </a>\n" +
    "            <a class=\" col col-33\">\n" +
    "                <img ng-src=\"testsource/img////////////////////////////////////////////////////////////weibo.png\">\n" +
    "                <!--<p>weixin</p>-->\n" +
    "            </a>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("templates/share/titleconfirm.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/share/titleconfirm.html",
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

angular.module("templates/tabs.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/tabs.html",
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
    "        <!--<i><img src=\"testsource/img////////////////////////////////////////////////////////////home.png\"style=\"width: 35%\" ></i>-->\n" +
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

angular.module("templates/user/feedback.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/user/feedback.html",
    "<ion-view class=\"message\" hide-tabs=\"true\">\n" +
    "    <ion-header-bar class=\"bar-calm\">\n" +
    "        <a ui-sref=\"tab.user\"> <i class=\"ion-chevron-left backion\" style=\"font-size: 20px ;padding-left: 10px\"></i></a>\n" +
    "        <h5 class=\"title\">提现申请</h5>\n" +
    "    </ion-header-bar>\n" +
    "    <ion-content>\n" +
    "        <ul class=\"list\">\n" +
    "\n" +
    "            <li class=\"item item-thumbnail-left\">\n" +
    "                <img src=\"testsource/img////////////////////////////////////////////////////////////home.png\">\n" +
    "\n" +
    "                <h2>支付宝</h2>\n" +
    "\n" +
    "                <p>未绑定</p>\n" +
    "            </li>\n" +
    "\n" +
    "            <li class=\"item item-thumbnail-left msh\">\n" +
    "                <img src=\"testsource/img////////////////////////////////////////////////////////////home.png\">\n" +
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

angular.module("templates/user/leaveword.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/user/leaveword.html",
    "<ion-view class=\"leaveword\" hide-tabs=\"true\">\n" +
    "  <ion-header-bar class=\"bar-calm\">\n" +
    "    <a onclick=\"history.go(-1)\"> <i class=\"ion-chevron-left backion\" style=\"font-size: 20px ;padding-left: 10px\"></i></a>\n" +
    "    <h5 class=\"title\">客服留言</h5>\n" +
    "  </ion-header-bar>\n" +
    "  <ion-content>\n" +
    "    <ul class=\"list\">\n" +
    "      <li class=\"left\">\n" +
    "        <div class=\"row\" >\n" +
    "          <div class=\"col col-20\"><div class=\"headimg\"></div></div>\n" +
    "          <div class=\"col col-80\"><div class=\"word\">你说什么.你说什么你说什么你说什么你说什么..........</div></div>\n" +
    "        </div>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <div class=\"text-center\">\n" +
    "      <i class=\"time\">6月21日 12:00</i>\n" +
    "    </div>\n" +
    "    <ul class=\"list\">\n" +
    "      <li>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col col-80 text-right\"><div class=\"word wordright\">你说什么......</div></div>\n" +
    "          <div class=\"col col-20\"><div class=\"headimg\"></div></div>\n" +
    "        </div>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col col-80 text-right\"><div class=\"word wordright\">你说什么......</div></div>\n" +
    "          <div class=\"col col-20\"><div class=\"headimg\" style=\"margin-right: 0px\"></div></div>\n" +
    "        </div>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("templates/user/linkman.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/user/linkman.html",
    "<ion-view class=\"linkman\" hide-tabs=\"true\">\n" +
    "  <ion-header-bar class=\"bar-calm\">\n" +
    "    <a ui-sref=\"tab.user\"> <i class=\"ion-chevron-left backion\" style=\"font-size: 20px ;padding-left: 10px\"></i></a>\n" +
    "    <h5 class=\"title\">联系客服</h5>\n" +
    "  </ion-header-bar>\n" +
    "  <ion-content>\n" +
    "    <ul class=\"list\">\n" +
    "      <li class=\"item item-thumbnail-left msh\" ui-sref=\"tab.leaveword\">\n" +
    "        <img src=\"img/leaveword.png\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col col-70\">\n" +
    "            <h2>客服留言</h2>\n" +
    "            <p>内容内容...</p>\n" +
    "          </div>\n" +
    "          <div class=\"col col-30 text-right date\">07-03</div>\n" +
    "        </div>\n" +
    "      </li>\n" +
    "      <li class=\"item item-thumbnail-left msh\">\n" +
    "        <img src=\"img/weixin.png\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col col-70\">\n" +
    "            <h2>微信客服</h2>\n" +
    "            <p>点击获取微信客服号</p>\n" +
    "          </div>\n" +
    "          <div class=\"col col-30 text-right date\">07-03</div>\n" +
    "        </div>\n" +
    "      </li>\n" +
    "      <li class=\"item item-thumbnail-left msh\">\n" +
    "        <img src=\"img/QQ.png\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col col-70\">\n" +
    "            <h2>QQ客服</h2>\n" +
    "            <p>点击获取QQ客服号</p>\n" +
    "          </div>\n" +
    "          <div class=\"col col-30 text-right date\">07-03</div>\n" +
    "        </div>\n" +
    "      </li>\n" +
    "      <li class=\"item item-thumbnail-left msh\">\n" +
    "        <img src=\"img/guanfangsite.png\" class=\"\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col col-70\">\n" +
    "            <h2>官方网站</h2>\n" +
    "            <p>进入官方网站</p>\n" +
    "          </div>\n" +
    "          <div class=\"col col-30 text-right date\">07-03</div>\n" +
    "        </div>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("templates/user/message.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/user/message.html",
    "<ion-view class=\"message\" hide-tabs=\"true\">\n" +
    "  <ion-header-bar class=\"bar-header bar-calm\">\n" +
    "    <a onclick=\"history.go(-1)\"> <i class=\"ion-chevron-left backion light\" style=\"font-size: 20px ;line-height: 30px;padding-left: 10px\"></i></a>\n" +
    "    <h5 class=\"title\">我的消息</h5>\n" +
    "  </ion-header-bar>\n" +
    "\n" +
    "  <ion-content>\n" +
    "    <div class=\"detaillist\">\n" +
    "      <div class=\"row\">\n" +
    "        <img src=\"img/home.png\" alt=\"\" class=\"img\">\n" +
    "        <div class=\"col col-60 text-left\">\n" +
    "          <h2>运营通知</h2>\n" +
    "          <p class=\"tip\" >下载侠更新新功能了</p>\n" +
    "        </div>\n" +
    "        <div class=\"col col-20 text-right\"><i class=\" date\">07-22</i></div>\n" +
    "      </div>\n" +
    "      <div class=\"hr\">\n" +
    "        <hr/>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <img src=\"img/home.png\" alt=\"\" class=\"img\">\n" +
    "        <div class=\"col col-60 text-left\">\n" +
    "          <h2>运营通知</h2>\n" +
    "          <p class=\"tip\" >下载侠更新新功能了</p>\n" +
    "        </div>\n" +
    "        <div class=\"col col-20 text-right\"><i class=\" date\">07-22</i></div>\n" +
    "      </div>\n" +
    "      <div class=\"hr\">\n" +
    "        <hr/>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("templates/user/receivepupil.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/user/receivepupil.html",
    "<ion-view class=\"receivepupil\" hide-tabs=\"true\">\n" +
    "  <ion-header-bar class=\"bar-calm\">\n" +
    "    <a onclick=\"history.go(-1)\"> <i class=\"ion-chevron-left backion light\" style=\"font-size: 20px ;line-height: 30px;padding-left: 10px\"></i></a>\n" +
    "    <h5 class=\"title\">我要收徒</h5>\n" +
    "  </ion-header-bar>\n" +
    "  <ion-content class=\"content\">\n" +
    "    <div class=\"text-center code\">\n" +
    "      <p class=\"usercode\">您的邀请码</p>\n" +
    "      <div class=\"codebd\">\n" +
    "        4KSTPE\n" +
    "      </div>\n" +
    "      <p class=\" fontc\"><span class=\"ion-information-circled\" style=\"color: #ff611b\"></span>\n" +
    "        点击虚线框拷贝邀请码\n" +
    "      </p>\n" +
    "      <div class=\"add\" ng-click=\"share()\">\n" +
    "        立即邀请好友\n" +
    "      </div>\n" +
    "      <p class=\"fontc\">邀请好友可获得高额徒弟收益</p>\n" +
    "    </div>\n" +
    "    <div class=\"grey\"></div>\n" +
    "    <div class=\"padding regbg\">\n" +
    "      <h5 class=\"rg\">徒弟奖励规则</h5>\n" +
    "\n" +
    "      <p class=\" fontc\">\n" +
    "        1、您的好友只要在您发给他的红包页面领取新手红包,下载兼职App成功后便成为您的徒弟。<br/>\n" +
    "        2、您的徒弟完成任务时，您最高可获得1元奖金。<br/>\n" +
    "        3、徒弟的徒弟完成任务您也可以完成相应比例的奖金，以此类推。<br/>\n" +
    "        4、举例说明:如果您每天邀请一位好友成为您的徒弟，您的徒弟再邀请一位徒弟......\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("templates/user/tab-user.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/user/tab-user.html",
    "<ion-view class=\"user\" cache-view=\"false\">\n" +
    "    <ion-content>\n" +
    "\n" +
    "        <div class=\"list\" style=\"background-color: #f5f5f5\">\n" +
    "\n" +
    "\n" +
    "            <div class=\"item item-avatar-left userhed\" style=\"background-color: #5ac7ff\">\n" +
    "\n" +
    "                <img class=\"uimg\" ng-src=\"{{user.head_img_url == '' ? 'testsource/img///////////////////user.png' :user.head_img_url}}\" ui-sref=\"tab.userinfo\">\n" +
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
    "              <div class=\"item item-icon-left item-icon-right pro-item\" ui-sref=\"tab.receivepupil\">\n" +
    "                <i class=\"icon icon-enlightening icon-our\"></i>\n" +
    "\n" +
    "                <h2 class=\"msg\">我要收徒</h2>\n" +
    "                <i class=\"icon ion-ios-arrow-right go\"></i>\n" +
    "              </div>\n" +
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
    "                <!--<div class=\"item item-icon-left item-icon-right pro-item\" ui-sref=\"tab.feedback\">-->\n" +
    "                    <!--<i class=\"icon icon-feedback icon-our\"></i>-->\n" +
    "\n" +
    "                    <!--<h2 class=\"msg\">意见反馈</h2>-->\n" +
    "                    <!--<i class=\"icon ion-ios-arrow-right go\"></i>-->\n" +
    "                <!--</div>-->\n" +
    "              <div class=\"item item-icon-left item-icon-right pro-item\" ui-sref=\"tab.linkman\">\n" +
    "                <i class=\"icon icon-Contact-customer-service icon-our\"></i>\n" +
    "                <h2 class=\"msg\">联系客服</h2>\n" +
    "                <i class=\"icon ion-ios-arrow-right go\"></i>\n" +
    "              </div>\n" +
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

angular.module("templates/user/userinfo.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/user/userinfo.html",
    "<ion-view class=\"userinfo\" cache-view=\"false\" hide-tabs=\"true\">\n" +
    "  <ion-header-bar style=\"background-color: #5AC9FE;\">\n" +
    "    <a onclick=\"history.go(-1)\"> <i class=\"ion-chevron-left backion light\" style=\"font-size: 20px ;line-height: 30px;padding-left: 10px\"></i></a>\n" +
    "    <h5 class=\"title\">个人资料</h5>\n" +
    "    <a ng-click=\"\" style=\"color: white;font-size: 12px;\" class=\"edit\">编辑</a>\n" +
    "  </ion-header-bar>\n" +
    "  <ion-content style=\"background-color: #F5F5F5;\">\n" +
    "    <form action=\"\" method=\"post\">\n" +
    "\n" +
    "      <div style=\"background-color: #fff;\">\n" +
    "        <div class=\"item item-avatar text-center setHead\" style=\"background-color: #5AC9FE\">\n" +
    "          <div class=\"headimg\"  ng-init=\"userImgUrl='img/user.png'\">\n" +
    "            <img class=\"uimg\" ng-src=\"{{userImgUrl}}\">\n" +
    "          </div>\n" +
    "          <h2>\n" +
    "            <a ngf-select=\"upload($file)\" ng-model=\"file\" ngf-pattern=\"image/*\"\n" +
    "               accept=\"image/*\" ngf-resize=\"{width: 76, height: 76}\">设置图像</a></h2>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"detaillist\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col col-85 text-left\">姓名</div>\n" +
    "            <div class=\"col col-15 text-right\"><input type=\"text\" value=\"输入姓名\"  name=\"name\" disabled class=\"name\"/></div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col col-30 text-left\">性别</div>\n" +
    "            <div class=\"col col-35 text-right\"><input type=\"radio\" name=\"sex\" value=\"male\" checked=\"yes\" disabled=\"disabled\">男\n" +
    "            </div>\n" +
    "            <div class=\"col col-35 text-right\"><input type=\"radio\" name=\"sex\" value=\"female\" disabled=\"disabled\">女\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col col-30 text-left\">出生年月</div>\n" +
    "            <div class=\"col col-70 text-center\">\n" +
    "              <input type=\"month\" name=\"\" value=\"1916-02\" max=\"2016-07\" min=\"1916-01\" step=\"1\" class=\"birthday\" style=\"margin-right: 10px\"/>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"row identity\">\n" +
    "            <div class=\"col col-30 text-left\">身份</div>\n" +
    "            <div class=\"col col-35 text-right\"><input type=\"radio\" name=\"identity\" value=\"student\" checked=\"yes\" disabled >学生\n" +
    "            </div>\n" +
    "            <div class=\"col col-35 text-right\"><input type=\"radio\" name=\"identity\" value=\"society\" disabled>社会\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"grey\"></div>\n" +
    "\n" +
    "        <div class=\"detaillist\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col col-40 text-left\">微信号</div> <!--微信号最多20位-->\n" +
    "            <div class=\"col col-60 text-right\"><input type=\"number\" value=\"11111111111111111111\" max=\"\" class=\"name\" disabled/></div>\n" +
    "          </div>\n" +
    "          <div class=\"row\" style=\"border-bottom: none;\">\n" +
    "            <div class=\"col col-40 text-left\">QQ号</div>\n" +
    "            <div class=\"col col-60 text-right\"><input type=\"text\" value=\"11111111111111111111\" disabled class=\"name\"/></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"grey\"></div>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "    </form>\n" +
    "\n" +
    "\n" +
    "  </ion-content>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</ion-view>\n" +
    "\n" +
    "");
}]);
