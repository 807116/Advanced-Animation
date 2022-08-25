var BallFactory = function(r){
    
    
    for (var i = 0; i < r; ++i) {
        balls[i] = new Ball();
    }
    return balls;
    
    // var ball = {
    //     rad:r
    // }
    // return ball;
}

function Ball(r){
    this.rad = r;
    // this.diam = function(){
    //     return 2* this.rad();
    // }
}

Ball.prototype.diam = function(){
    return 2*this.rad;
}

class Ball{
    constructor(r){
        this.rad = r;

    }
    diam(){
        return 2*this.rad;
    }
}