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
		alert("tick")
		this.preTick();
		this.enemies.enemiesTick();
		Tower.tickTowers();
		this.postTick();
	},
	preTick: function(){
		this.map.clear()
		this.map.drawTiles()
	},
	postTick: function(){
	//All rendering things:
	this.enemies.enemiesPostTick()
		Map.UITick();
		Tower.renderTowers();
	},
	resetGame: function () {
		this.map.buildMap()
	}
}