game.tower.BasicTower = function(tilePos) {
	$Tower.call(this, "Basic Tower", tilePos);
	this.maxRange = 2
	this.fireSpeed = 25//In ticks of cooldown
	this.cooldown = 0
}
var $BasicTower = game.tower.BasicTower;
$BasicTower.cost = 100
$BasicTower.validLocation = function(tilePos){
	return $Tower.towerAt(tilePos) == null && $Map.tileArray[Math.floor(tilePos.x)][Math.floor(tilePos.y)] != "path"
}

$BasicTower.prototype = Object.create($Tower.prototype);
$BasicTower.prototype.constructor = game.tower.BasicTower;

$BasicTower.prototype.tickTower = function() {
	this.shoot()
}
$BasicTower.prototype.shoot = function () {
	if(this.cooldown > 0){
		this.cooldown--
	}
	var mySelf = this;//dont ask
	var currClosest = -1;
	var currClosestDist = 100000;
	$Enemies.enemiesArray.forEach(function(a, b){
		range = $TilePos.distance(a.tilePos,mySelf.tilePos);
		if(range < currClosestDist && range < mySelf.maxRange){
			currClosestDist = range
			currClosest = b;
		}
	});
	if(currClosest > -1 && this.cooldown == 0){
		if(!$Renderer.hasTask("[game.tower.BasicTower] Basic Tower Laser from " + this.tilePos + " to " + $Enemies.enemiesArray[currClosest].tilePos)){
		$Renderer.addTask(new $RenderTask("[game.tower.BasicTower] Basic Tower Laser from " + this.tilePos + " to " + $Enemies.enemiesArray[currClosest].tilePos, 
			function(ctx){
				ctx.beginPath()
				ctx.moveTo($Map.tileToPixel(this.tilePos.x), $Map.tileToPixel(this.tilePos.y))
				ctx.lineTo($Map.tileToPixel(this.lastTargetTilePos.x), $Map.tileToPixel(this.lastTargetTilePos.y))
				ctx.stroke()
			}, this, 30))
		}
		this.lastTargetTilePos = $Enemies.enemiesArray[currClosest].tilePos
		$Enemies.damageEnemy(currClosest, 1);
		if ($Enemies.enemiesArray[currClosest].health == 0) {
			$Enemies.killReward($Enemies.enemiesArray[currClosest].level)
		}
		this.cooldown = this.fireSpeed
	}
}