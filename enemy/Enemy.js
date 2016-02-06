game.enemy.Enemy = function(level, tilePos, nodeArray, speed) { // Constructer
	this.level = level
	this.health = 1
	this.tilePos = tilePos
	this.speed = speed
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



//Old Enemy Code
		/*//Move on X axis
		if (this.tilePos.x != this.nextNode().x && this.health > 0) { //If X need to change
			if (Math.abs(this.tilePos.x - this.nextNode().x) < this.speed) { //If X is closer than speed
				this.moveAbsolute(new $TilePos(this.nextNode().x, this.tilePos.y))
			} else { //Move full speed
				this.moveRelative(new $TilePos(this.tilePos.x < this.nextNode().x ? this.speed : -this.speed, 0))
			}
		}
		//Move on Y axis
		if (this.tilePos.y != this.nextNode().y && this.health > 0) { //If Y need to change
			if (Math.abs(this.tilePos.y - this.nextNode().y) < this.speed) { //If Y is closer than speed
				this.moveAbsolute(new $TilePos(this.tilePos.x, this.nextNode().y))
			} else { //Move full speed
				this.moveRelative(new $TilePos(0, this.tilePos.y < this.nextNode().y ? this.speed : -this.speed))
			}
		}*/