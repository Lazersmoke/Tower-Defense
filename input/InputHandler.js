game.input.InputHandler = { 	
	handleCanvasClick: function(evt){
		if(evt){
			var x = evt.offsetX
			var y = evt.offsetY
			if ($Game.removeMoney(100)) {
				console.log("placing tower")
				if($Tower.validLocation(new $TilePos($Map.pixelToTile(x), $Map.pixelToTile(y)))){
					new $BasicTower(new $TilePos($Map.pixelToTile(x), $Map.pixelToTile(y)))
					return
				}
			}
			if($Tower.towerAt(new $TilePos($Map.pixelToTile(x), $Map.pixelToTile(y))) != null){
				$Tower.towerAt(new $TilePos($Map.pixelToTile(x), $Map.pixelToTile(y))).removeTower()
				$Game.addMoney(75)
			}	
		}
	}
}
var $InputHandler = game.input.InputHandler
$Renderer.canvas.addEventListener('mousedown', $InputHandler.handleCanvasClick)