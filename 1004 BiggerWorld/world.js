function World() {

  this.cnvMain = document.getElementById('cnv1');
  this.ctxMain = this.cnvMain.getContext('2d');
  this.cnvMini = document.getElementById('cnv2');
  this.ctxMini = this.cnvMini.getContext('2d');
  // vector to locate canvas in the world
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
 
  //Step 1::reduce world to fit inside of mini Canvas
  this.scaleX = this.cnvMini.width / this.dims.width;
  this.scaleY = this.cnvMini.height / this.dims.height;
  this.cnvMainLoc = new JSVector(0, 0);
 
  // add an event handler such that the a, s, w, d keys
  // will reposition the canvas within the world.
  window.addEventListener("keypress", function (event) {
  switch (event.code) {
  // What is "this" inside of the listener????????????????????
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
 }//++++++++++++++++++++++++++++++ end world constructor
 
 
 // run the world in animation
 World.prototype.run = function () {
  // Step Two: Move cnvMain in the world and run movers ########################################################
  // Clear the rectangle in the main Canvas
  this.ctxMain.clearRect(0, 0, this.cnvMain.width, this.cnvMain.height);
  this.ctxMini.clearRect(0, 0, this.cnvMini.width, this.cnvMini.height);
  this.ctxMain.save();
  this.ctxMini.save();
  // move the main canvas inside of the world
  this.ctxMain.translate(-this.cnvMainLoc.x, -this.cnvMainLoc.y);
  this.ctxMini.translate(this.cnvMini.width / 2, this.cnvMini.height / 2);
 
  let ctx = this.ctxMain;
 
  ctx.beginPath();//draws a red line from the very top to the bottom of the main canvas
  ctx.moveTo(0, this.dims.top);
  ctx.lineTo(0, this.dims.bottom);
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "blue";
  ctx.stroke();
 
  ctx.beginPath();//draws a centered line from the far left to the far right
  ctx.moveTo(this.dims.left, 0);
  ctx.lineTo(this.dims.right, 0);
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "white";
  ctx.stroke();
 
  // scale the world to fit into the miniCanvas
  this.ctxMini.scale(this.scaleX, this.scaleY);
 
  // center the world inside of the miniCanvas
 
  // run the movers in both canvas
  for (let i = 0; i < this.movers.length; i++) {
  this.movers[i].run();
  }
 
  // restore the context
  this.ctxMain.restore();
  let ctx2 = this.ctxMini;
  // Step Three: Draw the mainCanv and axes in the miniCanv ########################################################
  // scale cnvMini to contain the entire world
  //done above
  // center the world in miniCnv
  //done above
  // draw x and y axes on miniMap
  ctx2.beginPath();
  ctx2.moveTo(0, this.dims.top);
  ctx2.lineTo(0, this.dims.bottom);
  ctx2.closePath();
  ctx2.lineWidth = 5;
  ctx2.strokeStyle = "white";
  ctx2.stroke();
 
  ctx2.beginPath();//draws a centered line from the far left to the far right
  ctx2.moveTo(this.dims.left, 0);
  ctx2.lineTo(this.dims.right, 0);
  ctx2.closePath();
  ctx2.lineWidth = 5;
  ctx2.strokeStyle = "blue";
  ctx2.stroke();
  // outline box inside of cnvMini
  
 
 
  this.ctxMini.restore();
 }
 
 //Load mover array
 World.prototype.loadMovers = function (n) {
  for (let i = 0; i < n; i++) {
  this.movers[i] = new Mover(Math.random() * this.dims.width - this.dims.width / 2, Math.random() * this.dims.height - this.dims.height / 2, 21, this.getRandomColor(), this.ctxMain, this.ctxMini);
  }
 }
 World.prototype.getRandomColor = function () {
  // List of hex color values for movers
  let colors = [
  "#7102AB",
  "#ab0256",
  "#0285ab",
  "#02ab1a"
  ];
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
 }