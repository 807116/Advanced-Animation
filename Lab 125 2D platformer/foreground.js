function Foreground(x, y, clr) {
    //x should roughly 2/3 that of the background I guess?
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(1, 0);
    this.clr = clr;
   
}
Foreground.prototype.run = function () {
    this.loc.add(this.vel);
    this.parallax();
    this.render();

    


}
Foreground.prototype.parallax = function () {
    dx = this.loc.x+400;
    if (this.loc.x >= 800) {
        this.loc.x = -800
    }
    if (dx >= 800) {
        dx = -800;
    }
}
Foreground.prototype.render = function () {
    let ctx = context;
    dx = this.loc.x+400;
    ctx.fillStyle = this.clr;
    ctx.fillRect(this.loc.x, this.loc.y, dx, this.loc.y+600);
}