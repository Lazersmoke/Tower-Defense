game.enemy.Enemies = {
	enemiesArray: [],
	wave: 0,
	spawnCooldown: 0,
	enemiesLeft: 0,
	ready: false,
	spawnEnemy: function (level, tilePos, nodeArray, speed) {
		$Enemies.enemiesArray.push(new $Enemy(level, tilePos, nodeArray, speed))
	},
	damageEnemy: function (id, amount) {
		if (amount > $Enemies.enemiesArray[id].health) {
			$Enemies.enemiesArray[id].health = 0
		}
		else  {
			$Enemies.enemiesArray[id].health -= amount
		}
	},
	killReward: function (lvl) {
		$Game.addMoney(lvl)
	},
	setReady: function () {
		if ($Enemies.enemiesLeft == 0) {
			$Enemies.ready = true
		}
	},
	waveTick: function () {
		if ($Enemies.enemiesLeft > 0) {
			if ($Enemies.spawnCooldown == 0) {
				$Enemies.spawnEnemy ($Enemies.wave, $Map.nodeArray[0], $Map.nodeArray)
				$Enemies.enemiesLeft--
				$Enemies.spawnCooldown = Math.round(100 / (4 + Math.sqrt($Enemies.wave)))
			}
			else {
				$Enemies.spawnCooldown--
			}
		}
		else {
			if ($Enemies.ready) {
				$Enemies.wave++
				document.getElementById("wave").innerHTML = "Wave: " + $Enemies.wave
				$Enemies.enemiesLeft = 30 + ($Enemies.wave * 10)
				$Enemies.ready = false
			}
		}
	},
	enemiesTick: function () {
		$Enemies.waveTick()
		for (var i in $Enemies.enemiesArray) {
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