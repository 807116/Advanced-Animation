// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let balls = [];
let attractor;

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadBalls(250);
    attractor = new Mover(100, 100, 20);
    animate();      // kick off the animation
}


// attractor.run();
// requestAnimationFrame(animate);

function loadBalls(n){
    for(let i = 0; i < n; i++){
        //  fill an array with n balls
        let x = Math.random()*canvas.width;
        let y = Math.random()*canvas.width;
        balls.push(new Mover(x, y, 7));
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //  run all the balls from here
    for(let i = 0; i<balls.length; i++){
       balls[i].run();
    }
    attractor.run();
    requestAnimationFrame(animate); // next cycle
}
