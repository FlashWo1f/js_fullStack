## 更新日志

## [v0.5.11](https://github.com/youzan/vant-weapp/tree/v0.5.11) (2019-04-24)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.10...v0.5.11)

**Breaking changes**

- cell的title自定义时，label不显示 [\#1554](https://github.com/youzan/vant-weapp/issues/1554)
- Toast 轻提示 是否可以增加回调函数 [\#1551](https://github.com/youzan/vant-weapp/issues/1551)
- 文档中Badge组件没有列出事件 [\#1542](https://github.com/youzan/vant-weapp/issues/1542)
- dateTimePicker什么没有自定义的custom-class啊，不支持自定义的class [\#1526](https://github.com/youzan/vant-weapp/issues/1526)
- 功能性的优化希望知悉！ [\#1502](https://github.com/youzan/vant-weapp/issues/1502)
- notify 麻烦支持top 和 zIndex [\#1498](https://github.com/youzan/vant-weapp/issues/1498)

**Bug Fixes**

- area 组件无地区选项又不显示了 [\#1543](https://github.com/youzan/vant-weapp/issues/1543)
- 页面只有一个collapse, 点击tabs 的时候重新加载数据,会报错 [\#1515](https://github.com/youzan/vant-weapp/issues/1515)
- van-field 组件在不输入文本时placeholder提示文本没有垂直居中，输入文本正常 [\#1483](https://github.com/youzan/vant-weapp/issues/1483)

**Issue**

- swipe [\#1550](https://github.com/youzan/vant-weapp/issues/1550)
- vant [\#1549](https://github.com/youzan/vant-weapp/issues/1549)
- 关于mpvue使用van-swipe-cell不出现内容 [\#1548](https://github.com/youzan/vant-weapp/issues/1548)
- 提供megalo版本 [\#1547](https://github.com/youzan/vant-weapp/issues/1547)
- tabbar 未适配 iPhone X，border-top 那条线和 icon 重叠了 [\#1545](https://github.com/youzan/vant-weapp/issues/1545)
- van-action-sheet中close-on-click-overlay属性无效 [\#1544](https://github.com/youzan/vant-weapp/issues/1544)
- Dialog弹出框弹出时，其中的Field输入框会向下抖动 [\#1534](https://github.com/youzan/vant-weapp/issues/1534)
- popup底部弹出时，被页面底部内容覆盖 [\#1532](https://github.com/youzan/vant-weapp/issues/1532)
- auth required for publishing [\#1531](https://github.com/youzan/vant-weapp/issues/1531)
- 希望实现通过active属性在业务代码中能控制tabs组件内容切换 [\#1528](https://github.com/youzan/vant-weapp/issues/1528)
- tbs 组件报错 [\#1523](https://github.com/youzan/vant-weapp/issues/1523)
- https://youzan.github.io/vant-weapp 文档打不开 [\#1521](https://github.com/youzan/vant-weapp/issues/1521)
- https://youzan.github.io/vant-weapp 文档打不开 [\#1520](https://github.com/youzan/vant-weapp/issues/1520)
- 动态修改datePicker defaultIndex ，默认选中项不更新 [\#1519](https://github.com/youzan/vant-weapp/issues/1519)
- 构建npm成功之后，编译报错 : module "miniprogram\_npm/vant-weapp/mixins/observer/props" is not defined [\#1516](https://github.com/youzan/vant-weapp/issues/1516)
- 新需求：van-goods-action-input [\#1514](https://github.com/youzan/vant-weapp/issues/1514)
- 按钮box-shadow在ios问题 [\#1513](https://github.com/youzan/vant-weapp/issues/1513)
- Dialog弹窗被原生组件覆盖 [\#1511](https://github.com/youzan/vant-weapp/issues/1511)
- NavBar 组件safe-area-inset-top属性设置无效 [\#1505](https://github.com/youzan/vant-weapp/issues/1505)

**Improvements**

- \[new feature\] Icon: update @vant/icons [\#1560](https://github.com/youzan/vant-weapp/pull/1560) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] DatetimePicker: add new prop formatter & add new external classes [\#1558](https://github.com/youzan/vant-weapp/pull/1558) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Badge: add new event click & improve docs [\#1557](https://github.com/youzan/vant-weapp/pull/1557) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Area: 修复同步设置areaList时不显示选项 [\#1556](https://github.com/youzan/vant-weapp/pull/1556) ([rex-zsd](https://github.com/rex-zsd))
- refactor\(Picker\): 回滚movable-view重构 @rex-zsd [\#1555](https://github.com/youzan/vant-weapp/pull/1555) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Slider: fix slider drag and `value` props change at the same time can not drag success [\#1553](https://github.com/youzan/vant-weapp/pull/1553) ([cookfront](https://github.com/cookfront))
- \[new feature\] Toast: add new option onClose & add new slot [\#1552](https://github.com/youzan/vant-weapp/pull/1552) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Picker: add new prop default-index [\#1540](https://github.com/youzan/vant-weapp/pull/1540) ([rex-zsd](https://github.com/rex-zsd))
- \[Doc\] update demo index [\#1539](https://github.com/youzan/vant-weapp/pull/1539) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Collapse: add clickable prop [\#1538](https://github.com/youzan/vant-weapp/pull/1538) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Notify: add new prop zIndex [\#1535](https://github.com/youzan/vant-weapp/pull/1535) ([rex-zsd](https://github.com/rex-zsd))
- \[Doc\] Icon: update demo [\#1530](https://github.com/youzan/vant-weapp/pull/1530) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] SubmitBar: add decimal-length prop [\#1529](https://github.com/youzan/vant-weapp/pull/1529) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] Field: add right-icon & fix placeholder style problem [\#1527](https://github.com/youzan/vant-weapp/pull/1527) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] Picker: refactor component with movable-view [\#1524](https://github.com/youzan/vant-weapp/pull/1524) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Collapse: remove reference from children of collapse when collapse-item unlinked [\#1517](https://github.com/youzan/vant-weapp/pull/1517) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Cell: add new prop useLabelSlot & add new slot label [\#1510](https://github.com/youzan/vant-weapp/pull/1510) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Feild: add error-message-align prop [\#1509](https://github.com/youzan/vant-weapp/pull/1509) ([zavven](https://github.com/zavven))

## [v0.5.10](https://github.com/youzan/vant-weapp/tree/v0.5.10) (2019-04-11)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.9...v0.5.10)

**Breaking changes**

- van-tabs多个tab页的情况下   切换tab页会显示滚动条 [\#1471](https://github.com/youzan/vant-weapp/issues/1471)

**Bug Fixes**

- BUG:当组件van-collapse 被第二个van-tab中使用时，默认展开的效果会丢失 [\#1494](https://github.com/youzan/vant-weapp/issues/1494)
- SwipeCell 内放输入框无法focus输入 [\#1464](https://github.com/youzan/vant-weapp/issues/1464)

**Issue**

- css错误 [\#1508](https://github.com/youzan/vant-weapp/issues/1508)
- 我想在自己的组件中再次封装vant组件，始终不起作用，在page中是有效的 [\#1507](https://github.com/youzan/vant-weapp/issues/1507)
- 当页面同时使用两个tab时点击切换后第二个tab的当前标签没有恢复到第一个 [\#1503](https://github.com/youzan/vant-weapp/issues/1503)
- 感谢你们的辛勤付出 [\#1500](https://github.com/youzan/vant-weapp/issues/1500)
- title-active-color 自定义颜色，选中时文字的颜色没有变化 [\#1499](https://github.com/youzan/vant-weapp/issues/1499)
- van-swipe-cell所有的点击都没有效果 [\#1497](https://github.com/youzan/vant-weapp/issues/1497)
- 我在mpvue中引入van-swipe-cell,没有任何效果 [\#1496](https://github.com/youzan/vant-weapp/issues/1496)
- Bug：van-info在引用wxParse的页面中数字错位 [\#1495](https://github.com/youzan/vant-weapp/issues/1495)
- van-dialog 加 van-field,弹出后field文字会抖动一下 [\#1488](https://github.com/youzan/vant-weapp/issues/1488)
- tree-select点击事件没有效果？ [\#1487](https://github.com/youzan/vant-weapp/issues/1487)

**Improvements**

- \[bugfix\] Collapse: improve performance & optimize initial style set [\#1506](https://github.com/youzan/vant-weapp/pull/1506) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] SwipeCell: improve performance & fix prevent scroll [\#1501](https://github.com/youzan/vant-weapp/pull/1501) ([rex-zsd](https://github.com/rex-zsd))
- \[docs\] README: fix change log url [\#1491](https://github.com/youzan/vant-weapp/pull/1491) ([nyaapass](https://github.com/nyaapass))
- \[docs\]: update issue template [\#1490](https://github.com/youzan/vant-weapp/pull/1490) ([rex-zsd](https://github.com/rex-zsd))
- \[docs\]: add es5 guide [\#1489](https://github.com/youzan/vant-weapp/pull/1489) ([rex-zsd](https://github.com/rex-zsd))

## [v0.5.9](https://github.com/youzan/vant-weapp/tree/v0.5.9) (2019-04-03)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.8...v0.5.9)

**Breaking changes**

- 是否有编译后的es5版本 [\#1469](https://github.com/youzan/vant-weapp/issues/1469)
- 使用tabBar组件作为小程序自定义tabBar [\#1429](https://github.com/youzan/vant-weapp/issues/1429)

**Bug Fixes**

- Slider 单击滑动区域，不能修改滑块位置 [\#1477](https://github.com/youzan/vant-weapp/issues/1477)
- swipe-cell不能触发事件 [\#1449](https://github.com/youzan/vant-weapp/issues/1449)

**Issue**

- 设置van-tabbar为自定义tabbar时，调用wx.switchTab后active激活状态异常，无法正常对应tabbar [\#1481](https://github.com/youzan/vant-weapp/issues/1481)
- swiperCell组件的event事件无效 [\#1475](https://github.com/youzan/vant-weapp/issues/1475)
- 组件用最新的开发工具，各种报错 [\#1474](https://github.com/youzan/vant-weapp/issues/1474)
- uni-app框架支持 [\#1473](https://github.com/youzan/vant-weapp/issues/1473)
- van-popup无法关闭弹出层，只能关闭遮罩层，微信小程序 [\#1472](https://github.com/youzan/vant-weapp/issues/1472)
- van-cell组件跳转深度层级页数问题？ [\#1470](https://github.com/youzan/vant-weapp/issues/1470)
- van-popup 微信苹果IOS下不显示弹出框 [\#1468](https://github.com/youzan/vant-weapp/issues/1468)
- Tab组件若被包含在 if block当中会存在bug [\#1467](https://github.com/youzan/vant-weapp/issues/1467)
- Toast引用求助 [\#1466](https://github.com/youzan/vant-weapp/issues/1466)
- tab标签页，bind:scroll如何使用 [\#1465](https://github.com/youzan/vant-weapp/issues/1465)
- 在微信小程序预览，可以详细一些吗， [\#1463](https://github.com/youzan/vant-weapp/issues/1463)
- 文档错误·checkbox自定义图标image标签缺少闭合斜杠 [\#1462](https://github.com/youzan/vant-weapp/issues/1462)
- Popup不能弹出图片 [\#1458](https://github.com/youzan/vant-weapp/issues/1458)
- vant tab页  可以加上竖着滑动 [\#1456](https://github.com/youzan/vant-weapp/issues/1456)
- 增强DatetimePicker控件 [\#1455](https://github.com/youzan/vant-weapp/issues/1455)
- Picker选择器 默认选中项 实现方式 [\#1454](https://github.com/youzan/vant-weapp/issues/1454)
- radio加载字体图标报错 [\#1453](https://github.com/youzan/vant-weapp/issues/1453)
- Picker 选择器默认值 [\#1452](https://github.com/youzan/vant-weapp/issues/1452)
- tab标签页设置背景后  下面没有内容就没有背景颜色了   而且设置了滑动   没有内容的地方也不能滑动 [\#1451](https://github.com/youzan/vant-weapp/issues/1451)
- van-field里添加popup，输入法会弹出覆盖popup，怎么禁用输入法 [\#1450](https://github.com/youzan/vant-weapp/issues/1450)
- 构建npm后编译出错提示找不到../wxs/utils.wxs [\#1448](https://github.com/youzan/vant-weapp/issues/1448)
- 如何支持 i18n ? [\#1446](https://github.com/youzan/vant-weapp/issues/1446)
- 使用tab标签页"usingComponents": {   "van-tab": "path/to/vant-weapp/dist/tab/index",   "van-tabs": "path/to/vant-weapp/dist/tabs/index" }这个组件时，设置Tabs API中的color初始化时会无效 [\#1411](https://github.com/youzan/vant-weapp/issues/1411)
- slider可以增加竖向样式的么 [\#1410](https://github.com/youzan/vant-weapp/issues/1410)
- van-slider滑动块时报 TypeError: Cannot read property 'split' of undefined [\#1398](https://github.com/youzan/vant-weapp/issues/1398)

**Improvements**

- \[new feature\]: compile es5 dist [\#1485](https://github.com/youzan/vant-weapp/pull/1485) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Slider: fix click not work [\#1484](https://github.com/youzan/vant-weapp/pull/1484) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Icon: avoid using tag selector [\#1482](https://github.com/youzan/vant-weapp/pull/1482) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Stepper: add input-width prop [\#1480](https://github.com/youzan/vant-weapp/pull/1480) ([chenjiahan](https://github.com/chenjiahan))
- \[docs\] Checkbox: fix doc error [\#1479](https://github.com/youzan/vant-weapp/pull/1479) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\]: support safe-area-inset-top [\#1478](https://github.com/youzan/vant-weapp/pull/1478) ([rex-zsd](https://github.com/rex-zsd))
- \[build\]: fix watch not work [\#1461](https://github.com/youzan/vant-weapp/pull/1461) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] Tabbar: improve performance [\#1460](https://github.com/youzan/vant-weapp/pull/1460) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] SwipeCell: close event never emit [\#1459](https://github.com/youzan/vant-weapp/pull/1459) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Button: add hairline prop [\#1439](https://github.com/youzan/vant-weapp/pull/1439) ([chenjiahan](https://github.com/chenjiahan))

## [v0.5.8](https://github.com/youzan/vant-weapp/tree/v0.5.8) (2019-03-22)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.7...v0.5.8)

**Breaking changes**

- tabs无法设置tab的百分比高度 [\#1372](https://github.com/youzan/vant-weapp/issues/1372)
- 关于dialog，popup 事件绑定的一点建议 [\#1366](https://github.com/youzan/vant-weapp/issues/1366)

**Bug Fixes**

- van-popup组件BUG [\#1431](https://github.com/youzan/vant-weapp/issues/1431)
- van-icon的name为图片路径时，van-info的层级显示有问题 [\#1393](https://github.com/youzan/vant-weapp/issues/1393)
- mpvue中使用picker组件，配置defaultIndex无效 [\#1379](https://github.com/youzan/vant-weapp/issues/1379)
- toast.loading 异常无法点击页面 [\#1377](https://github.com/youzan/vant-weapp/issues/1377)

**Issue**

- button组件 [\#1445](https://github.com/youzan/vant-weapp/issues/1445)
- vant什么时候出支持其他小程序的UI？ [\#1444](https://github.com/youzan/vant-weapp/issues/1444)
- picker的render渲染延迟与设置选中项的冲突问题 [\#1443](https://github.com/youzan/vant-weapp/issues/1443)
- van-field 没有效果 [\#1442](https://github.com/youzan/vant-weapp/issues/1442)
- picker column 选中效果 [\#1441](https://github.com/youzan/vant-weapp/issues/1441)
- van-field 组件中的size 有哪些可选值，能不能在说明文档中列出来？ [\#1440](https://github.com/youzan/vant-weapp/issues/1440)
- 关于VantComponent内置的computed和watch的一些困惑 [\#1436](https://github.com/youzan/vant-weapp/issues/1436)
- 使用var-tabs组件，给tab自定义数据属性 [\#1432](https://github.com/youzan/vant-weapp/issues/1432)
- 使用 megalo vue tabs 吸顶失效，页面滚动事件失效 [\#1428](https://github.com/youzan/vant-weapp/issues/1428)
- van-popup组件不能完全遮盖van-field，当 type="textarea"，会透明重叠显示 [\#1427](https://github.com/youzan/vant-weapp/issues/1427)
- van-fieldt组件type="textarea"时，van-popup没有罩住，会透明重叠显示 [\#1426](https://github.com/youzan/vant-weapp/issues/1426)
- GoodsActionIcon type 属性无效 [\#1425](https://github.com/youzan/vant-weapp/issues/1425)
- Stepper 的input框为空时按退格造成maximum call stack size exceeded错误 [\#1422](https://github.com/youzan/vant-weapp/issues/1422)
- 部分机型van-filed 发送验证码按钮无法触发 [\#1421](https://github.com/youzan/vant-weapp/issues/1421)
- cell里图标上下居中显示 [\#1418](https://github.com/youzan/vant-weapp/issues/1418)
- van-button 设置 form-type 无效，表单无法提交 [\#1417](https://github.com/youzan/vant-weapp/issues/1417)
- form 表单提交无反应 [\#1416](https://github.com/youzan/vant-weapp/issues/1416)
- 受控组件不能包装为自定义组件 [\#1415](https://github.com/youzan/vant-weapp/issues/1415)
- mpvue+vant tabs标签页使用echarts切换宽度无法适应 [\#1414](https://github.com/youzan/vant-weapp/issues/1414)
- 可以增加color-picker组件吗 [\#1409](https://github.com/youzan/vant-weapp/issues/1409)
- 新增 Pagination 分页组件 [\#1406](https://github.com/youzan/vant-weapp/issues/1406)
- van-field中当设置了error=false 后，真机调试时输入框中字体仍为红色 [\#1405](https://github.com/youzan/vant-weapp/issues/1405)
- 关于van-tabbar [\#1403](https://github.com/youzan/vant-weapp/issues/1403)
- 增加Grid组件 和List组件 [\#1402](https://github.com/youzan/vant-weapp/issues/1402)
- 希望field组件的背景色可以修改 [\#1401](https://github.com/youzan/vant-weapp/issues/1401)
- 希望cell组件新增value的slot插槽 [\#1400](https://github.com/youzan/vant-weapp/issues/1400)
- \<van-button\>标签内无法正常嵌套\<text\> [\#1395](https://github.com/youzan/vant-weapp/issues/1395)
- this.setData is not a function; [\#1394](https://github.com/youzan/vant-weapp/issues/1394)
- Search 组件 this.set is not a function [\#1387](https://github.com/youzan/vant-weapp/issues/1387)
- swipe-cell在真机上左右滑动时，页面也会上下滚动 [\#1380](https://github.com/youzan/vant-weapp/issues/1380)
- bug！MPVUE使用单选框模板，将van-radio嵌套在div中循环，此时点击图标切换时，有事件产生但无打勾效果，但点击后面的字就有。 [\#1358](https://github.com/youzan/vant-weapp/issues/1358)

**Improvements**

- \[build\]: upgrade dependence & use cssnano instead of clean-css [\#1447](https://github.com/youzan/vant-weapp/pull/1447) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] ActionSheet: slot content should above cancel-text [\#1438](https://github.com/youzan/vant-weapp/pull/1438) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] optimize active color [\#1437](https://github.com/youzan/vant-weapp/pull/1437) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] GoodsAction: fix document error, fix disabled & loading not work [\#1435](https://github.com/youzan/vant-weapp/pull/1435) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Transition: behavior error when set duration zero [\#1434](https://github.com/youzan/vant-weapp/pull/1434) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Info: fix wrong style [\#1433](https://github.com/youzan/vant-weapp/pull/1433) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Stepper: update style [\#1424](https://github.com/youzan/vant-weapp/pull/1424) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Picker: defaultIndex not work [\#1423](https://github.com/youzan/vant-weapp/pull/1423) ([rex-zsd](https://github.com/rex-zsd))
- \[docs\] DatetimePicker: fix wrong example [\#1420](https://github.com/youzan/vant-weapp/pull/1420) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] SwipeCell: prevent page scroll [\#1419](https://github.com/youzan/vant-weapp/pull/1419) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Collapse: add border prop [\#1408](https://github.com/youzan/vant-weapp/pull/1408) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] CellGroup: add title prop [\#1407](https://github.com/youzan/vant-weapp/pull/1407) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Transition: overlay still show after closed [\#1404](https://github.com/youzan/vant-weapp/pull/1404) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Icon: info z-index higher than image [\#1397](https://github.com/youzan/vant-weapp/pull/1397) ([rex-zsd](https://github.com/rex-zsd))
- feat\(Search\): update style & add new prop label shape & add new slot … [\#1396](https://github.com/youzan/vant-weapp/pull/1396) ([rex-zsd](https://github.com/rex-zsd))
- Popup 添加 `transitionEnd` 事件 [\#1345](https://github.com/youzan/vant-weapp/pull/1345) ([thoamsy](https://github.com/thoamsy))

## [v0.5.7](https://github.com/youzan/vant-weapp/tree/v0.5.7) (2019-03-09)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.6...v0.5.7)

**Breaking changes**

- 建议给field 也加入 size=”large“ 毕竟cell支持，field 又是调用的cell [\#1350](https://github.com/youzan/vant-weapp/issues/1350)

**Issue**

- https://youzan.github.io/vant-weapp/\#/picker文档中 多联互动 代码错误 [\#1389](https://github.com/youzan/vant-weapp/issues/1389)
- van-tabs 如何固定在顶部？ [\#1388](https://github.com/youzan/vant-weapp/issues/1388)
- popup弹出层方法失效只有click-overlay有效果 [\#1386](https://github.com/youzan/vant-weapp/issues/1386)
- navbar图标不居中 [\#1385](https://github.com/youzan/vant-weapp/issues/1385)
- van-button 使用custom-class自定义样式无效，不能覆盖，即使使用!important 也没有效果 [\#1384](https://github.com/youzan/vant-weapp/issues/1384)
- 小程序报错:无法加载字体 [\#1383](https://github.com/youzan/vant-weapp/issues/1383)
- router-patch之后，cell的url无法跳转 [\#1382](https://github.com/youzan/vant-weapp/issues/1382)
- h5版的vant有sku，小程序的却没有，以后会出嘛？ [\#1381](https://github.com/youzan/vant-weapp/issues/1381)
- field组件输入的内容异常清空 [\#1378](https://github.com/youzan/vant-weapp/issues/1378)
- 添加搜索组件高级用法的示例 [\#1375](https://github.com/youzan/vant-weapp/issues/1375)
- example 微信开发者工具中，无法运行 [\#1373](https://github.com/youzan/vant-weapp/issues/1373)
- van-popup 在基础库 2.6.1 下报渲染层错误 [\#1371](https://github.com/youzan/vant-weapp/issues/1371)
- Tab 自定义标签 [\#1368](https://github.com/youzan/vant-weapp/issues/1368)
- Field组件 [\#1365](https://github.com/youzan/vant-weapp/issues/1365)
- 引入miniprogram-api-typings导致找不到wx的定义？ [\#1364](https://github.com/youzan/vant-weapp/issues/1364)
- 可不可以出一个不引入wxs文件的版本 [\#1361](https://github.com/youzan/vant-weapp/issues/1361)
- 好多组件都会有一个组件名-index的class 并且没有空格 [\#1360](https://github.com/youzan/vant-weapp/issues/1360)
- tabbar-item 可否提供一个插槽 [\#1357](https://github.com/youzan/vant-weapp/issues/1357)
- Failed to load font https://img.yzcdn.cn/vant/vant-icon-956c55.woff2 [\#1354](https://github.com/youzan/vant-weapp/issues/1354)
- 部分iPhone机型出现白屏 [\#1353](https://github.com/youzan/vant-weapp/issues/1353)
- Collapse 通过setData改变data数据 但是视图不更新 也不报错 完全按照官网手风琴代码书写引入 点击无任何反应 [\#1352](https://github.com/youzan/vant-weapp/issues/1352)

**Improvements**

- build: compile typescript with gulp-typescript instead of babel [\#1392](https://github.com/youzan/vant-weapp/pull/1392) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Tab: add new external class nav-class、tab-class、tab-active-class [\#1391](https://github.com/youzan/vant-weapp/pull/1391) ([rex-zsd](https://github.com/rex-zsd))
- \[docs\] Picker: advanced example incorrect [\#1390](https://github.com/youzan/vant-weapp/pull/1390) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Area: incorrect initial index when set columns-num 2 [\#1376](https://github.com/youzan/vant-weapp/pull/1376) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Tab: offset-set not work、build class wrong [\#1370](https://github.com/youzan/vant-weapp/pull/1370) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Field: add new prop size [\#1369](https://github.com/youzan/vant-weapp/pull/1369) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Steps: fix render error in wechat 7.0.3 [\#1367](https://github.com/youzan/vant-weapp/pull/1367) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] Icon: optimzie round corner of some icons [\#1363](https://github.com/youzan/vant-weapp/pull/1363) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] Tabbar: optimize performance [\#1362](https://github.com/youzan/vant-weapp/pull/1362) ([chenjiahan](https://github.com/chenjiahan))

## [v0.5.6](https://github.com/youzan/vant-weapp/tree/v0.5.6) (2019-02-28)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.5...v0.5.6)

**Issue**

- van-picker 的setColumnValues 第二次set无效 [\#1349](https://github.com/youzan/vant-weapp/issues/1349)

**Improvements**

- \[bugfix\] Area: 修复初始化概率性失败 [\#1351](https://github.com/youzan/vant-weapp/pull/1351) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Stepper: add focus event [\#1347](https://github.com/youzan/vant-weapp/pull/1347) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Button: add loading-size prop [\#1346](https://github.com/youzan/vant-weapp/pull/1346) ([chenjiahan](https://github.com/chenjiahan))

## [v0.5.5](https://github.com/youzan/vant-weapp/tree/v0.5.5) (2019-02-26)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.4...v0.5.5)

## [v0.5.4](https://github.com/youzan/vant-weapp/tree/v0.5.4) (2019-02-18)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.3...v0.5.4)

## [v0.5.3](https://github.com/youzan/vant-weapp/tree/v0.5.3) (2019-02-06)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.2...v0.5.3)

## [v0.5.2](https://github.com/youzan/vant-weapp/tree/v0.5.2) (2019-01-20)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.1...v0.5.2)

## [v0.5.1](https://github.com/youzan/vant-weapp/tree/v0.5.1) (2019-01-10)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.0...v0.5.1)



\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*