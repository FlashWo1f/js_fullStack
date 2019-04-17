const fs = require('fs')
const files = []
// 一步步走下去
const walk = function(path){
    fs
        .readdirSync(path)
        .forEach(file => {
            const newPath = path + '/' + file
            const stat = fs.statSync(newPath)
            console.log(stat)
            if(stat.isFile()){
                if(/\.js$/.test(file)){
                    files.push(file)
                }
            }else if(stat.isDirectory()){
                walk(newPath)
            }
            // 文件？
            //   js文件？ 正则表达式
            // 目录？
            //     递归
            // console.log(item)
        })
        fs.readdir(path, function(err, items){
            console.log(items)
        })
    console.log('```````')
}

walk('./src')
console.log(files)