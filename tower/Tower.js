game.tower.Tower = function(name, tilePos) {
	if(!$Tower.validLocation(tilePos)){
		throw "Invalid tower location"
	}
	this.name = name;
	this.tilePos = tilePos;
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
$Tower.removeTower = function (tilePos){
	$Renderer.removeTask("[game.tower.Tower] " + $Tower.towerAt(tilePos).name + " at: " + tilePos)
	$Renderer.removeTask("[game.tower.Tower] " + $Tower.towerAt(tilePos).name + " range radius at: " + tilePos)
	$Tower.towerList.splice($Tower.towerList.indexOf($Tower.towerAt(tilePos)), 1)
}
$Tower.prototype = {
	constructor: $Tower,
	tickTower: function () {
		//Fire at enemies
	},
	renderTower: function (ctx) {
		ctx.beginPath();//Renders a range radius
		ctx.arc($Map.tileToPixel(this.tilePos.x),$Map.tileToPixel(this.tilePos.y),$Map.tileToPixel(this.maxRange),0,2*Math.PI);
		ctx.stroke();
	},
	removeTower: function () {
		$Tower.removeTower(this.tilePos)
	}
}