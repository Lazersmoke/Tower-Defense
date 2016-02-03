var Enemies =  function () {
	this.enemiesArray = []
}

Enemies.prototype = {
	constructor: Enemies,
	spawnEnemy: function (type, x, y, nodeArray, speed) {
		this.enemiesArray.push(new Enemy(type, x, y, nodeArray, speed))
	},
	killEnemy: function (id) {
		this.enemiesArray.splice(this.enemiesArray.indexOf(id), 1)
	},
	enemiesTick: function () {
		for (i in this.enemiesArray) {
			this.enemiesArray[i].enemyTick()
		}
	}
}
