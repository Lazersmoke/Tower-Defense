game.input.InputHandler = { 	
	handleCanvasClick: function(event){
		var x = event.pageX - elemLeft
        var y = event.pageY - elemTop
		new BasicTower($Map.pixelToTile(x), $Map.pixelToTile(y))
	}
}
var $InputHandler = game.input.InputHandler
$Renderer.canvas.addEventListener('click', function(evt){
		var x = evt.pageX - $Renderer.canvas.offsetLeft
        var y = evt.pageY - $Renderer.canvas.offsetTop
		new $BasicTower($Map.pixelToTile(x), $Map.pixelToTile(y))
	}, false)