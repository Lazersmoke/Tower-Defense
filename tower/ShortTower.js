game.tower.ShortTower = function(tilePos) {
	$Tower.call(this, "Short Tower", tilePos);
	this.maxRange = 2
	this.fireSpeed = 10//In ticks of cooldown
	this.cooldown = 0
}
var $ShortTower = game.tower.ShortTower;
$ShortTower.cost = 50
$ShortTower.validLocation = function(tilePos){
	return $Tower.towerAt(tilePos) == null && $Map.tileArray[Math.floor(tilePos.x)][Math.floor(tilePos.y)] != "path"
}

$ShortTower.prototype = Object.create($Tower.prototype);
$ShortTower.prototype.constructor = game.tower.ShortTower;

$ShortTower.prototype.tickTower = function() {
	this.shoot()
}
$ShortTower.prototype.shoot = function () {
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
		if(!$Renderer.hasTask("[game.tower.ShortTower] " + this.name + " Laser from " + this.tilePos + " to " + $Enemies.enemiesArray[currClosest].tilePos)){
		$Renderer.addTask(new $RenderTask("[game.tower.ShortTower] " + this.name + " Laser from " + this.tilePos + " to " + $Enemies.enemiesArray[currClosest].tilePos, 
			function(ctx){
				ctx.beginPath()
				ctx.moveTo($Map.tileToPixel(this.tilePos.x), $Map.tileToPixel(this.tilePos.y))
				ctx.lineTo($Map.tileToPixel(this.lastTargetTilePos.x), $Map.tileToPixel(this.lastTargetTilePos.y))
				ctx.stroke()
			}, this, 5))
		}
		this.lastTargetTilePos = $Enemies.enemiesArray[currClosest].tilePos
		$Enemies.killEnemy(currClosest);
		$Enemies.killReward($Enemies.enemiesArray[currClosest].level)
		this.cooldown = this.fireSpeed
	}
}