// A Snake Example
function World(){
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    for( let i = 0; i < numSnakes; i++){
        let loc = new JSVector(getRandomInt(50, this.canvas.width-50), getRandomInt(50,this.canvas.offsetHeight-50));
        snakes[i] = new Snake(/*loc,*/10, 30);
    }
   
}

World.prototype.run = function(){
    for(let i = 0; i<snakes.length; i++){
        snakes[i].run();
    }
    
}
