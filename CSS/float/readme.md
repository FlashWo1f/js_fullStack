# 清除浮动的5种方法
1. 在父元素底部加一行代码：
<div style="clear: both"></div>

2. 利用BGC简称为“块级格式化上下文”来给父元素增加CSS
 div.content(父元素名){
     overflow: auto/hidden/scroll;
 }

3. 使用CSS中的after伪元素，给父元素div添加一个clearfix的类名
.clearfix::after{
    content:"";
    clear:both;
    display:block;
}

4. !不建议用的方法   给父元素增加一行CSS
.content{
    float:left;
}

5. 尼古拉斯-大师法  一个更优雅的改进   
把display设置为table，可以创建一个表格单元，这个匿名的表格单元可以直接触发BFC，
给父元素div添加一个clearfix的类名
.clearfix::after{
    content: "";
    display: table; 
    clear: both;
}
  

