var BasicTower = function(tileX, tileY) {
	Tower.call(this, "Basic Tower", 25, tileX, tileY);
}
BasicTower.prototype = Object.create(Tower.prototype);
BasicTower.prototype.constructor = BasicTower;