game = new Game("map", 64, 15, 15)
game.map.drawTiles()
theMap = game.map
tickrate = 25;

function tick(){
	preTick();
	enemiesTick();
	towersTick();
	UITick();
	postTick();
}

function preTick(){
	
}

function postTick(){
	
}