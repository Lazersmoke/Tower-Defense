var Enemies =  function () {
	this.enemiesArray = []
}

Enemies.prototype = {
	constructor: Enemies,
	spawnEnemy: function (type, x, y, nodeArray, speed) {
		this.enemiesArray.push(new Enemy(type, x, y, nodeArray, speed))
	},
	killEnemy: function (id) {
		this.enemiesArray[i].type = "dead"
	},
	enemiesTick: function () {
		for (i in this.enemiesArray) {
			this.enemiesArray[i].enemyTick()
		}
	},
	enemiesPostTick: function () {
		for (var i = this.enemiesArray.length - 1; i > -1; i--) {
			if (this.enemiesArray[i].type == "dead") {
				this.enemiesArray.splice(this.enemiesArray.indexOf(i), 1)
			}
		}
	}
}
