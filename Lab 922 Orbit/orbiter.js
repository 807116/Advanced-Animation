function Orbiter(d, a, v, p, o) {
    this.diam = d;
    this.ang= a;
    this.angVel = v;
    this.planet = new JSVector(p.x, p.y);
    this.orbRad = o;
    
   
}

Orbiter.prototype.run = function (x, y) {
    this.render();
    this.update(x, y);
}

Orbiter.prototype.render = function () {
    let x =Math.cos(this.ang)*this.orbRad;
    let y =Math.sin(this.ang)*this.orbRad;
    context.beginPath();
    context.arc(this.planet.x+x, this.planet.y+y, this.diam/2, 0, 2*Math.PI);
    context.strokeStyle = "black";
    context.fillStyle = "#F8694B";
    context.fill();
    context.stroke(); 
}

Orbiter.prototype.update = function (x, y) {
    this.planet.x = x;
    this.planet.y = y;
    this.ang+=this.angVel;

}
 