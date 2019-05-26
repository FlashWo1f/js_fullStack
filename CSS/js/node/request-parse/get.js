const http = require('http')
const url = require('url')
const queryString = require('querystring')
http.createServer((req, res) => {
    // req 请求
    if (req.url === '/favicon.ico') return
    // query 查询
    const urlObj = url.parse(req.url)
    const queryObj = queryString.parse(urlObj.query)
    console.log(queryObj)
    // [Object: null prototype] { query: '蜗牛老湿', type: 'all' }
    // console.log(req.url)
    // console.log(urlObj)
    res.writeHead(200, {
        // 'Content-Type': 'text/plain;charset=utf-8'
        'Content-Type': 'text/html;charset=utf-8'
    })
    //只返回内容
    res.end(
   `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      ${JSON.stringify(queryObj)}
    </body>
    </html>
    `)
}).listen(3000, () => {
    console.log('服务正在 3000 端口')
})// 监听3000端口