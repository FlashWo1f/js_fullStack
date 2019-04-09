DOM树 有html结构，再加上css，DOM数将被生成，静态页面就有了。document DOMContentLoaded
有了元素结点，就可以做js交互了
页面上还依赖于其他的一些资源  js， 它会阻塞下载，img是网页性能的杀手
一切运行完毕 之后就是window.onload  此时写JS就晚了
如果不等时间的发生 ， js操作有可能无效