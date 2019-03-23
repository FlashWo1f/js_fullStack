## 界面搭框架及经验

水平方向一般禁止滚动条，垂直方向出现滚动条
- 水平和垂直两个方向都滚动，页面摇晃，容易产生误操作。
- 垂直方向一直滚动是开发的趋势

- margin:0 auto ;max-width:960px  通用与移动设备和pC
- flex 布局
  flex-grow 放大  flex-basis flex-shrink缩小
  flex-wrap
  当网页由PC到mobile时  ，缩小阵仗

经验 ：简单的适配PC->mobile  因为要照顾所有的用户！
pc端可以大手大脚一些   max-width magin:auto
多使用padding margin 让留白；
mobile flex-shrink 让关键部分坚挺一点
嘴臭皇帝 ：lps