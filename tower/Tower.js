game.tower.Tower = function(name, tilePos) {
	this.name = name;
	this.tilePos = tilePos;
	this.cooldown = 0;
	$Tower.towerList.push(this);
	$Renderer.addImage("[game.tower.Tower] " + this.name + " at: " + this.tilePos, "tower", $Map.tileToPixel(this.tilePos.x) - ($Map.tileSize / 2), $Map.tileToPixel(this.tilePos.y) - ($Map.tileSize / 2))
	$Renderer.addTask(new $RenderTask("[game.tower.Tower] " + this.name + " range radius at: " + this.tilePos, this.renderTower, this))
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
$Tower.towerAt = function (tilePos){
	var returnValue = null
	$Tower.towerList.forEach(function(a){
		if($TilePos.matches(a.tilePos, tilePos)){
			returnValue = a;
		}
	});
	return returnValue
}
$Tower.validLocation = function(tilePos){
	return $Tower.towerAt(tilePos) == null && $Map.tileArray[Math.floor(tilePos.x)][Math.floor(tilePos.y)] != "path"
}
$Tower.prototype = {
	constructor: $Tower,
	tickTower: function () {
		//console.log(this.name + " got Ticked!");//Fire at enemies
	},
	renderTower: function (ctx) {
		ctx.beginPath();//Renders a range radius
		ctx.arc($Map.tileToPixel(this.tilePos.x),$Map.tileToPixel(this.tilePos.y),$Map.tileToPixel(this.maxRange),0,2*Math.PI);
		ctx.stroke();
	}
}

$Tower.distance = function (tilePosA, tilePosB){
	return Math.sqrt(Math.pow((tilePosA.x - tilePosB.x),2)+Math.pow((tilePosA.y - tilePosB.y),2))
}