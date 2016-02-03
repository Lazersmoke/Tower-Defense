var Enemy = function(type, x, y, nodeArray, speed) { // Constructer
	this.type = type
	this.x = x
	this.y = y
	this.speed = speed
	this.nodeArray = nodeArray
	this.nodeNum = 0
}

Enemy.prototype = {
	constructor: Enemy,
	enemyTick: function () { //Tick
		if (this.x != this.nodeArray[this.nodeNum][0] * game.tileSize) { //If X need to change
			if (Math.abs(this.x - this.nodeArray[this.nodeNum][0] * game.tileSize) < this.speed) { //If X is closer than speed
				this.x = this.nodeArray[this.nodeNum][0] * game.tileSize
			}
			else {
				if (this.x < this.nodeArray[this.nodeNum][0] * game.tileSize) { //Move X up
					this.x += speed
				}
				if (this.x > this.nodeArray[this.nodeNum][0] * game.tileSize) { //Move X down
					this.x -= speed
				}
			}
		}
		if (this.y != this.nodeArray[this.nodeNum][1] * game.tileSize) { //If Y need to change
			if (Math.abs(this.y - this.nodeArray[this.nodeNum][1] * game.tileSize) < this.speed) { //If Y is closer than speed
				this.y = this.nodeArray[this.nodeNum][1] * game.tileSize
			}
			else {
				if (this.y < this.nodeArray[this.nodeNum][1] * game.tileSize) { //Move Y up
					this.y += speed
				}
				if (this.y > this.nodeArray[this.nodeNum][1] * game.tileSize) { //Move Y down
					this.y -= speed
				}
			}
		}
		if (this.x == this.nodeArray[this.nodeNum][0] * game.tileSize && this.y == this.nodeArray[this.nodeNum][1] * game.tileSize) { // If at node
			this.nodeNum++
		}
	}
}

