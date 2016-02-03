var Game = function (canvasId, tileSize, width, height) { // Master class
	this.map = new Map(canvasId, tileSize, width, height) //Creates map object
	this.resetGame()
	this.tickrate = 25
	this.enemies = new Enemies()
}

Game.prototype = {
	constructor:Game,
	resetGame: function(){ //Resets Game
		this.map.buildMap()
	},
	tick: function(){
		this.preTick();
		enemies.enemiesTick();
		Tower.tickTowers();
		this.postTick();
	},
	preTick: function(){
		this.map.clear()
		this.map.drawTiles()
	},
	postTick: function(){
	//All rendering things:
		Map.UITick();
		Tower.renderTowers();
	}
}
Game.prototype.resetGame = function () { //Resets Game
	this.map.buildMap()
} 
