// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let ship = {};
let planet = {};


function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    ship.loc = new JSVector(100,100);
    ship.vel = new JSVector (2, 2);
    planet.loc = new JSVector(100,100);
    planet.vel = new JSVector (2, 2);
    planet.draw = function(){
        context.beginPath();    // clear old path
        context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);  //  change x and y to this.loc.x and this.loc.y
        context.strokeStyle = "black";  // color to fill
        context.fillStyle = "black";     // color to stroke
        context.fill();     // render the fill
        context.stroke();   // render the stroke
    }
    
    // planet.update = function(){

    // }

    ship.draw = function(){
        context.beginPath();    // clear old path
        context.moveTo(10,0);
        context.lineTo(-5,-10);
        //context.strokeStyle = "black";  // color to fill
        context.lineTo(0,0);
        context.lineTo(-5,10);
        context.lineTo(10,0);
        context.fillStyle = "black";     // color to stroke
        context.fill();     // render the fill
        context.stroke();   // render the stroke
    }
    // ship.update = function(){
    //     //this.acc = JSVector.subGetNew( this.loc, planet.loc);
    //     this.acc.normalize();
    //     this.acc.multiply(0.25);
    //     this.vel.add(this.acc);
    //     this.vel.limit(3);
        
    //     this.loc.add(this.vel);
    // }
   
    planet.run = function(){
        //this.update();
        this.draw();
    }

    // ship.run = function(){
    //     this.update();
    //     this.draw();
    // }
    //planet = new Mover(100, 100, 20);
    animate();      // kick off the animation
}



// requestAnimationFrame(animate);

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //  run all the balls from here
    //ship.run();
    //planet.run();
    requestAnimationFrame(animate); // next cycle
}