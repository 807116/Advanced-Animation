function GameArea(){
//  Wrapper Div
this.wrapperDiv = document.getElementById("wrapperDiv");
this.wrapperDiv.setAttribute("style", " background-color:yellow; border: 5px solid black; width:1300px; height:800px;");
//left tile menu div
this.tileMenuDivLeft = document.createElement("div");
this.wrapperDiv.appendChild(this.tileMenuDivLeft)
this.tileMenuDivLeft.setAttribute("style", "background-color:#FFFFFF; width:100px; height:800px;float:left;");
// create tileMenuDiv
this.tileMenuDiv = document.createElement("div");
this.wrapperDiv.appendChild(this.tileMenuDiv)
this.tileMenuDiv.setAttribute("style", " background-color:#FFFFFF; width:1100px; height:100px;float:left;");
//right tile menu div
this.tileMenuDivRight = document.createElement("div");
this.wrapperDiv.appendChild(this.tileMenuDivRight)
this.tileMenuDivRight.setAttribute("style", " background-color:#FFFFFF; width:100px; height:800px;float:right;");

// create canvasDiv
this.canvasDiv = document.createElement("div");
this.wrapperDiv.appendChild(this.canvasDiv)
this.canvasDiv.setAttribute("style", " background-color:pink; width:1100px; height:700px;float:left;");

// place canvas in div and style
this.canvasDiv.appendChild(canvas);
//  create tiles for tile menu
this.tiles = [];
this.tileText = [];
//top tiles
for (let i = 0; i < 6; i++) {
  this.tiles[i] = document.createElement("div");
  this.tileMenuDiv.appendChild(this.tiles[i]);
  this.tiles[i].setAttribute("class", "tile");
  this.tileText[i] = document.createTextNode("Tile " + (i + 1) + "");
  //this.t1Text.style.padding = "10px";
  this.tiles[i].appendChild(this.tileText[i]);
}


for (let i = 6; i < 12; i++) {
  this.tiles[i] = document.createElement("div");
  this.tileMenuDivRight.appendChild(this.tiles[i]);
  this.tiles[i].setAttribute("class", "tile");
  this.tileText[i] = document.createTextNode("Tile " + (i + 1) + "");
  //this.t1Text.style.padding = "10px";
  this.tiles[i].appendChild(this.tileText[i]);
}
this.tilesL = [];
this.tileTextL = [];
for (let i = 12; i < 18; i++) {
  this.tilesL[i] = document.createElement("div");
  this.tileMenuDivL.appendChild(this.tilesL[i]);
  this.tilesL[i].setAttribute("class", "tileV");
  this.tileTextL[i] = document.createTextNode("Tile " + (i + 1) + "");
  this.tilesL[i].appendChild(this.tileTextL[i]);
}
  
  

    //  Add listeners to tile objects
    for(let i = 0; i < this.tiles.length; i++){
        this.tiles[i].addEventListener('mouseover', // mouseover is the name of an event
                                        function(){//  JavaScript has anonymous functions
                                          //  'this' is the listener target object: tile
                                          //  'this' does not refer to the PlayArea object
                                          this.style.backgroundColor = "#ac8fe3"
                                        },
                                        false);
        this.tiles[i].addEventListener('mouseout', function(){
            this.style.backgroundColor = "#d5dee0"
          },false);
        this.tiles[i].addEventListener('click', function(){
            game.gamePaused = !game.gamePaused;
            console.log("Mouse Clicked");
          },false);
    }


}
