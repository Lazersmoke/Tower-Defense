game.enemy.Enemies = {
	enemiesArray: [],
	spawnEnemy: function (level, tilePos, nodeArray, speed) {
		$Enemies.enemiesArray.push(new $Enemy(level, tilePos, nodeArray, speed))
	},
	killEnemy: function (id) {
		$Enemies.enemiesArray[id].health = 0
	},
	enemiesTick: function () {
		for (i in $Enemies.enemiesArray) {
			$Enemies.enemiesArray[i].enemyTick()
		}
	},
	enemiesPostTick: function () {
		//Loop through all enemies (for removing render objects)
		for (var j = 0; j < $Enemies.enemiesArray.length; j++) {
			//Remove enemys with 0 health (AKA dead)
			if ($Enemies.enemiesArray[j].health == 0) {
				if($Renderer.hasTask("[game.enemy.Enemy] Enemy at: " + $Enemies.enemiesArray[j].tilePos)){
					$Renderer.removeTask("[game.enemy.Enemy] Enemy at: " + $Enemies.enemiesArray[j].tilePos)
				}
			}
		}
		//Loop through all enemies (for removing enemies from array)
		for (var i = 0; i < $Enemies.enemiesArray.length; i++) {
			//Remove enemys with 0 health (AKA dead)
			if ($Enemies.enemiesArray[i].health == 0) {
				//Remove Render Task on death
				$Enemies.enemiesArray.splice(i, 1)
			}
		}
	}
}

var $Enemies = game.enemy.Enemies