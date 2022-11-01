
//  Lab 1024 Flocking
//  221024
//  

var world;   // a single global object
window.onload = init;//  After the window has been loaded, go to init

function init(){
    world = new World();  // global game
    animate();          // kick off the animation
}
//  animation loop called 60 fps
function animate(){
    // paint the canvas with mostly transparent black
    world.ctx.fillStyle = 'rgba(0,0,0,.5)'
    world.ctx.fillRect(0,0,world.canvas.width,world.canvas.height);
    world.run();    // run the world
  requestAnimationFrame(animate);
}
