game.tower.Tower = function(name, fireSpeed, maxRange, tileX, tileY) {
	this.name = name;
	this.maxRange = maxRange
	this.fireSpeed = fireSpeed;//In ticks of cooldown
	this.tileX = tileX;
	this.tileY = tileY;
	this.cooldown = 0;
	$Tower.towerList.push(this);
}
var $Tower = game.tower.Tower;
$Tower.towerList = [];
$Tower.renderTowers = function () {
	Tower.towerList.forEach(function(a){
		a.renderTower();
	});
}
$Tower.tickTowers = function () { 
	Tower.towerList.forEach(function(a){
		a.tickTower();
	});
}
$Tower.prototype = {
	constructor: $Tower,
	tickTower: function () {
		this.shoot()
		console.log(this.name + " got Ticked!");//Fire at enemies
	},
	renderTower: function () {
		var c=document.getElementById("map");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.arc(tileToPixel(this.tileX),tileToPixel(this.tileY),this.maxRange,0,2*Math.PI);
		ctx.stroke();
		console.log(this.name + " got Rendered!");//Fire at enemies
	},
	
}

function distance(xa,ya,xb,yb){
	return Math.sqrt(Math.pow((xa-xb),2)+Math.pow((ya-yb),2))
}