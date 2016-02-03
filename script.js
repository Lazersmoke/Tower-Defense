game = new Game("map", 64, 15, 15)
game.map.drawTiles()

function tileToPixel(cord) {
  return (cord + 0.5) * game.tileSize
}

function pixelToTile(cord) {
  return Math.abs((cord / game.tileSize) - 0.5)
}
