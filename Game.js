var Game = function (canvasId, tileSize, width, height) { // Master class
	this.map = new Map(canvasId, tileSize, width, height) //Creates map object
	this.resetGame()
	this.tickrate = 25
	this.enemies = new Enemies()
	this.enemies.spawnEnemy ("John Cena", this.map.nodeArray[0][0], this.map.nodeArray[0][1], this.map.nodeArray, 5)
}

Game.prototype = {
	constructor:Game,
	resetGame: function(){ //Resets Game
		this.map.buildMap()
	},
	tick: function(){
		this.preTick();
		//Enemy.enemiesTick();
		Tower.tickTowers();
		this.postTick();
	},
	preTick: function(){
	
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
