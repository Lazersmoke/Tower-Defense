game.input.InputHandler = { 	
	handleCanvasClick: function(evt){
		try{
		var x = evt.pageX - $Renderer.canvas.offsetLeft
        var y = evt.pageY - $Renderer.canvas.offsetTop
		if($Tower.validLocation(new $TilePos($Map.pixelToTile(x), $Map.pixelToTile(y)))){
			new $BasicTower(new $TilePos($Map.pixelToTile(x), $Map.pixelToTile(y)))
		}
		}catch(e){}
	}
}
var $InputHandler = game.input.InputHandler
$Renderer.canvas.addEventListener('click', $InputHandler.handleCanvasClick, false)