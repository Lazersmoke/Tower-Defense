var Enemies =  function () {
	this.enemiesArray = []
}

Enemies.prototype.spawnEnemy(type, x, y, nodeArray, speed) {
	this.enemiesArray.push(new Enemy(type, x, y, nodeArray, speed))
}

Enemies.prototype.killEnemy(id) {
	this.enemiesArray.splice(this.enemiesArray.indexOf(id), 1)
}

Enemies.prototype.enemiesTick() {
	for (i in enemiesArray) {
		this.enemiesArray[i].enemyTick()
	}
}
