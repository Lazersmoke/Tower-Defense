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
		if (this.x != nodeArray[nodeNum][0] * game.tileSize) { //If X need to change
			if (Math.abs(x - nodeArray[nodeNum][0] * game.tileSize) < speed) { //If X is closer than speed
				this.x = nodeArray[nodeNum][0] * game.tileSize
			}
			else {
				if (this.x < nodeArray[nodeNum][0] * game.tileSize) { //Move X up
					this.x += speed
				}
				if (this.x > nodeArray[nodeNum][0] * game.tileSize) { //Move X down
					this.x -= speed
				}
			}
		}
		if (this.y != nodeArray[nodeNum][1] * game.tileSize) { //If Y need to change
			if (Math.abs(y - nodeArray[nodeNum][1] * game.tileSize) < speed) { //If Y is closer than speed
				this.y = nodeArray[nodeNum][1] * game.tileSize
			}
			else {
				if (this.y < nodeArray[nodeNum][1] * game.tileSize) { //Move Y up
					this.y += speed
				}
				if (this.y > nodeArray[nodeNum][1] * game.tileSize) { //Move Y down
					this.y -= speed
				}
			}
		}
		if (this.x == nodeArray[nodeNum][0] * game.tileSize && this.y == nodeArray[nodeNum][1] * game.tileSize) { // If at node
			nodeNum++
		}
	}
}

