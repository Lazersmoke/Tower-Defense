game.enemy.Enemy = function(type, x, y, nodeArray, speed) { // Constructer
	this.type = type
	this.x = x
	this.y = y
	this.speed = speed
	this.nodeArray = nodeArray
	this.nodeNum = 0
}
var $Enemy = game.enemy.Enemy
$Enemy.prototype = {
	constructor: $Enemy,
	enemyTick: function () { //Tick
		var oldX = this.x//Remeber current x and y to check for change later
		var oldY = this.y
		
		if (this.nodeNum > this.nodeArray.length - 1) {
			this.type="dead"
			return true
		}
		if (this.x != $Map.tileToPixel(this.nodeArray[this.nodeNum][0]) && this.type != "dead") { //If X need to change
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
		if (this.y != $Map.tileToPixel(this.nodeArray[this.nodeNum][1]) && this.type != "dead") { //If Y need to change
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
		
		if (this.x == $Map.tileToPixel(this.nodeArray[this.nodeNum][0]) && this.y == $Map.tileToPixel(this.nodeArray[this.nodeNum][1]) && this.nodeNum < this.nodeArray.length) { // If at node
			this.nodeNum++
		}
		//If we moved, delete old render task
		console.log("oldX = " + oldX + ", current x = " + this.x)
		if(oldX != this.x || oldY != this.y){
			$Renderer.removeTask("[game.enemy.Enemy] Enemy at: " + oldX + ", " + oldY)
		}
		//If are not rendered now, render
		if(!$Renderer.hasTask("[game.enemy.Enemy] Enemy at: " + this.x + ", " + this.y)){//If we are not already having a render object, add one
			$Map.addImage("[game.enemy.Enemy] Enemy at: " + this.x + ", " + this.y, "enemy", this.x - ($Map.tileSize / 2), this.y - ($Map.tileSize / 2))
		}
	}
}

