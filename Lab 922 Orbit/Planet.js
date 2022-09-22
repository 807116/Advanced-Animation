function Planet(x, y, d) {
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random() *4 -2, Math.random()*4 -2);
    this.acc = new JSVector(0, 0);
    this.diam = d;
    this.orbs = [];
   
}

Planet.prototype.run = function () {
    this.render();
    this.update();
    this.translate();
}

Planet.prototype.render = function () {
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.diam/2, 0, 2*Math.PI);
    context.strokeStyle = "black";
    context.fillStyle = "#F8694B";
    context.fill();
    context.stroke(); 
}

Planet.prototype.update = function () {
    this.loc.add(this.vel);

}

Planet.prototype.translate = function () {
    if (this.loc.y < 0) {
        this.loc.y = canvas.height;
    }
    if (this.loc.y > canvas.height) {
        this.loc.y = 0;
    }
    if (this.loc.x > canvas.width) {
        this.loc.x = 0;
    }
    if (this.loc.x < 0) {
        this.loc.x = canvas.width;
    }
}