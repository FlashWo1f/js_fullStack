var http = require('http')

var server = http.createServer(function(req, res) {
  // 响应头  很快就返回了
  res.writeHead(301, {'Location': 'http://itbilu.com/'})
  console.log(res._header)
  res.end()
})

server.listen(3000)