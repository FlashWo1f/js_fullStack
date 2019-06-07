//index.js
//获取应用实例
const app = getApp()
const GameManager = require('./game_manager.js')
Page({
  data: {
    score: 0,
    highscore: 0,
    grids: [[null,null,null,null],[null,null,null,null],[null,null,null,null],[null,null,null,null]]
  },
  gameManager: null,
  onLoad: function () {
    // var a = []
    this.gameManager = new GameManager(4)
    this.setData({
      grids: this.gameManager.setup()
    })
  }
})
