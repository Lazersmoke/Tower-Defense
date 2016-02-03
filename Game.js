var game = { // Master object
	tickrate: 25,
	//Packages:
	enemy: {},
	tower: {},
	
	resetGame: function(){ //Resets Game
		this.map.buildMap()
	},
	tick: function(){
		this.preTick();
		//this.enemies.enemiesTick();
		Tower.tickTowers();
		this.postTick();
	},
	preTick: function(){
		game.map.clear()
		game.map.drawTiles()
	},
	postTick: function(){
	//All rendering things:
		game.map.UITick();
		Tower.renderTowers();
	}
}
