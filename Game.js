var game = { // Master object
	tickrate: 25,
	//Packages:
	enemy: {},
	tower: {},
	
	resetGame: function(){ //Resets Game
		$Map.buildMap()
	},
	tick: function(){
		$Game.preTick();
		$Enemies.enemiesTick();
		$Tower.tickTowers();
		$Game.postTick();
	},
	preTick: function(){
		$Map.clear()
		$Map.drawTiles()
	},
	postTick: function(){
		$Enemies.enemiesPostTick()
		//All rendering things:
		$Map.UITick();
		$Tower.renderTowers();
	},
	resetGame: function () {
		$Map.buildMap()
	}
}
var $Game = game