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
		alert("Enemy Tick")
		if (this.x != tileToPixel(this.nodeArray[this.nodeNum][0])) { //If X need to change
			if (Math.abs(this.x - tileToPixel(this.nodeArray[this.nodeNum][0]) < this.speed)) { //If X is closer than speed
				this.x = this.nodeArray[this.nodeNum][0] * game.tileSize
			}
			else {
				if (this.x < this.nodeArray[tileToPixel(this.nodeArray[this.nodeNum][0])]) { //Move X up
					this.x += speed
				}
				if (this.x > this.nodeArray[tileToPixel(this.nodeArray[this.nodeNum][0])]) { //Move X down
					this.x -= speed
				}
			}
		}
		if (this.x != tileToPixel(this.nodeArray[this.nodeNum][1])) { //If Y need to change
			if (Math.abs(tileToPixel(this.y - this.nodeArray[this.nodeNum][1])) < this.speed)) { //If Y is closer than speed
				this.y = this.nodeArray[this.nodeNum][1] * game.tileSize
			}
			else {
				if (this.x < this.nodeArray[tileToPixel(this.nodeArray[this.nodeNum][1])]) { //Move Y up
					this.y += speed
				}
				if (this.x > this.nodeArray[tileToPixel(this.nodeArray[this.nodeNum][1])]) { //Move Y down
					this.y -= speed
				}
			}
		}
		if (this.x == tileToPixel(this.nodeArray[this.nodeNum][0]) && this.y == tileToPixel(this.nodeArray[this.nodeNum][1])) { // If at node
			this.nodeNum++
		}
	}
}

