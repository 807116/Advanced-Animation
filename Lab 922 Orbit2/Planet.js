function Planet(x, y, d, n) {
   this.loc
   this.vel
   this.acc
   this.rad
   this.numOrbit = n
   this.orbs = [];


}

Planet.prototype.run = function () {
    this.render();
    this.update();
    this.translate();
}

Planet.prototype.render = function () {
   
}

Planet.prototype.update = function () {


}

Planet.prototype.translate = function () {
   
}