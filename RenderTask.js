game.render.RenderTask = function(name, render, thisOverride) {
	this.name = name;
	this.render = render;
	this.thisOverride = thisOverride;
}
var $RenderTask = game.render.RenderTask;
$RenderTask.prototype = {
	constructor: $RenderTask,
	render: function(canvasContext) {
		throw "Warning: Blank render task created";
	}
}
