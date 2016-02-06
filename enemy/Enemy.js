game.enemy.Enemy = function(level, tilePos, nodeArray) { // Constructer
	this.level = level
	this.health = 1 + Math.floor(level / 5)
	this.speed = 0.02 + (level / 200)
	this.tilePos = tilePos
	this.nodeArray = nodeArray
	this.nodeNum = 0
}
var $Enemy = game.enemy.Enemy
$Enemy.prototype = {
	constructor: $Enemy,
	enemyTick: function() { //Tick
		//If we are at the end of the path of nodes, sapuku
		if (this.nodeNum > this.nodeArray.length - 1) {
			this.health = 0
			return true
		}

		if(!this.tilePos.matches(this.nextNode())){
			if($TilePos.distance(this.tilePos, this.nextNode()) <= this.speed){
				this.moveAbsolute(this.nextNode())
			}
			else {
				var theta = $TilePos.angle(this.tilePos, this.nextNode())
				this.moveRelative(new $TilePos(this.speed * Math.cos(theta), this.speed * Math.sin(theta)).roundOff())
			}
		}

		//If we reach a node, set next node up as target
		if ($TilePos.matches(this.tilePos, this.nextNode()) && this.nodeNum < this.nodeArray.length) { // If at node
			this.nodeNum++
		}
		//If are not rendered now, render
		if (!$Renderer.hasTask("[game.enemy.Enemy] Enemy at: " + this.tilePos)) { //If we are not already having a render object, add one
			$Renderer.addImage("[game.enemy.Enemy] Enemy at: " + this.tilePos, "enemy", $Map.tileToPixel(this.tilePos.x) - ($Map.tileSize / 2), $Map.tileToPixel(this.tilePos.y) - ($Map.tileSize / 2))
		}
	},
	moveRelative: function(deltaTilePos) {
		this.moveAbsolute($TilePos.add(this.tilePos, deltaTilePos))
	},
	moveAbsolute: function(newTilePos) {
		$Renderer.removeTask("[game.enemy.Enemy] Enemy at: " + this.tilePos)
		this.tilePos = newTilePos
	},
	nextNode: function() {
		return this.nodeArray[this.nodeNum]
	}
}