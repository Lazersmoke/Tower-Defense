game.render.RenderTask = function(name, render) {
	this.name = name;
	this.render = render;
}
var $RenderTask = game.render.RenderTask;
$RenderTask.prototype = {
	constructor: $RenderTask,
	render: function(canvasContext) {
		throw "Warning: Blank render task created";
	},
	queForRender: function() {
		$Renderer.addRenderTask(this);
	}
}