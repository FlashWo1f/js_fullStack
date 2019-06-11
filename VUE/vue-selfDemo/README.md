# VUE

在vm实例中， 如果想要获取data上的数据 或者想要调用methods中的方法, 必须使用this.数据属性名或者this.方法名来进行访问 这里的this 表示我们new出来的VM实例对象 VM会监听到自身data所有数据的改变，只要数据发生变化 就会自动把最新的数据 从data上同步到页面上去  不再操作DOM了
### v-cloak v-text v-html
<p v-cloak>{{msg}}</p>
<p v-text="msg"></p>
v-html 能解析成html

### v-bind是VUE提供用于绑定属性的指令
简写方式 (:)
它的里面可以写合法的JS表达式

### v-on：事件绑定机制
v-on:click="func"
可简写为 (@)