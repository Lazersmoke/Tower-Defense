game.enemy.Enemies = {
	enemiesArray: [],
	spawnEnemy: function (type, x, y, nodeArray, speed) {
		$Enemies.enemiesArray.push(new $Enemy(type, x, y, nodeArray, speed))
	},
	killEnemy: function (id) {
		$Enemies.enemiesArray[i].type = "dead"
	},
	enemiesTick: function () {
		for (i in $Enemies.enemiesArray) {
			$Enemies.enemiesArray[i].enemyTick()
		}
	},
	enemiesPostTick: function () {
		for (var i = $Enemies.enemiesArray.length - 1; i > -1; i--) {
			if ($Enemies.enemiesArray[i].type == "dead") {
				$Enemies.enemiesArray.splice($Enemies.enemiesArray.indexOf(i), 1)
			}
		}
	}
}

var $Enemies = game.enemy.Enemies