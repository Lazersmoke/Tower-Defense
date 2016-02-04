game.map = { // Constructer
	canvas: document.getElementById("map"),
	tileSize: 64, //Sets object variables
	width: 15,
	height: 15,

	tileArray: [],
	nodeArray: [], //Tells enemies where to go
	UITick: function(){
		//NO-OP
	},
	tileToPixel: function(cord) {
		return (cord + 0.5) * game.map.tileSize
	},

	pixelToTile: function(cord) {
		return Math.round((cord / game.map.tileSize) - 0.5)
	},
	drawImage: function (imgId, x, y) { //Draws Image
		img = document.getElementById(imgId)
		game.map.context.drawImage(img, x, y, game.map.tileSize, game.map.tileSize)
	},

	drawTiles: function () { //Draws Tiles
		for (var x = 0; x < game.map.width; x++) {
			for (var y = 0; y < game.map.height; y++) {
				game.map.drawTile(game.map.tileArray[x][y], x, y)
			}
		}
	},

	drawTile: function (tileId, tileX, tileY) { //Draws image using tile coords
		game.map.drawImage(tileId, tileX * game.map.tileSize, tileY * game.map.tileSize)
	},

	clear: function () { //Clears canvas
		game.map.context.clearRect(0, 0, game.map.canvas.width, game.map.canvas.height)
	},

        getNodeArray: function() {
                return this.nodeArray
        },

	buildMap: function() {//TODO: procedural generation later(TM)
		for (var x = 0; x < game.map.width; x++) {
			game.map.tileArray[x] = []
			for (var y = 0; y < game.map.height; y++) {
				game.map.tileArray[x][y] = "grass"
			}
		}
		for (var i = 0; i < 9; i++) {
			game.map.tileArray[12][i] = "path"
		}
		for (var i = 4; i < 12; i++) {
			game.map.tileArray[i][8] = "path"
		}
		for (var i = 9; i < 15; i++) {
			game.map.tileArray[4][i] = "path"
		}
		game.map.nodeArray = [[12, 0], [12, 8], [4, 8], [4, 14]] //Sets location of nodes
	}
}
var $Map = game.map
$Map.canvas.width = game.map.width * game.map.tileSize //Width and height represented in tiles
$Map.canvas.height = game.map.height * game.map.tileSize
$Map.context = game.map.canvas.getContext("2d")