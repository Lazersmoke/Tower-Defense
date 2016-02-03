var Tower = function(name, tileX, tileY) {
	this.name = name;
	this.tileX = tileX;
	this.tileY = tileY;
	Tower.towerList.push(this);
}
Tower.towerList = [];
Tower.renderTowers = function () {
	Tower.towerList.forEach(function(a){
		a.renderTower();
	});
}
Tower.tickTowers = function () { 
	Tower.towerList.forEach(function(a){
		a.tickTower();
	});
}
Tower.prototype = {
	constructor: Tower,
	tickTower: function () {
		console.log(this.name + " got Ticked!");//Fire at enemies
	},
	renderTower: function () {
		console.log(this.name + " got Rendered!");//Fire at enemies
	}
}