// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let ship = {};
let planet = {};
let trail = {};

ship.loc = new JSVector(100,100);
ship.vel = new JSVector (2, 2);
planet.loc = new JSVector(500,500);
planet.vel = new JSVector(0,0);
planet.diam = 20;

ship.draw = function(){

    context.save();
    context.translate(this.loc.x, this.loc.y);
    context.rotate(this.vel.getDirection());
    context.beginPath();    // clear old path
    context.moveTo(10,0);
    context.lineTo(-5,-10);
    //context.strokeStyle = "black";  // color to fill
    context.lineTo(0,0);
    context.lineTo(-5,10);
    context.lineTo(10,0);
    context.fillStyle = "gray";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
    context.restore();

}

planet.draw = function(){
    context.beginPath();    // clear old path
    context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);  //  change x and y to this.loc.x and this.loc.y
    context.strokeStyle = "gray";  // color to fill
    context.fillStyle = "gray";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}

ship.update = function(){
    this.acc = JSVector.subGetNew(planet.loc, this.loc);
    this.acc.normalize();
    this.acc.multiply(0.25);
    this.vel.add(this.acc);
    this.vel.limit(3);
    
    this.loc.add(this.vel);
}

planet.update = function(){
    let dist = this.loc.distance(ship.loc);
    if (dist < 200){
        this.acc = JSVector.subGetNew(this.loc, planet.loc);
        this.acc.normalize();
        this.acc.multiply(0.25);
      }
    
    if(dist < 25){
        planet.loc.x = (Math.random() * (canvas.width));
        planet.loc.y = (Math.random() * (canvas.height) )
    }
}

ship.run = function(){
    this.update();
    this.draw();
}

planet.run = function(){
    this.update();
    this.draw();
}


function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");

    //planet.loc = new JSVector(100,100);
   // planet.vel = new JSVector (2, 2);

    
    // planet.update = function(){

    // }

    
    
   
    

    
    //planet = new Mover(100, 100, 20);
    animate();      // kick off the animation
}


function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //  run all the balls from here

    ship.run();

    planet.run();

    requestAnimationFrame(animate); // next cycle
}