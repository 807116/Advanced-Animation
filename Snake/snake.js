// Snake constructor

function Snake(numSegs, segLength) {
    //  number of segments, segment length
    this.loc = new JSVector(Math.random() * canvas.width, Math.random() * canvas.height);
    this.vel = new JSVector(2, 2)
    this.numSegs = numSegs;
    this.segLength = segLength;
    this.segments = [];
    this.loadSegments();
}

Snake.loadSegments = function () {
    for(let i = 0; i< Math.random() * (6 - 3) + 3;){
        let x = Math.random()*canvas.width;
        let y = Math.random()*canvas.height;
        this.segments()
        
    }
}

Snake.run = function () {
    this.render();
    this.update();
}

Snake.update = function () {
    context.beginPath();    // clear old path
    context.arc(this.loc.x, this.loc.y, 20, 0, 2 * Math.PI);  //  change x and y to this.loc.x and this.loc.y
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = this.clr;     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}

Snake.render = function () {
    this.loc.add(this.vel);
}

