const app = getApp()
Page({
  data: {
    files: []
  },
  chooseImage() {
    let self = this
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log(res)
        self.setData({
          files: self.data.files.concat(res.tempFilePaths)
        })
        for (let i = 0; i < res.tempFilePaths.length; i++) {
          let filePath = res.tempFilePaths[i]
          let a = filePath.lastIndexOf('.')
          let b = filePath.lastIndexOf('.', a - 1)
          let c = filePath.substring(b + 1, a)
          const cloudPath = c + filePath.match(/\.[^.]+?$/)
          // 上传到云存储里
          wx.cloud.uploadFile({
            cloudPath: cloudPath,
            filePath: filePath,
            success(res) {
              console.log('上传成功', res)
            },
            fail: function (err) {
              console.log('上传失败', err)
            }
          })
        }
      }
    })
  },
  previewImage(e) {
    console.log(e)
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: this.data.files,
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
})
