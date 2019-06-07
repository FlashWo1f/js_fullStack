const Grid = require('./grid')
// es6 startTiles = 2 添加默认值2
function GameManager(size, startTiles = 2){
    this.size = size
    this.startTiles = startTiles
}
GameManager.prototype = {
    setup: function(){
        this.grid = new Grid(this.size)
        // 随机添加方块
        this.addStartTiles()
        return this.grid.cells
    },
    addStartTiles: function(){  
        for(let i = 0; i < this.startTiles; i++){
            this.addRandomTiles()
        }
    },
    addRandomTiles: function(){
        // 添加方块
        // 位置随机  数值随机

        const value = Math.random() < 0.9 ? 2 : 4
        // gird 有数据  它知道那些位置空的 在空的地方随机生成方块
        const position = this.grid.randomAvailable()
    },
    randomAvailable: function(){
        return
    }
}
module.exports = GameManager