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

function randomNumber(min, max) { 
  let rdm = Math.random() * (max - min) + min;
  return rdm;
} 
