game.tower.BasicTower = function(tileX, tileY) {
	$Tower.call(this, "Basic Tower", 25, 200, tileX, tileY);
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
		console.log(mySelf)
		range = distance(a.x,a.y,$Map.tileToPixel(mySelf.tileX),$Map.tileToPixel(mySelf.tileY));
		if(range < currClosestDist && range < mySelf.maxRange){
			currClosestDist = range
			currClosest = b;
		}
	});
	if(currClosest > -1 && this.cooldown == 0){
		game.enemies.killEnemy(currClosest);
		this.cooldown = this.fireSpeed
	}
}