game.map.TilePos = function(x, y){
	this.x = x
	this.y = y
}
var $TilePos = game.map.TilePos
$TilePos.matches = function(tilePosA, tilePosB){
	return tilePosA.x == tilePosB.x && tilePosA.y == tilePosB.y
}
$TilePos.add = function(tilePosA, tilePosB){
	return new $TilePos(tilePosA.x + tilePosB.x, tilePosA.y + tilePosB.y)
}
$TilePos.prototype.toString = function(){
	return this.x + ", " + this.y
}
