function Foreground(x, y, clr) {
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
   
    if (this.loc.x >= 800) {
        this.loc.x = -800
    }
   
}
Foreground.prototype.render = function () {
    let ctx = context;
    //ctx.drawImage(background, 0, 0);

    
}