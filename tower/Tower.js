game.tower.Tower = function(name, tileX, tileY) {
	this.name = name;
	this.tileX = tileX;
	this.tileY = tileY;
	this.cooldown = 0;
	$Tower.towerList.push(this);
	$Renderer.addImage("[game.tower.Tower] Tower at: " + this.tileX + ", " + this.tileY, "tower", $Map.tileToPixel(this.tileX) - ($Map.tileSize / 2), $Map.tileToPixel(this.tileY) - ($Map.tileSize / 2))
	$Renderer.addTask(new $RenderTask("[game.tower.Tower] Tower range radius at: " + this.tileX + ", " + this.tileY, this.renderTower, this))
}
var $Tower = game.tower.Tower;
$Tower.towerList = [];
$Tower.renderTowers = function () {
	$Tower.towerList.forEach(function(a){
		a.renderTower();
	});
}
$Tower.tickTowers = function () { 
	$Tower.towerList.forEach(function(a){
		a.tickTower();
	});
}
$Tower.prototype = {
	constructor: $Tower,
	tickTower: function () {
		//console.log(this.name + " got Ticked!");//Fire at enemies
	},
	renderTower: function (ctx) {
		ctx.beginPath();
		ctx.arc($Map.tileToPixel(this.tileX),$Map.tileToPixel(this.tileY),this.maxRange,0,2*Math.PI);
		ctx.stroke();
	}
}

function distance(xa,ya,xb,yb){
	return Math.sqrt(Math.pow((xa-xb),2)+Math.pow((ya-yb),2))
}