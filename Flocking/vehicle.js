//  Vehicle constructor function +++++++++++++++++++++++++++++
function Vehicle(loc) {
  this.loc = new JSVector(loc.x, loc.y);
  let dx = Math.random() * 4 - 2;
  let dy = Math.random() * 4 - 2;
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector(0, 0);
 
  this.clr = "rgba(180,0,220,.8)";
  this.maxSpeed = document.getElementById("slider2").value;  // %%%%%%%%%%%%%%%%%
  this.maxForce = document.getElementById("slider1").value;  // %%%%%%%%%%%%%%%%%
  //############################################################################# not attached to slider
  this.desiredSep = 10;//  desired separation between vehicles
  this.scl = 3;
}

//  placing methods in the prototype 
Vehicle.prototype.run = function (vehicles) {
  this.flock(vehicles);
  this.update();
  this.checkEdges()
  this.render();
}

Vehicle.prototype.flock = function(vehicles) {
  //  flock force is the accumulation of all forces
  let flockForce = new JSVector(0,0);
  // set up force vectors to be added to acc
  let sep = this.separate(vehicles);
  let ali = this.align(vehicles);
  let coh = this.cohesion(vehicles);
  //  set multiples via sliders 
  let sepMult = document.getElementById("slider3").value; // %%%%%%%%%%%%%%%%%%
  let aliMult = document.getElementById("slider4").value;;  // %%%%%%%%%%%%%%%%%%
  let cohMult = document.getElementById("slider5").value;;    // %%%%%%%%%%%%%%%%%%
  //  calculate three forces
  sep.multiply(sepMult);
  ali.multiply(aliMult);
  coh.multiply(cohMult);
  //  add each of these to flockForce
  flockForce.add(sep);
  flockForce.add(ali);
  flockForce.add(coh);
  this.acc.add(flockForce);
}
//+++++++++++++++++++++++++++++++++  Flocking functions
Vehicle.prototype.separate = function (v) {
  // A vector for average of separation forces
  let sum = new JSVector(0, 0);
  let ds = this.desiredSep*this.desiredSep;
  let steer = new JSVector(0, 0); 
  let count = 0;
  for (let other = 0; other < v.length; other++) {
    let d = this.loc.distanceSquared(v[other].loc);
    if(d < ds && d > 0){
      let diff = JSVector.subGetNew( this.loc, v[other].loc);
      diff.normalize();
      sum.add(diff);
      count++;
    }
  }
  
  if(count !== 0){
    sum.divide(count);
    sum.normalize();
    sum.multiply(this.maxSpeed);
    steer = JSVector.subGetNew(sum, this.vel);
    steer.limit(this.maxForce)
  }
  let separationForce = steer;
  return separationForce;
}

Vehicle.prototype.align = function (v) {
  // A vector for average of align forces
  //return steeringForce;

  let neighbordist = 50;
  let sum = new JSVector(0, 0);
  let count = 0;
  for (let other = 0; other < v.length; other++) {
    let d = this.loc.distanceSquared(v[other].loc);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(v[other].vel);
      count++;
    }
  }

  if (count > 0) {
    sum.divide(count);
    sum.normalize();
    sum.multiply(this.maxSpeed);
    let steer = JSVector.subGetNew(sum, this.vel);
    steeringForce = steer;
  } else {
    steeringForce = new JSVector(0, 0);
  }

  return steeringForce;
}

Vehicle.prototype.cohesion = function (v) {
   // A vector for average of cohesion forces
  //return cohesionForce;

  let neighbordist = 50;
  let sum = new JSVector(0, 0);
  let count = 0;
  for (let other = 0; other < v.length; other++) {
    let d = this.loc.distanceSquared(v[other].loc);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(v[other].loc);
      count++;
    }
  }

  if (count > 0) {
    sum.divide(count);
    sum.normalize();
    sum.multiply(this.maxSpeed);
    let steer = JSVector.subGetNew(sum, this.vel);
    steeringForce = steer;
  } else {
    steeringForce = new JSVector(0, 0);
  }

  return steeringForce;
}

Vehicle.prototype.seek = function(target) {
  // A vector pointing from the location to the target
  //return steeringForce;

  let desired = JSVector.subGetNew(target.loc, this.loc);
  desired.normalize();
  desired.multiply(this.maxSpeed);
  let steer = JSVector.subGetNew(desired, this.vel);
  steer.limit(this.maxForce);
  return steer;
}
//+++++++++++++++++++++++++++++++++  Flocking functions

Vehicle.prototype.update = function () {
  this.vel.add(this.acc);
  this.vel.limit(1);
  this.loc.add(this.vel);
}

Vehicle.prototype.checkEdges = function () {
  if(this.loc.x > world.canvas.width) this.loc.x = 0;
  if(this.loc.x < 0) this.loc.x = world.canvas.width;
  if(this.loc.y > world.canvas.height) this.loc.y = 0;
  if(this.loc.y < 0) this.loc.y = world.canvas.height;
}

Vehicle.prototype.render = function () {
  let ctx = world.ctx;
  ctx.save();
  ctx.translate(this.loc.x, this.loc.y);
  ctx.rotate(this.vel.getDirection() + Math.PI / 2); //offset 90 degrees
  ctx.beginPath();
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;
  ctx.moveTo(0, -this.scl);
  ctx.lineTo(-this.scl, this.scl);
  ctx.lineTo(0, 0);
  ctx.lineTo(this.scl, this.scl);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}

