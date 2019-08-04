- 项目要经过开发  测试  上线  自动化构建及部署
  env  cross-env  
  这些环境是在不同的机器上的  运维
  docker可以帮助我们一键发布我们的项目 容器开发技术
  - OS Linux mysql mongodb
  独立 应用之间没有影响 共享动力  数据存储
  提升了机器的性能  VMWare(虚拟机)
  测试服务器上  测试各个部门发过来的程序包 环境很繁琐
  docker解决这个问题 给不同包装在不同的容器中 相互不影响 共享甲板下的动力()
  - 运维 发布  更简单 前端可以利用docker
  - 微服务架构
    不同的服务放在不同的端口

  - Dockerfile文件
    > FROM 拉取镜像来到本地 跨机器安装时很方便

    > WORKDIR /app 设置镜像中的工作目录

    > COPY package.json /app 拷贝文件

    > RUN npm install 安装node包

    > COPY . /app 

    > EXPOSE 8081

    > CMD node index.js

- 根据Dockerfile 构建镜像
  docker build -t image-name .
  docker images
  docker container run -p 1234:8081 first-docker-node
  本地1234映射8081
