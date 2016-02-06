
var game = { // Master object
	tickRate: 60,
	//Packages:
	enemy: {},
	tower: {},
	render: {},
	map: {},
	input: {},
	
	resetGame: function(){ //Resets Game
		location.reload();
	},
	startGame: function(){
		$Map.buildMap()
		$Map.addTiles()
	},
	//Called at the start of each tick
	preTick: function(){
		$Renderer.onTick()
	},
	tick: function(){
		$Game.preTick();
		
		$Enemies.enemiesTick();
		$Tower.tickTowers();
		
		$Game.postTick();
	},
	//Called at the end of each tick
	postTick: function(){
		$Enemies.enemiesPostTick()
		$Map.UITick();
	}
}
var $Game = game