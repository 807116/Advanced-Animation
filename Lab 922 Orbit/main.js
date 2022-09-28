window.addEventListener("load", init);


let canvas, context;
let planets = [];
let numPlanets = 10;


function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadPlanets(numPlanets);
    animate(); 
}


function loadPlanets(n){
    for(let i = 0; i<n; i++){
        let x = Math.random()*canvas.width;
        let y = Math.random()*canvas.height;
        planets.push(new Planet(x, y, 20, Math.floor(Math.random()*5+3)));
        
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //  run all the balls from here
    for(let i=0; i<planets.length; i++){
        planets[i].run();
    }
    
   
    

    requestAnimationFrame(animate); // next cycle
}