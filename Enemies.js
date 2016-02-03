var Enemies =  function () {
	this.array = []
}

Enemies.prototype.spawnEnemy(type, x, y, nodeArray, speed) {
	this.array.push(new Enemy(type, x, y, nodeArray, speed))
}

Enemies.prototype.killEnemy(id) {
	this.array.splice(this.array.indexOf(id), 1)
}

Enemies.prototype.enemiesTick() {
	for (i in array) {
		this.array[i].enemyTick()
	}
}
