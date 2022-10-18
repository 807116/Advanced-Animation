function ParticleSystem(x, y, rad, clr, ctx1, ctx2) {
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random() * 4 - 2, Math.random() * 4 - 2)
    this.ctx1 = ctx1;
    this.ctx2 = ctx2;
    this.rad = 20;
    this.clr = "#1b8f3a";
    this.particles = [];
    this.loadParticles(10);
  }
  
  ParticleSystem.prototype.update = function () {
    //this.loc.add(this.vel);
    // for (let i = 0; i < this.particles.length; i++) {
    //   this.particles[i].run();
    // }
    for (let i = this.particles.length - 1; i > 0; i--) {
      this.particles[i].run();
      if(!this.particles[i].alive) {
        this.particles.splice(i, 1);
        this.particles.push(new Particle(this.loc.x, this.loc.y, 10, this.clr, this.ctx1, this.ctx2))
      }
    }
  }
  
  ParticleSystem.prototype.checkEdges = function () {
    if(this.loc.x<world.dims.left){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x>world.dims.right){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y>world.dims.top){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y<world.dims.bottom){
      this.vel.y = -this.vel.y;
    }
  }
  
  ParticleSystem.prototype.render = function () {
    //  wlrd balls
    this.ctx1.beginPath();
    this.ctx1.arc(this.loc.x, this.loc.y, this.rad, 0, Math.PI * 2);
    this.ctx1.closePath();
    this.ctx1.strokeStyle = this.clr;
    this.ctx1.fillStyle = this.clr;
    this.ctx1.fill();
    this.ctx1.stroke();
    //  mini balls
    this.ctx2.beginPath();
    this.ctx2.arc(this.loc.x, this.loc.y, this.rad, 0, Math.PI * 2);
    this.ctx2.closePath();
    this.ctx2.strokeStyle = this.clr;
    this.ctx2.fillStyle = this.clr;
    this.ctx2.fill();
    this.ctx2.stroke();
  }
  
  ParticleSystem.prototype.loadParticles = function(n) {
    for(let i = 0; i < n; i++) {
      this.particles[i] = new Particle(this.loc.x, this.loc.y, 10, this.clr, this.ctx1, this.ctx2)
    }
  }
  
  ParticleSystem.prototype.run = function () {
    this.update();
    this.checkEdges();
    this.render();
  }
     