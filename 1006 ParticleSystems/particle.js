function Particle(x, y, rad, clr, ctx1, ctx2) {

  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random() * 4 - 2, Math.random() * 4 - 2)
  this.acc = new JSVector(0, 0.05);
  this.rad = rad;

  this.ctx1 = ctx1;
  this.clr = clr;
  this.ctx2 = ctx2;

}


Particle.prototype.run = function () {
  this.update();
  this.checkEdges();
  this.render();
}

Particle.prototype.update = function () {
  this.vel.add(this.acc); 
  this.loc.add(this.vel);

}


Particle.prototype.end = function () {
  // if(this.loc.x<world.dims.left+this.rad){
  //   this.vel.x = -this.vel.x;
  // }
  // if(this.loc.x>world.dims.right-this.rad){
  //   this.vel.x = -this.vel.x;
  // }
  // if(this.loc.y>world.dims.top+this.rad){
  //   this.vel.y = -this.vel.y;
  // }
  // if(this.loc.y<world.dims.bottom-this.rad){
  //   this.vel.y = -this.vel.y;
  // }
}


Particle.prototype.render = function () {

  this.ctx1.beginPath();
  this.ctx1.arc(this.loc.x, this.loc.y, this.rad, 0, Math.PI * 2);
  this.ctx1.closePath();
  this.ctx1.strokeStyle = this.clr;
  this.ctx1.fillStyle = this.clr;
  this.ctx1.fill();
  this.ctx1.stroke();

  

  this.ctx2.beginPath();
  this.ctx2.arc(this.loc.x, this.loc.y, this.rad, 0, Math.PI * 2);
  this.ctx2.closePath();
  this.ctx2.strokeStyle = this.clr;
  this.ctx2.fillStyle = this.clr;
  this.ctx2.fill();
  this.ctx2.stroke();
}