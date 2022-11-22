function World() {
  this.cnvMain = document.getElementById('cnv1');
  this.ctxMain = this.cnvMain.getContext('2d');
  this.cnvMini = document.getElementById('cnv2');
  this.ctxMini = this.cnvMini.getContext('2d');
  this.dims = {
    top: -1500,
    left: -2000,
    bottom: 1500,
    right: 2000,
    width: 4000,
    height: 3000
  }
  this.particleSystems = [];
  this.loadSystems(50);
  this.scaleX = this.cnvMini.width / this.dims.width;
  this.scaleY = this.cnvMini.height / this.dims.height;
  this.cnvMainLoc = new JSVector(0, 0);
  window.addEventListener("keypress", function (event) {
    switch (event.code) {
      case "KeyW":
        if (world.cnvMainLoc.y + 100 > (world.dims.top + world.cnvMini.height/2))
          world.cnvMainLoc.y -= 10;
        break;
      case "KeyS":
        if (world.cnvMainLoc.y + world.cnvMain.height - 100 < (world.dims.bottom - world.cnvMini.height/2))
          world.cnvMainLoc.y += 10;
        break;
      case "KeyA":
        if (world.cnvMainLoc.x + 100 > (world.dims.left - world.dims.left/20))
          world.cnvMainLoc.x -= 10;
        break;
      case "KeyD":
        if (world.cnvMainLoc.x + world.cnvMain.width - 100 < (world.dims.right - world.dims.right/20))
          world.cnvMainLoc.x += 10;
        break;s
      break;
    }
  }, false);

  this.cnvMain.addEventListener("click", function(event){
    let particleLoc = new JSVector(event.offsetX, event.offsetY);
    particleLoc.add(world.cnvMainLoc);
    world.particleSystems.push(new particleSystems(particleLoc.x, particleLoc.y, world.ctxMain, world.ctxMini));
    
  }, false);

}

World.prototype.run = function () {
  this.ctxMain.clearRect(0, 0, this.cnvMain.width, this.cnvMain.height);
  this.ctxMini.clearRect(0, 0, this.cnvMini.width, this.cnvMini.height);
  this.ctxMain.save();
  this.ctxMini.save();
  this.ctxMain.translate(-this.cnvMainLoc.x, -this.cnvMainLoc.y);
  this.ctxMini.translate(this.cnvMini.width / 2, this.cnvMini.height / 2);
  let ctx = this.ctxMain;

  ctx.beginPath();
  ctx.moveTo(0, this.dims.top);
  ctx.lineTo(0, this.dims.bottom);
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "red";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(this.dims.left, 0);
  ctx.lineTo(this.dims.right, 0);
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "red";
  ctx.stroke();
  
  this.ctxMini.scale(this.scaleX, this.scaleY);

  for (let i = 0; i < this.particleSystems.length; i++) {
    this.particleSystems[i].run();
  }

  this.ctxMain.restore();
  let ctx2 = this.ctxMini;
  ctx2.beginPath();
  ctx2.moveTo(0, this.dims.top);
  ctx2.lineTo(0, this.dims.bottom);
  ctx2.closePath();
  ctx2.lineWidth = 5;
  ctx2.strokeStyle = "red";
  ctx2.stroke();

  ctx2.beginPath();
  ctx2.moveTo(this.dims.left, 0);
  ctx2.lineTo(this.dims.right, 0);
  ctx2.closePath();
  ctx2.lineWidth = 5;
  ctx2.strokeStyle = "red";
  ctx2.stroke();

  ctx2.beginPath();
  ctx2.rect(this.cnvMainLoc.x, this.cnvMainLoc.y, this.cnvMain.width, this.cnvMain.height);
  ctx2.strokeStyle = "blue";
  ctx2.stroke();

  this.ctxMini.restore();
}

World.prototype.loadSystems = function (n) {
  for (let i = 0; i < n; i++) {
    this.particleSystems[i] = new ParticleSystem(Math.random() * this.dims.width - this.dims.width / 2, Math.random() * this.dims.height - this.dims.height / 2, 21, "green", this.ctxMain, this.ctxMini);
  }
}

