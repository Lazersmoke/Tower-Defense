var game = { // Master object
	tickRate: 60, 
	money: 150,
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
	},
	addMoney: function (amount) {
		$Game.money += amount
	},
	removeMoney: function (amount) {
		if (amount > $Game.money) {
			return false
		}
		else {
			$Game.money -= amount
			return true
		}
	},
	getMoney: function () {
		return $Game.money
	},
}
var $Game = game