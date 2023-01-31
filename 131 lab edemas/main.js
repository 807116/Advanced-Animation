let world;
window.onload = init;

function init(){
    world = new World();
    animate();
}

function animate(){
    
  world.run();
  requestAnimationFrame(animate);
}

//#################################################################  Listeners
// add an event handler such that the a, s, w, d keys
  // will reposition the canvas within the world.
  window.addEventListener("keypress", function (event) {
    switch (event.code) {
      case "KeyW":
        if (world.cnvMainLoc.y + 100 > world.dims.top)
          world.cnvMainLoc.y -= 20;
        break;
      case "KeyS":
        if (world.cnvMainLoc.y + world.cnvMain.height - 100 < world.dims.bottom)
          world.cnvMainLoc.y += 20;
        break;
      case "KeyA":
        if (world.cnvMainLoc.x + 100 > world.dims.left)
          world.cnvMainLoc.x -= 20;
        break;
      case "KeyD":
        if (world.cnvMainLoc.x + world.cnvMain.width - 100 < world.dims.right)
          world.cnvMainLoc.x += 20;
        break;
        break;
    }
  }, false);

function getRandomInt(min, max) {
                           
  return Math.floor(Math.random() * (max - min + 1)) + min;
}