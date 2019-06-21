- config
yarn add mysql2 sequelize sequelize-cli
./node_modules/.bin/sequelize init
./node_modules/.bin/sequelize db:create
./node_modules/.bin/sequelize migration:create --name create-shops-table
                              迁徙文件
./node_modules/.bin/sequelize db:migrate  执行migration
 ./node_modules/.bin/sequelize seed:create --name init-shops

- sequelize 数据库脚手架
    mysql2 数据库驱动
    sequelize orm 工具 把table -> object
    对底层的sql API 化  model 
    sequelize-cli 命令行工具

- 