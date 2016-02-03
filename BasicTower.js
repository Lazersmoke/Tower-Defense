var BasicTower = function(tileX, tileY) {
	Tower.call(this, "Basic Tower", tileX, tileY);
}
BasicTower.prototype = Object.create(Tower.prototype);
BasicTower.prototype.constructor = BasicTower;