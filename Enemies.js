var Enemies =  function () {
	this.array = []
}
Enemies.prototype = {
	constructor: Enemies,
	spawnEnemy: function (type, x, y, nodeArray, speed) {
		this.array.push(new Enemy(type, x, y, nodeArray, speed))
	}
	killEnemy: function (id) {
		this.array.splice(this.array.indexOf(id), 1)
	}
	enemiesTick: function () {
		for (i in array) {
			this.array[i].enemyTick()
		}
	}
}
