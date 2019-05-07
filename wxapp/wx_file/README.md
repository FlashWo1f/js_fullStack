云开发是腾讯云在大力推广
快速上手

- 云开发提供可视化的mongodb云数据库
    连接数据库
    const db = wx.cloud.database()
    选择表
    const userInfo = db.collection('userInfo)
    支持直接存JSON
    后端即服务 CRUD
    add 

    要做列表  先建collection add 再get

    where({
        
    })
    count() 查出来满足条件有几条记录
    用户信息表  有则不存  没有则存

