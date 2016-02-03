var towerList = [];
var Tower = function(name) { // Constructer
	this.name = name;
	towerList.push(this);
}
Tower.towersTick = function () { 
	towerList.forEach(function(a){
		a.tickTower();
	});
}
Tower.prototype = {
	constructor: Tower,
	tickTower: function () {
		this.name + " got Ticked!";//Fire at enemies
	}
}