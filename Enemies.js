game.enemy.Enemies = {
	enemiesArray: [],
	spawnEnemy: function (type, x, y, nodeArray, speed) {
		$Enemies.enemiesArray.push(new $Enemy(type, x, y, nodeArray, speed))
	},
	killEnemy: function (id) {
		$Enemies.enemiesArray.splice($Enemies.enemiesArray.indexOf(id), 1)
	},
	enemiesTick: function () {
		for (i in $Enemies.enemiesArray) {
			$Enemies.enemiesArray[i].enemyTick()
		}
	}
}

var $Enemies = game.enemy.Enemies