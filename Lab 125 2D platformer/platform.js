function Platform(width) {
    this.loc = new JSVector(Math.random() * (canvas.width), Math.random() * (500-300)+300);
 
    this.clr = "black";
    this.size = width;
    this.height = 10;
  
}
Platform.prototype.run = function () {
    this.render();

}


Platform.prototype.render = function () {
    ctx.beginPath();
    ctx.moveTo(this.loc.x, this.loc.y);
    ctx.lineTo(this.loc.x + this.size, this.loc.y);
    ctx.lineTo(this.loc.x + this.size, this.loc.y + this.height);
    ctx.lineTo(this.loc.x, this.loc.y + this.height);
    ctx.closePath();
    ctx.fillStyle = this.clr;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
}