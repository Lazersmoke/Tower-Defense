game.enemy.Enemies = {
	enemiesArray: [],
	spawnEnemy: function (level, x, y, nodeArray, speed) {
		$Enemies.enemiesArray.push(new $Enemy(level, x, y, nodeArray, speed))
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
			console.log("a"+j)
			if ($Enemies.enemiesArray[j].health == 0) {
				//Remove Render Task on death
				console.log($Enemies.enemiesArray)
				$Renderer.removeTask("[game.enemy.Enemy] Enemy at: " + $Enemies.enemiesArray[j].prevX + ", " + $Enemies.enemiesArray[j].prevY)
			}
		}
		//Loop through all enemies (for removing enemies from array)
		for (var i = 0; i < $Enemies.enemiesArray.length; i++) {
			//Remove enemys with 0 health (AKA dead)
			console.log("b" + i)
			if ($Enemies.enemiesArray[i].health == 0) {
				//Remove Render Task on death
				console.log(i)
				$Enemies.enemiesArray.splice(i, 1)
			}
		}
	}
}

var $Enemies = game.enemy.Enemies