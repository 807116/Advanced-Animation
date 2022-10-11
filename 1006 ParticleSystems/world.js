function World() {

  this.cnvMain = document.getElementById('cnv1');
  this.ctxMain = this.cnvMain.getContext('2d');
  this.cnvMini = document.getElementById('cnv2');
  this.ctxMini = this.cnvMini.getContext('2d');
  //  vector to locate canvas in the world
  this.dims = {
    top: -1500,
    left: -2000,
    bottom: 1500,
    right: 2000,
    width: 4000,
    height: 3000
  }

  this.movers = [];
  this.loadMovers(210);

  this.scaleX = this.cnvMini.width / this.dims.width;
  this.scaleY = this.cnvMini.height / this.dims.height;
  this.cnvMainLoc = new JSVector(0, 0);


  window.addEventListener("keypress", function (event) {
    switch (event.code) {
 
      case "KeyW":
        if (world.cnvMainLoc.y + 100 > world.dims.top)
          world.cnvMainLoc.y -= 20;
        break;
      case "KeyS":
        if (world.cnvMainLoc.y + world.cnvMain.height - 100 < world.dims.bottom)
          world.cnvMainLoc.y += 20;
        break;
      case "KeyA":
        if (world.cnvMainLoc.x + 100 > world.dims.left)
          world.cnvMainLoc.x -= 20;
        break;
      case "KeyD":
        if (world.cnvMainLoc.x + world.cnvMain.width - 100 < world.dims.right)
          world.cnvMainLoc.x += 20;
        break;
        break;
    }
  }, false);
}//++++++++++++++++++++++++++++++  end world constructor


// run the world in animation
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
  ctx.strokeStyle = "blue";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(this.dims.left, 0);
  ctx.lineTo(this.dims.right, 0);
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "white";
  ctx.stroke();
  //the outline
  ctx.beginPath();
  ctx.moveTo(this.dims.left, this.dims.top);
  ctx.lineTo(this.dims.right, this.dims.top);
  ctx.lineTo(this.dims.right, this.dims.bottom);
  ctx.lineTo(this.dims.left, this.dims.bottom);
  ctx.closePath();
  ctx.strokeStyle = "green";
  ctx.stroke();

  this.ctxMini.scale(this.scaleX, this.scaleY);

  

  
  for (let i = 0; i < this.movers.length; i++) {
    this.movers[i].run();
  }

  //  restore the context
  this.ctxMain.restore();
  let ctx2 = this.ctxMini;

  
  ctx2.beginPath();
  ctx2.moveTo(0, this.dims.top);
  ctx2.lineTo(0, this.dims.bottom);
  ctx2.closePath();
  ctx2.lineWidth = 5;
  ctx2.strokeStyle = "white";
  ctx2.stroke();

  ctx2.beginPath();
  ctx2.moveTo(this.dims.left, 0);
  ctx2.lineTo(this.dims.right, 0);
  ctx2.closePath();
  ctx2.lineWidth = 5;
  ctx2.strokeStyle = "blue";
  ctx2.stroke();
  //    outline box inside of cnvMini
  ctx2.beginPath();
  ctx2.moveTo(this.cnvMainLoc.x, this.cnvMainLoc.y);
  ctx2.lineTo(this.cnvMainLoc.x+this.cnvMain.width, this.cnvMainLoc.y);
  ctx2.lineTo(this.cnvMainLoc.x+this.cnvMain.width, this.cnvMainLoc.y+this.cnvMain.height);
  ctx2.lineTo(this.cnvMainLoc.x,this.cnvMainLoc.y+this.cnvMain.height)
  ctx2.closePath();
  ctx2.lineWidth = 5;
  ctx2.strokeStyle = "pink";
  ctx2.stroke();


  this.ctxMini.restore();
}

//Load mover array
World.prototype.loadMovers = function (n) {
  for (let i = 0; i < n; i++) {
    this.movers[i] = new Mover(Math.random() * this.dims.width - this.dims.width / 2, Math.random() * this.dims.height - this.dims.height / 2, 21, this.getRandomColor(), this.ctxMain, this.ctxMini);
  }
}
World.prototype.getRandomColor = function () {
  //  List of hex color values for movers
  let colors = [
    "#7102AB",
    "#ab0256",
    "#0285ab",
    "#02ab1a",
    "#ab5302"
   
  ];
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}