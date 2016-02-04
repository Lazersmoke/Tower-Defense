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
		return (cord + 0.5) * $Map.tileSize
	},

	pixelToTile: function(cord) {
		return Math.round((cord / $Map.tileSize) - 0.5)
	},
	drawImage: function (imgId, x, y) { //Draws Image
		$Renderer.queForRender(function(ctx){ctx.drawImage(document.getElementById(imgId), x, y, $Map.tileSize, $Map.tileSize)})
	},

	drawTiles: function () { //Draws Tiles
		for (var x = 0; x < $Map.width; x++) {
			for (var y = 0; y < $Map.height; y++) {
				$Map.drawTile($Map.tileArray[x][y], x, y)
			}
		}
	},

	drawTile: function (tileId, tileX, tileY) { //Draws image using tile coords
		$Map.drawImage(tileId, tileX * $Map.tileSize, tileY * $Map.tileSize)
	},

	clear: function () { //Clears canvas
		$Map.context.clearRect(0, 0, $Map.canvas.width, $Map.canvas.height)
	},

        getNodeArray: function() {
                return this.nodeArray
        },

	buildMap: function() {//TODO: procedural generation later(TM)
		for (var x = 0; x < $Map.width; x++) {
			$Map.tileArray[x] = []
			for (var y = 0; y < $Map.height; y++) {
				$Map.tileArray[x][y] = "grass"
			}
		}
		for (var i = 0; i < 9; i++) {
			$Map.tileArray[12][i] = "path"
		}
		for (var i = 4; i < 12; i++) {
			$Map.tileArray[i][8] = "path"
		}
		for (var i = 9; i < 15; i++) {
			$Map.tileArray[4][i] = "path"
		}
		$Map.nodeArray = [[12, 0], [12, 8], [4, 8], [4, 14]] //Sets location of nodes
	}
}
var $Map = game.map
$Map.canvas.width = $Map.width * $Map.tileSize //Width and height represented in tiles
$Map.canvas.height = $Map.height * $Map.tileSize
$Map.context = $Map.canvas.getContext("2d")