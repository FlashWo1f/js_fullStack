const htmlStr = '<p><em>lorem</em><strong>ipsum</strong></p>'
// 去除标签
// 正则 replace splice
// /<[^>]*>/g 这里的^ 是取反
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '')