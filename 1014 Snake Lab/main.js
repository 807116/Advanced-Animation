let world;   // a single global object
let snakes;  
let numSnakes = 5;  

window.onload = init;//  After the window has been loaded, go to init
function init(){
    world = new World();  // global world
    animate();          // kick off the animation
}

//  animation loop called 60 fps
function animate(){
    world.ctx.fillStyle = "white";
    world.ctx.globalAlpha = 1.0;
    world.ctx.fillRect(0,0,game.canvas.width,game.canvas.height);
    world.run();    // run the world
    requestAnimationFrame(animate);
}
