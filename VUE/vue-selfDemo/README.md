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

### 事件修饰符
事件修饰符可以串联
.stop 阻止冒泡机制 @click.stop
.prevent 阻止默认事件
.capture  实现捕获触发事件机制
.self 实现只要点击当前元素才会触发事件
.once 只触发一次事件处理函数
.stop 和 .self 区别  .stop阻止之外所有的冒泡 .self 某一个元素

### v-model 实现双向数据绑定
v-bind只能实现数据的单向绑定 从M自动绑定到V 
使用v-model指令 可以实现表单和MODEL中数据的双向绑定
v-model只能运用表单元素中
input(radio, text, address, email) select checkbox  textarea 可以用