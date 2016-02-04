game.render.Renderer = {
	renderQue: []
}
var $Renderer = game.render.Renderer;
$Renderer.queTask = function (renderTask) {
	$Renderer.renderQue.push(renderTask)
}
$Renderer.queForRender = function (callback) {
	$Renderer.queTask(new $RenderTask("auto-gen render task", callback));
}
$Renderer.render = function () { 
	requestAnimationFrame($Renderer.render)
	if($Renderer.renderQue.length > 0){
		$Map.clear()
	}
	$Renderer.renderQue.forEach(function(task){
		task.render($Map.context);
	})
	$Renderer.renderQue = [];
}