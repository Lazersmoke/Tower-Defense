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
		if (x != nodeArray[nodeNum][0] * game.tileSize) { //If X need to change
			if (Math.abs(x - nodeArray[nodeNum][0] * game.tileSize) < speed) { //If X is closer than speed
				x = nodeArray[nodeNum][0] * game.tileSize
			}
			else {
				if (x < nodeArray[nodeNum][0] * game.tileSize) { //Move X up
					x += speed
				}
				if (x > nodeArray[nodeNum][0] * game.tileSize) { //Move X down
					x -= speed
				}
			}
		}
		if (y != nodeArray[nodeNum][1] * game.tileSize) { //If Y need to change
			if (Math.abs(y - nodeArray[nodeNum][1] * game.tileSize) < speed) { //If Y is closer than speed
				y = nodeArray[nodeNum][1] * game.tileSize
			}
			else {
				if (y < nodeArray[nodeNum][1] * game.tileSize) { //Move Y up
					y += speed
				}
				if (y > nodeArray[nodeNum][1] * game.tileSize) { //Move Y down
					y -= speed
				}
			}
		}
		if (x == nodeArray[nodeNum][0] * game.tileSize && y == nodeArray[nodeNum][1] * game.tileSize) { // If at node
			nodeNum++
		}
	}
}

