game.input.InputHandler = {
	towerToPlace: $BasicTower,
	handleCanvasClick: function(evt){
		if(evt){
			var x = evt.offsetX
			var y = evt.offsetY
			if ($Game.removeMoney($InputHandler.towerToPlace.cost)) {
				if($InputHandler.towerToPlace.validLocation(new $TilePos($Map.pixelToTile(x), $Map.pixelToTile(y)))){
					new $InputHandler.towerToPlace(new $TilePos($Map.pixelToTile(x), $Map.pixelToTile(y)))
					return
				}
			}
			if($Tower.towerAt(new $TilePos($Map.pixelToTile(x), $Map.pixelToTile(y))) != null){
				$Tower.towerAt(new $TilePos($Map.pixelToTile(x), $Map.pixelToTile(y))).removeTower()
				$Game.addMoney($Tower.towerAt(new $TilePos($Map.pixelToTile(x), $Map.pixelToTile(y))).cost * 0.75)
			}	
		}
	}
}
var $InputHandler = game.input.InputHandler
$Renderer.canvas.addEventListener('mousedown', $InputHandler.handleCanvasClick)