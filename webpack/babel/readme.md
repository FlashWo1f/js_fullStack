生产线 Webpack 代码生产工艺 工作流 Work Flow

- html + css + js = development
    html template {{}}
    css  stylus
    js   es6, 7, 8, 9 => es5(全部普及)
最后代码运行的env
yarn add = npm install
yarn add babel-core babel-cli babel-preset-env
npm run 运行脚本命令 package.json 里的script
babelrc 告诉babel 怎样去编译js
以.开头的文件会被隐藏 不会提交到GitHub
- js
    babel
    使用最新的技术来开发， babel 编译成es5, 继而被所有运行环境接受

- babel-core 核心的转译库
    npm run build 'babel ....'
    babel-cli
    babel-preset-env  配合babelrc 预编译规则
    {
        "presets": ["env"]
    }

build
dev

- preset 预处理
  如果env搞不定 就要在plugin中添加插件

- dist 里的代码就是未来项目最后发布的代码

- webpack 是一切工作流的主宰
  webpack --mode development
  /src 开发目录
    ||
    ||  整个webpack的过程 
    ||
  /dist 发布的代码

- 开发时写代码  development  着重代码的可读性   dev     在本地 localhost
- 上线时的代码  production  强调的代码压缩，这时候的代码是给浏览器编译的 build  服务器  域名访问
- 测试代码      test    局域网访问
  