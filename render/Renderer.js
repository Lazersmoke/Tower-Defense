game.render.Renderer = {
	renderQue: [],
	shouldRender: true, //Should I render *right now*
	canvas: document.getElementById("map"),
}
var $Renderer = game.render.Renderer;

$Renderer.canvas.width = $Map.width * $Map.tileSize //Width and height represented in tiles
$Renderer.canvas.height = $Map.height * $Map.tileSize
$Renderer.context = $Renderer.canvas.getContext("2d")

//Working with RenderTasks
//Add an existing RenderTask to renderQue
$Renderer.addTask = function (renderTask) {
	if(!$Renderer.hasTask(renderTask.name)){
		$Renderer.renderQue.push(renderTask)
		//Tell render function to redraw because we have a new task
		$Renderer.shouldRender = true
	}else{throw "Render Task with name '" + renderTask.name + "' already exists, and has not been added"}
}
//Create a new render task and add it to the renderQue (shortcut)
$Renderer.createTask = function (name, callback) {
	$Renderer.addTask(new $RenderTask(name, callback, this));
}
//Remove a render task based on name
$Renderer.removeTask = function (name) {
	var stop = false;
	$Renderer.renderQue.forEach(function(a,b){
		if(!stop && a.name == name){$Renderer.renderQue.splice(b, 1); stop = true}
	});
}
//Returns true if the specified renderTask exists, false otherwise
$Renderer.hasTask = function (name) {
	var found = false
	$Renderer.renderQue.forEach(function(a,b){
		if(a.name == name){found = true}
	});
	return found;
}

//Helper functions to make code neater
//Make a new task that draws an image
$Renderer.addImage = function (renderTaskName, imgId, x, y) { 
	$Renderer.createTask(renderTaskName, function(ctx){
		ctx.drawImage(document.getElementById(imgId), x, y, $Map.tileSize, $Map.tileSize)
		}
	)
}

//Render all the renderTasks in the que
$Renderer.render = function () { 
	//This function is literally magic
	requestAnimationFrame($Renderer.render)
	
	//If something changed, render and forget that something changed
	if($Renderer.shouldRender){
		//Render
		$Renderer.renderQue.forEach(function(task){
			task.render.call(task.thisOverride, $Renderer.context)
		})
		//Forget
		shouldRender = false
	}
}