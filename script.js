game = new Game("map", 64, 15, 15)
game.map.drawTiles()
game.enemies.spawnEnemy ("John Cena", tileToPixel(game.map.getNodeArray()[0][0]), tileToPixel(game.map.getNodeArray()[0][1]), game.map.nodeArray, 5)
setInterval(game.tick, 1000)

function tileToPixel(cord) {
  return (cord + 0.5) * game.map.tileSize
}

function pixelToTile(cord) {
  return Math.round((cord / game.map.tileSize) - 0.5)
}
