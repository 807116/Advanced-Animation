function Hero(width) {
    this.loc = new JSVector(100, 100);
    this.vel = new JSVector(0, 1);
    this.acc = new JSVector(0,0);
    this.clr = "blue";
    this.size = width;
    this.height = 5
  
}


Hero.prototype.run = function () {
    this.render();
    this.update();
    this.checkPlatform();
    //this.checkDeath();

}

Hero.prototype.update = function(){
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    //this.acc
}

Hero.prototype.checkPlatform = function(){
    for(let i=0; i<platforms.length; i++){
        // if(this.loc.y >= platforms[i].loc.y && ((this.loc.x >= platforms[i].loc.x) && (this.loc.x >= platforms[i].size+platforms[i].loc.x))){
        //     this.vel.y = 0;
        // }
        if(this.loc.y >= platforms[i].loc.y && ((this.loc.x >= platforms[i].loc.x) && (this.loc.x >= platforms[i].size+platforms[i].loc.x))){
            this.vel.y = 0;
        }
    }
}


Hero.prototype.render = function () {
    let ctx = context;
    ctx.beginPath();
    ctx.moveTo(this.loc.x, this.loc.y);
    ctx.lineTo(this.loc.x + this.size, this.loc.y);
    ctx.lineTo(this.loc.x + this.size, this.loc.y - this.height);
    ctx.lineTo(this.loc.x, this.loc.y - this.height);
    ctx.closePath();
    ctx.fillStyle = this.clr;
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.fill();
}