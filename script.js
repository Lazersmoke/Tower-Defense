$Map.buildMap()
$Map.addTiles()
setInterval($Game.tick, (1000 / $Game.tickRate))
$Renderer.render()

/*Namespace setup:
game
|-map
|-tower
| |-Tower
| |-BasicTower
|-enemy
| |-Enemies
| |-Enemy
|-render
  |-Renderer
  |-RenderTask

*/
