var Map = function(id, tileSize, width, height) { // Constructer
	this.canvas = document.getElementById(id)
	this.canvas.width = width * tileSize //Width and height represented in tiles

	this.canvas.height = height * tileSize
	this.context = this.canvas.getContext("2d")
	this.tileSize = tileSize //Sets object variables
	this.width = width
	this.height = height
	
}

Map.prototype.drawImage = function (imgId, x, y) { //Draws Image
	this.img = document.getElementById(imgId)
	this.context.drawImage(img, x, y, tileSize, tileSize)
}

Map.prototype.drawTiles = function () { //Draws Tiles
	for (var x = 0; x < this.width; x++) {
		for (var y = 0; y < this.height; y++) {
			this.drawTile(game.tileArray[x][y], x, y)
		}
	}
}

Map.prototype.drawTile = function (tileId, tileX, tileY) { //Draws image using tile coords
	this.drawImage(tileId, tileX * this.tileSize, tileY * this.tileSize)
}

Map.prototype.clear = function () { //Clears canvas
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
}