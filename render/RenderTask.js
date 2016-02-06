game.render.RenderTask = function(name, render, thisOverride, lifespan) {
	this.name = name;
	this.render = render;
	this.thisOverride = thisOverride || this;
}
var $RenderTask = game.render.RenderTask;
$RenderTask.prototype = {
	constructor: $RenderTask,
	render: function(canvasContext) {
		throw "Warning: Blank render task created";
	}
}
