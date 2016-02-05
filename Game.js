
var game = { // Master object
	tickRate: 60,
	//Packages:
	enemy: {},
	tower: {},
	render: {},
	map: {},
	
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
		
	},
	postTick: function(){
		$Enemies.enemiesPostTick()
		$Map.UITick();
	}
}
var $Game = game