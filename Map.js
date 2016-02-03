var Map = function(id, tileSize, width, height) { // Constructer
	this.canvas = document.getElementById(id)
	this.canvas.width = width * tileSize //Width and height represented in tiles

	this.canvas.height = height * tileSize
	this.context = this.canvas.getContext("2d")
	this.tileSize = tileSize //Sets object variables
	this.width = width
	this.height = height

	this.tileArray = []
	this.nodeArray = [] //Tells enemies where to go
}
Map.UITick = function(){
	//NO-OP
}
Map.prototype = {
	constructor: Map,
	drawImage: function (imgId, x, y) { //Draws Image
		img = document.getElementById(imgId)
		this.context.drawImage(img, x, y, this.tileSize, this.tileSize)
	},

	drawTiles: function () { //Draws Tiles
		for (var x = 0; x < this.width; x++) {
			for (var y = 0; y < this.height; y++) {
				this.drawTile(this.tileArray[x][y], x, y)
			}
		}
	},

	drawTile: function (tileId, tileX, tileY) { //Draws image using tile coords
		this.drawImage(tileId, tileX * this.tileSize, tileY * this.tileSize)
	},

	clear: function () { //Clears canvas
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
	},

        getNodeArray: function() {
                return this.nodeArray
        },

	buildMap: function() {//TODO: procedural generation later(TM)
		for (var x = 0; x < this.width; x++) {
			this.tileArray[x] = []
			for (var y = 0; y < this.height; y++) {
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
	}
}
