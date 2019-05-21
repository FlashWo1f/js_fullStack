// npm i request -S
// html Entities &nbsp 空格
// &lt <  &gt >
// decodeEntities: false 不要解析这些html Entities
const request = require('request')
const cheerio = require('cheerio')
request('https://www.smzdm.com/youhui/', (err, res) => {
    if(!err){
        // console.log(res.body)
        const $ = cheerio.load(res.body, {
            decodeEntities: false
        })
        $('.list.list_preferential').each(function() {
            // 第二参数this 限制当前区域
            let title = $('.itemName a', this).html()
            const price = $('.listTitle .red', this).text()
            // 去除<span></span>里的内容
            title = title.replace(/<.*>.*<\/.*>/g, '')
            const img = $('.picLeft img', this).attr('src')
            const desc = $('.lrInfo', this).text().trim()
            console.log(title, price, img, desc)
        })
    }
})