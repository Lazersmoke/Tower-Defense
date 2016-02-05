game.render.Renderer = {
	renderQue: []
}
var $Renderer = game.render.Renderer;
$Renderer.addTask = function (renderTask) {
	if(!$Renderer.hasTask(renderTask.name)){
		$Renderer.renderQue.push(renderTask)
	}else{throw "Render Task with name '" + renderTask.name + "' already exists, and has not been added"}
}
$Renderer.removeTask = function (name) {
	$Renderer.renderQue.forEach(function(a,b){
		if(a.name == name){$Renderer.renderQue.splice(b, 1)}
	});
}
$Renderer.hasTask = function (name) {
	$Renderer.renderQue.forEach(function(a,b){
		if(a.name == name){return true;}
	});
}
$Renderer.createTask = function (name, callback) {
	$Renderer.addTask(new $RenderTask(name, callback, this));
}
$Renderer.render = function () { 
	requestAnimationFrame($Renderer.render)
	if($Renderer.renderQue.length > 0){
		//$Map.clear()
	}
	$Renderer.renderQue.forEach(function(task){
		task.render.call(task.thisOverride, $Map.context);
	})
}