// 自己的代码自己测
// 工作流里的标准的自测方法，可以将代码的准确性 99%
// 写测试代码 让代码通过测试
const { add } = require('../index')
// 期待代码能够如约运行
const expect = require('chai').expect

// 测试代码，descripe it expect
describe('两数相加结果为和', () => {
    it('两个字符串相加，应该转变类型后返回其值', () => {
        expect(add('11', '22')).to.equal(33)
    })
    it('当参数类型错误时，请返回NaN', () => {
        expect(add(0, null)).to.equal(NaN)
    })
})