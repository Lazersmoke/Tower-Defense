game.map.Map = { // Constructer
	tileSize: 64, //Sets object variables
	width: 15,
	height: 15,

	tileArray: [],
	nodeArray: [], //Tells enemies where to go
	UITick: function() {
		//NO-OP
	},
	tileToPixel: function(cord) {
		return (cord + 0.5) * $Map.tileSize
	},

	pixelToTile: function(cord) {
		return Math.round((cord / $Map.tileSize) - 0.5)
	},
	addTiles: function() { //Adds Tiles to Render Que
		for (var x = 0; x < $Map.width; x++) {
			for (var y = 0; y < $Map.height; y++) {
				$Map.addTile($Map.tileArray[x][y], new $TilePos(x, y))
			}
		}
	},

	addTile: function(tileId, tilePos) { //Adds a tile to the render que
		$Renderer.addImage("[game.map] Tile at: " + tilePos, tileId, tilePos.x * $Map.tileSize, tilePos.y * $Map.tileSize)
	},

	clear: function() { //Clears canvas
		$Map.context.clearRect(0, 0, $Map.canvas.width, $Map.canvas.height)
	},

	getNodeArray: function() {
		return this.nodeArray
	},

	buildMap: function() { //TODO: procedural generation later(TM)
		for (var x = 0; x < $Map.width; x++) {
			$Map.tileArray[x] = []
			for (var y = 0; y < $Map.height; y++) {
				$Map.tileArray[x][y] = "grass"
			}
		}
		for (var i = 0; i < 9; i++) {
			$Map.tileArray[12][i] = "path"
		}
		for (i = 4; i < 12; i++) {
			$Map.tileArray[i][8] = "path"
		}
		for (i = 9; i < 15; i++) {
			$Map.tileArray[4][i] = "path"
		}
		$Map.nodeArray = [new $TilePos(12, 0), new $TilePos(12, 8), new $TilePos(4, 8), new $TilePos(4, 14)] //Sets location of nodes
	}
}
var $Map = game.map.Map

//Setup