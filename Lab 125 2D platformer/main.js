window.addEventListener("load", init);

let canvas, context,moveMag;
let foreground,background;
let backgrounds = [];
let foregrounds = [];


function init() {
    moveMag = 1;
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    foreground = document.getElementById("Fsrc");
    foregrounds[0] = new Foreground(0,0, "Red");
    foregrounds[1] = new Foreground(-canvas.width/2, 0, "Blue");
    animate();
}
function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i<foregrounds.length;i++){
        foregrounds[i].vel.setMagnitude(.5);
        foregrounds[i].run();
    }
    
    requestAnimationFrame(animate);
}
