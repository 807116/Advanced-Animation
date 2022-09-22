function Orbiter(x, y, d) {
    this.loc = new JSVector(x, y);
    this.diam = d;
    this.ang;
   
}

Orbiter.prototype.run = function () {
    this.render();
    this.update();
}

Orbiter.prototype.render = function () {
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.diam/2, 0, 2*Math.PI);
    context.strokeStyle = "black";
    context.fillStyle = "#F8694B";
    context.fill();
    context.stroke(); 
}

Orbiter.prototype.update = function () {
    this.loc.add(this.vel);

}
 