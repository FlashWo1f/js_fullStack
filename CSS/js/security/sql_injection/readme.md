前端安全问题

表单
form -> onSubmit -> url
POST方式请求 data:{email:'zm@163.com', password:'123456'}

后端 登录过程 SQL 查找的过程
sql语法报错，服务器出错

用户的输入不可信任 要做处理
password' 导致sql的提前结果或多了一个'  500错误
编码解码

登录账号

SELECT * from users
    WHERE email = 'use@email.com'
    AND password = 'password%27'
escape() 转码