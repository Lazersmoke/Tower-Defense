var Enemies = function(id, tileSize, width, height) { // Constructer
	this.canvas = document.getElementById(id)
	this.canvas.width = width * tileSize //Width and height represented in tiles

	this.canvas.height = height * tileSize
	this.context = this.canvas.getContext("2d")
	this.tileSize = tileSize //Sets object variables
	this.width = width
	this.height = height
	
}

Enemies.prototype = {
	constructor: Enemies,
	enemiesTick: function (imgId, x, y) { //Draws Image
		img = document.getElementById(imgId)
		this.context.drawImage(img, x, y, this.tileSize, this.tileSize)
	}
}
