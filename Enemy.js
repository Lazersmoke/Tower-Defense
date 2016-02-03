enemyList = [];
var Enemy = function(name) {
	this.name = name;
	enemyList.push(this);
}
Enemy.enemiesTick = function () {
	enemyList.forEach(function(a){
		a.tickEnemy();
	});
}
Enemy.prototype = {
	constructor: Enemy,
	tickEnemy: function () {
		//Do stuff
	}
}