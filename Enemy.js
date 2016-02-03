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
		if (this.nodeNum > this.nodeArray.length - 1) {
			this.type="dead"
			return true
		}
		if (this.x != tileToPixel(this.nodeArray[this.nodeNum][0]) && this.type != "dead") { //If X need to change
			if (Math.abs(this.x - tileToPixel(this.nodeArray[this.nodeNum][0])) < this.speed) { //If X is closer than speed
				this.x = tileToPixel(this.nodeArray[this.nodeNum][0])
			}
			else {
				if (this.x < tileToPixel(this.nodeArray[this.nodeNum][0])) { //Move X up
					this.x += this.speed
				}
				if (this.x > tileToPixel(this.nodeArray[this.nodeNum][0])) { //Move X down
					this.x -= this.speed
				}
			}
		}
		if (this.y != tileToPixel(this.nodeArray[this.nodeNum][1]) && this.type != "dead") { //If Y need to change
			if (Math.abs(this.y - tileToPixel(this.nodeArray[this.nodeNum][1])) < this.speed) { //If Y is closer than speed
				this.y = tileToPixel(this.nodeArray[this.nodeNum][1])
			}
			else {
				if (this.y < tileToPixel(this.nodeArray[this.nodeNum][1])) { //Move Y up
					this.y += this.speed
				}
				if (this.y > tileToPixel(this.nodeArray[this.nodeNum][1])) { //Move Y down
					this.y -= this.speed
				}
			}
		}
		game.map.drawImage("grass", this.x - (game.map.tileSize / 2), this.y - (game.map.tileSize / 2))
		if (this.x == tileToPixel(this.nodeArray[this.nodeNum][0]) && this.y == tileToPixel(this.nodeArray[this.nodeNum][1]) && this.nodeNum < this.nodeArray.length) { // If at node
			this.nodeNum++
		}
	}
}

