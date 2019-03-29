1. mixin 与函数的区别
    minin 是一段样式的封装，可以在引用的地方 复用
    在stylus里是用的最多的
    函数  是有返回值的，前面的random(min,max)就是函数

2. stylus 有内置的函数库
    floor math(0,'random') 
    unit(,)联合,拼接

3. 200个元素 stylus 的for循环
   for num in 1..200
        .g-ball:nth-child({num})
            $width = random(0,40)
            width unit($width,"px")

4. filter contrast(20)  带来颜色的融合
    mix-blend-mode: screen;