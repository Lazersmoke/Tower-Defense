$Map.buildMap()
$Map.drawTiles()
setInterval($Game.tick, (1000 / $Game.tickRate))
//Test things
$Enemies.spawnEnemy ("John Cena", game.map.tileToPixel(game.map.nodeArray[0][0]), game.map.tileToPixel(game.map.nodeArray[0][1]), game.map.nodeArray, 5)