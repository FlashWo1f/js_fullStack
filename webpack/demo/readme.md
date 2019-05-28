1. 大厂的代码风格都是一样的 ESlint
npm run eslint
yarn add babel-core babel-cli babel-preset-env -D
yarn add eslint eslint-loader -D
- eslint 是js 风格 开始是痛苦的，习惯就爱上了
__dirname 返回绝对的物理路径
babel-loader兼容性问题 需要装此版本
"babel-loader": "^7.1.4"
项目未来发布到哪里都可以
- .eslintrc 是什么  采用一个业内的规范， 严格执行公司的规范

- webpack-dev-server 编译放在内存中  不会生成dist/main.js
都是为了性能
最后这里的build 脚本运行后生成dist/