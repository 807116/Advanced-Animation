function Obj(width) {
    this.loc = new JSVector(100, 100);
    this.ctxMain = ctxMain
    this.clr = "blue";
    this.size = width;
  
  
}


Obj.prototype.run = function () {
    this.render();



}



Obj.prototype.render = function () {
    let ctxMain = context;
    ctxMain.beginPath();
    ctxMain.moveTo(this.loc.x, this.loc.y);
    ctxMain.lineTo(this.loc.x + this.size, this.loc.y);
    ctxMain.lineTo(this.loc.x + this.size, this.loc.y - this.height);
    ctxMain.lineTo(this.loc.x, this.loc.y - this.height);
    ctxMain.closePath();
    ctxMain.fillStyle = this.clr;
    ctxMain.strokeStyle = "blue";
    ctxMain.stroke();
    ctxMain.fill();
}