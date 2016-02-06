game.tower.BasicTower = function(tilePos) {
	$Tower.call(this, "Basic Tower", tilePos);
	this.maxRange = 2.5
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
		range = $Tower.distance(a.tilePos,mySelf.tilePos);
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