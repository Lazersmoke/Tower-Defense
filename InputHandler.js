game.input.InputHandler = { 	
	handleCanvasClick: function(event){
		var x = event.pageX - elemLeft
        var y = event.pageY - elemTop
	}
}
var $InputHandler = game.input.InputHandler
$Renderer.canvas.addEventListener('click', $InputHandler.handleCanvasClick, false)