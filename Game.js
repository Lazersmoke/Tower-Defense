var Game = function (canvasId, tileSize, width, height) { // Master class
	this.map = new Map(canvasId, tileSize, width, height) //Creates map object
	this.tileArray = []
	this.nodeArray = [] //Tells enemies where to go
	this.resetGame()
}

Game.prototype.resetGame = function () { //Resets Game
	this.buildMap()
}  

Game.prototype.buildMap = function() {
<<<<<<< HEAD
	for (var x = 0; x < this.width; x++) {
=======
	for (var x = 0; x < this.map.width; x++) {
>>>>>>> refs/remotes/origin/master
		this.tileArray[x] = []
		for (var y = 0; y < this.map.height; y++) {
			this.tileArray[x][y] = "grass"
		}
	}
	for (var i = 0; i < 9; i++) {
		this.tileArray[12][i] = "path"
	}
	for (var i = 4; i < 12; i++) {
		this.tileArray[i][8] = "path"
	}
	for (var i = 9; i < 15; i++) {
		this.tileArray[4][i] = "path"
	}
	this.nodeArray = [[12, 0], [12, 8], [4, 8], [4, 14]] //Sets location of nodes
<<<<<<< HEAD
}  
=======
}  
>>>>>>> refs/remotes/origin/master
