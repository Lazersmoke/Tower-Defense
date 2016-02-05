game.tower.BasicTower = function(tileX, tileY) {
	$Tower.call(this, "Basic Tower", tileX, tileY);
	this.maxRange = 200
	this.fireSpeed = 25//In ticks of cooldown
}
var $BasicTower = game.tower.BasicTower;
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
		range = distance(a.x,a.y,$Map.tileToPixel(mySelf.tileX),$Map.tileToPixel(mySelf.tileY));
		if(range < currClosestDist && range < mySelf.maxRange){
			currClosestDist = range
			currClosest = b;
		}
	});
	if(currClosest > -1 && this.cooldown == 0){
		$Enemies.killEnemy(currClosest);
		this.cooldown = this.fireSpeed
	}
}