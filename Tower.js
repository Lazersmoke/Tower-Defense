var Tower = function(name, fireSpeed, tileX, tileY) {
	this.name = name;
	this.fireSpeed = fireSpeed;//In ticks of cooldown
	this.tileX = tileX;
	this.tileY = tileY;
	this.cooldown = 0;
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
		this.shoot()
		console.log(this.name + " got Ticked!");//Fire at enemies
	},
	renderTower: function () {
		console.log(this.name + " got Rendered!");//Fire at enemies
	},
	shoot: function () {
		if(this.cooldown > 0){
			this.cooldown--
		}
		var currCloseset = -1;
		var currClosesetDist = 100000;
		Enemies.array.forEach(function(a, b){
			if(distance(a.x,a.y,tileToPixel(this.TileX),tileToPixel(this.TileY)) < currClosestDist){
				currClosestDist = distance(a.x,a.y,tileToPixel(this.TileX),tileToPixel(this.TileY))
				currClosest = b;
			}
		});
		if(currClosest > -1 && this.cooldown == 0){
			Enemies.killEnemy(currCloseset);
			this.cooldown = this.fireSpeed
		}
	}
}

function distance(xa,ya,xb,yb){
	Math.sqrt(Math.pow((xa-xb),2)+Math.pow((ya-yb),2))
}