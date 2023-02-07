class World {
    //  Commit 1: 221109
    constructor() {
      this.cnvMain = document.getElementById("cnv1");
      this.ctxMain = this.cnvMain.getContext("2d");
      this.cnvMainLoc = new JSVector(0, 0);
      this.dims = {
        top: -1500,
        left: -2000,
        bottom: 1500,
        right: 2000,
        width: 4000,
        height: 3000,
      };
    
   
  
      
  


    }
  
    run() {
      o.run();
      // run the world in animation
      this.ctxMain.fillStyle = "rgb(0, 0, 55)"; //  color of outer border on Main canvas
      this.ctxMain.clearRect(0, 0, this.cnvMain.width, this.cnvMain.height); //  clear the canvas
      // //+++++++++++++++++++++++++++ Draw all entites
      this.ctxMain.save();
      //  move the main canvas inside of the world
      this.ctxMain.translate(-this.cnvMainLoc.x, -this.cnvMainLoc.y);
      
    



      
      this.ctxMain.restore();
  
      // // translate cnvMain according to the location of the canvas in the world
      this.ctxMain.save();
  
      this.ctxMain.translate(this.cnvMainLoc.x * (-1), this.cnvMainLoc.y * (-1));
      //bounds of the world in cnvMain
      this.ctxMain.strokeStyle = "rgba(0, 140, 240, 1)";
      this.ctxMain.beginPath();
      this.ctxMain.lineWidth = 12;
      this.ctxMain.strokeRect(
        this.dims.left,
        this.dims.top,
        this.dims.width,
        this.dims.height
      );
      this.ctxMain.stroke();
  
      this.ctxMain.restore();  
    
  
     
    }
    
    
  } //++++++++++++++++++++++++++++++  end world constructor