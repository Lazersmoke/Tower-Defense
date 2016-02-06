game.map.TilePos = function(x, y){
	this.x = x
	this.y = y
}
var $TilePos = game.map.TilePos
$TilePos.matches = function(tilePosA, tilePosB){
	return tilePosA.x == tilePosB.x && tilePosA.y == tilePosB.y
}
$TilePos.add = function(tilePosA, tilePosB){
	return new $TilePos(tilePosA.x + tilePosB.x, tilePosA.y + tilePosB.y).roundOff()
}
$TilePos.scale = function(tilePos, scalar){
	return new $TilePos(tilePosA.x * tilePosB.x, tilePosA.y * tilePosB.y).roundOff()
}
$TilePos.slope = function(tilePosA, tilePosB){
	return -(tilePosA.y - tilePosB.y) / (tilePosA.x - tilePosB.x)
}
$TilePos.angle = function(tilePosA, tilePosB){
	var slope = $TilePos.slope(tilePosA, tilePosB)
	return Math.round((Number.isFinite(slope) ? tilePosA.x > tilePosB.x ? Math.PI + Math.atan(slope) : Math.atan(slope) : slope == Number.POSITIVE_INFINITY ? 1.5707963267948966 : -1.5707963267948966) * 1000 ) / 1000
}
$TilePos.distance = function(tilePosA, tilePosB){
	return Math.sqrt(Math.pow((tilePosA.x - tilePosB.x),2)+Math.pow((tilePosA.y - tilePosB.y),2))
}

$TilePos.prototype.toString = function(){
	return this.x + ", " + this.y
}
$TilePos.prototype.add = function(tilePos){
	this.x += tilePos.x
	this.y += tilePos.y
	return this.roundOff()
}
$TilePos.prototype.matches = function(tilePos){
	return $TilePos.matches(this, tilePos)
}
$TilePos.prototype.scale = function(scalar){
	this.x *= scalar
	this.y *= scalar
	return this.roundOff()
}

$TilePos.prototype.roundOff = function(){
	this.x = Math.round(this.x * 1000) / 1000
	this.y = Math.round(this.y * 1000) / 1000
	return this
}