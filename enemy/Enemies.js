game.enemy.Enemies = {
	enemiesArray: [],
	spawnEnemy: function (level, x, y, nodeArray, speed) {
		$Enemies.enemiesArray.push(new $Enemy(level, x, y, nodeArray, speed))
	},
	killEnemy: function (id) {
		$Enemies.enemiesArray[id].health = 0
		$Renderer.removeTask("[game.enemy.Enemy] Enemy at: " + $Enemies.enemiesArray[id].x + ", " + $Enemies.enemiesArray[id].y)
	},
	enemiesTick: function () {
		for (i in $Enemies.enemiesArray) {
			$Enemies.enemiesArray[i].enemyTick()
		}
	},
	enemiesPostTick: function () {
		//Loop through all enemies (for removing render objects)
		for (var i = 0; i < $Enemies.enemiesArray.length; i++) {
			//Remove enemys with 0 health (AKA dead)
			if ($Enemies.enemiesArray[i].health == 0) {
				//Remove Render Task on death
				console.log($Enemies.enemiesArray)
				console.log($Renderer.hasTask("[game.enemy.Enemy] Enemy at: " + $Enemies.enemiesArray[i].x + ", " + $Enemies.enemiesArray[i].y))
				console.log($Renderer.renderQue)
				$Renderer.removeTask("[game.enemy.Enemy] Enemy at: " + $Enemies.enemiesArray[i].x + ", " + $Enemies.enemiesArray[i].y)
			}
		}
		//Loop through all enemies (for removing enemies from array)
		for (var i = 0; i < $Enemies.enemiesArray.length; i++) {
			//Remove enemys with 0 health (AKA dead)
			if ($Enemies.enemiesArray[i].health == 0) {
				//Remove Render Task on death
				console.log(i)
				$Enemies.enemiesArray.splice($Enemies.enemiesArray.indexOf(i), 1)
			}
		}
	}
}

var $Enemies = game.enemy.Enemies