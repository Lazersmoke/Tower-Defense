var Game = function (canvasId, tileSize, width, height) { // Master class
	this.map = new Map(canvasId, tileSize, width, height) //Creates map object
	this.resetGame()
	this.tickrate = 25;
}

Game.prototype = {
	constructor:Game,
	resetGame: function(){ //Resets Game
		this.map.buildMap()
	},
	tick: function(){
		preTick();
		enemiesTick();
		towersTick();
		UITick();
		postTick();
	},
	preTick: function(){
	
	},
	postTick: function(){
	
	}
}