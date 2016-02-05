game.enemy.Enemy = function(level, x, y, nodeArray, speed) { // Constructer
	this.level = level
	this.health = 1
	this.x = x
	this.y = y
	this.prevX = x
	this.prevY = y
	this.speed = speed
	this.nodeArray = nodeArray
	this.nodeNum = 0
}
var $Enemy = game.enemy.Enemy
$Enemy.prototype = {
	constructor: $Enemy,
	enemyTick: function () { //Tick
	
		this.prevX = this.x//Remeber current x and y to check for change later
		this.prevY = this.y
		console.log("Level: " + this.level + " Health:" + this.health)
		//If we are at the end of the path of nodes, sapuku
		if (this.nodeNum > this.nodeArray.length - 1) {
			this.health = 0
			return true
		}
		
		//Move on X axis
		if (this.x != $Map.tileToPixel(this.nodeArray[this.nodeNum][0]) && this.health > 0) { //If X need to change
			if (Math.abs(this.x - $Map.tileToPixel(this.nodeArray[this.nodeNum][0])) < this.speed) { //If X is closer than speed
				this.x = $Map.tileToPixel(this.nodeArray[this.nodeNum][0])
			}
			else {
				if (this.x < $Map.tileToPixel(this.nodeArray[this.nodeNum][0])) { //Move X up
					this.x += this.speed
				}
				if (this.x > $Map.tileToPixel(this.nodeArray[this.nodeNum][0])) { //Move X down
					this.x -= this.speed
				}
			}
		}
		//Move on Y axis
		if (this.y != $Map.tileToPixel(this.nodeArray[this.nodeNum][1]) && this.health > 0) { //If Y need to change
			if (Math.abs(this.y - $Map.tileToPixel(this.nodeArray[this.nodeNum][1])) < this.speed) { //If Y is closer than speed
				this.y = $Map.tileToPixel(this.nodeArray[this.nodeNum][1])
			}
			else {
				if (this.y < $Map.tileToPixel(this.nodeArray[this.nodeNum][1])) { //Move Y up
					this.y += this.speed
				}
				if (this.y > $Map.tileToPixel(this.nodeArray[this.nodeNum][1])) { //Move Y down
					this.y -= this.speed
				}
			}
		}
		
		//If we reach a node, set next node up as target
		if (this.x == $Map.tileToPixel(this.nodeArray[this.nodeNum][0]) && this.y == $Map.tileToPixel(this.nodeArray[this.nodeNum][1]) && this.nodeNum < this.nodeArray.length) { // If at node
			this.nodeNum++
		}
		//If we moved, delete old render task
		if(this.prevX != this.x || this.prevY != this.y){
			$Renderer.removeTask("[game.enemy.Enemy] Enemy at: " + this.prevX + ", " + this.prevY)
		}
		//If are not rendered now, render
		if(!$Renderer.hasTask("[game.enemy.Enemy] Enemy at: " + this.x + ", " + this.y)){//If we are not already having a render object, add one
			$Renderer.addImage("[game.enemy.Enemy] Enemy at: " + this.x + ", " + this.y, "enemy", this.x - ($Map.tileSize / 2), this.y - ($Map.tileSize / 2))
		}
	}
}

