// Player类，构造函数
"use strict";
function Player(name) {
    // constructor
    //全局||指向的对象
    console.log(this);
    this.name = name;
    this.enemy = null;
}
// js类的方法要定义在prototype上
Player.prototype.win = function(){
    console.log(this.name + " win");
}
Player.prototype.lose = function(){
    console.log(this.name + " lose"); 
}
var player1 = new Player("皮蛋");
//var player2 = new Player("小乖");
// console.log(player1.name);
// win函数，作为对象的方法被调用(
// this会指向对象本身
var player2 = new Player("小乖");
player1.enemy = player2.name;
player2.enemy = player1.name;
player1.win();
player2.lose();