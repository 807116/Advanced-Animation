function Orbiter(d, a, v, p, o){
    this.diam=d;
    this.ang =a;
    this.angVel = v;
    this.planet = p;
    this.orbRad=o;
    this.rotator = new JSVector();
    this.rotator.setMagnitude(this.orbRad);
    this.rotator.setDirection(this.ang);

}

Orbiter.prototype.run = function(x, y){
    this.render();
    this.update(x, y);
}

Orbiter.prototype.render = function(){
    let orbLoc = JSVector.addGetNew(this.planet.loc, this.rotator);
    context.beginPath();
    context.arc(orbLoc.x, orbLoc.y, this.diam/2, 0, 2*Math.PI);
    context.strokeStyle = "black";
    context.fillStyle = "#F8694B";
    context.fill();
    context.stroke(); 

}

Orbiter.prototype.update = function(x, y){
    this.rotator.rotate(this.angVel);
    
}