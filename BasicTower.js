var BasicTower = function() {
	Tower.call(this, "Basic Tower");
}
BasicTower.prototype = Object.create(Tower.prototype);
BasicTower.prototype.constructor = BasicTower;