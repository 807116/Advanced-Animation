window.addEventListener("load", init);


let canvas, context;
let planets = [];
let orbiters = [];


function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadPlanets(10);
    loadOrbiters(20);
    animate(); 
}

function loadOrbiters(n){
    for(let i = 0; i<n; i++){
       
        //  fill an array with n balls
        let x = Math.random()*canvas.width;
        let y = Math.random()*canvas.height;
        orbiters.push(new Orbiter(x, y, 5));
        
    }
}

function loadPlanets(n){
    for(let i = 0; i<n; i++){
       
        //  fill an array with n balls
        let x = Math.random()*canvas.width;
        let y = Math.random()*canvas.height;
        planets.push(new Planet(x, y, 20));
        
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //  run all the balls from here
    for(let i=0; i<planets.length; i++){
        planets[i].run();
    }
    for(let i=0; i<orbiters.length; i++){
        orbiters[i].run();
    }
   
    

    requestAnimationFrame(animate); // next cycle
}