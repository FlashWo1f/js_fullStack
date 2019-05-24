// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request')
const cheerio = require('cheerio')

cloud.init()
function spiderYouhui(){
  return new Promise((resolve, reject) => {
    request('https://www.smzdm.com/youhui/', (err, res) => {
      if(!err){
          // console.log(res.body)
          const $ = cheerio.load(res.body, {
              decodeEntities: false
          })
          let list = []
          $('.list.list_preferential').each(function() {
              // 第二参数this 限制当前区域
              let title = $('.itemName a', this).html()
              const price = $('.listTitle .red', this).text()
              // 去除<span></span>里的内容
              title = title.replace(/<.*>.*<\/.*>/g, '')
              const img = $('.picLeft img', this).attr('src')
              const desc = $('.lrInfo', this).text().trim()
              // console.log(title, price, img, desc)
              list.push({title, price, img, desc})
          })
          resolve(list)
      }
      if(err){
        reject(err)
      }
  })
  })
}
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  // 
  // await 后面接promise  返回promise resolve时候的值
  // 执行爬虫
  // await 解决异步
  try {
    const youhuiLists = await spiderYouhui()
    return {
      code: 200,
      youhuiLists
    }
  } catch (error) {
    return {
      code: 500
    }
  }
  
}