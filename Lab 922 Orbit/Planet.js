function Planet(x, y, d, num) {
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random() *4 -2, Math.random()*4 -2);
    this.acc = new JSVector(0, 0);
    this.diam = d;
    this.orbs = [];
    for(let j = 0; j<numPlanets; j++){
        let angVelll = Math.random()*.1 + .01;
        for(let i = 0; i< num; i++){
            this.orbs[i] = new Orbiter(10, (Math.PI*2/num)*i, angVelll , this.loc, 50);
        }
        
    }
    
    
}

Planet.prototype.run = function () {
    for(let i=0; i<this.orbs.length; i++){
        this.orbs[i].run(this.loc.x, this.loc.y);
    }
    this.render();
    this.update();
    this.edges();
}

Planet.prototype.render = function () {
    context.save();
    context.translate(this.loc.x, this.loc.y);
    context.beginPath(); 
    context.moveTo(20,0);
    context.lineTo(-10,-20);
    context.lineTo(-10,20);
    context.lineTo(20,0);
    context.fillStyle = "gray";    
    context.fill();     
    context.stroke();   
    context.restore();
}

Planet.prototype.update = function () {
    this.loc.add(this.vel);

}

Planet.prototype.edges = function () {
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