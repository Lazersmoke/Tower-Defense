game.enemy.Enemies = {
	enemiesArray: [],
	spawnEnemy: function (level, x, y, nodeArray, speed) {
		$Enemies.enemiesArray.push(new $Enemy(level, x, y, nodeArray, speed))
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
		for (var i = 0; i < $Enemies.enemiesArray.length; i++) {
			if ($Enemies.enemiesArray[i].health == 0) {
				//Remove Render Task on death
				$Renderer.removeTask("[game.enemy.Enemy] Enemy at: " + $Enemies.enemiesArray[i].x + ", " + $Enemies.enemiesArray[i].y)
				$Enemies.enemiesArray.splice($Enemies.enemiesArray.indexOf(i), 1)
			}
		}
	}
}

var $Enemies = game.enemy.Enemies