$Game.startGame()
setInterval($Game.tick, (1000 / $Game.tickRate))
$Renderer.render()//Start render loop

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
