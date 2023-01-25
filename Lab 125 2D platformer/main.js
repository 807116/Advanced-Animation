window.addEventListener("load", init);

let canvas, context,moveMag;
let foreground,background;
let backgrounds = [];
let foregrounds = [];
let platforms = [];
let hero;



function init() {
    moveMag = 1;
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    foreground = document.getElementById("Fsrc");
    foregrounds[0] = new Foreground(0,0, "Red");
    foregrounds[1] = new Foreground(-canvas.width/2, 0, "Blue");
    hero = new Hero(5);
    loadPlatforms(1);
    animate();
}

function loadPlatforms(n){
    for(let i = 0; i<n; i++){
        //platforms[i] = new Platform(Math.random() * (canvas.width), Math.random() * (500-300)+300,50);
        platforms[i] = new Platform(75, 300, 50);

                
    }
}


 
function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i<foregrounds.length;i++){
        foregrounds[i].vel.setMagnitude(.5);
        foregrounds[i].run();
    }
    for(let i = 0; i<platforms.length; i++){
        platforms[i].run();
    }
    for(let i = 0; i<platforms.length; i++){
        platforms[i].run();
    }
    hero.run();

    
    requestAnimationFrame(animate);
}
