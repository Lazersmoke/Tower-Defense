game = new Game("map", 64, 15, 15)
game.map.drawTiles()

function tileToPixel(cord) {
  return (cord + 0.5) * game.map.tileSize
}

function pixelToTile(cord) {
  return Math.round((cord / game.map.tileSize) - 0.5)
}
