//CANVAS 2:
    //Definitions similar to the first canvas variables:
    let canvas2 = document.querySelector("#canvas2");
    let ctx2 = canvas2.getContext('2d');
    let lane2 = [
        /*0*/[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        /*1*/[1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5],
        /*2*/[1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        /*3*/[1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
        /*4*/[1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
        /*5*/[1, 3, 1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 1],
        /*6*/[1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1],
        /*7*/[1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 1, 3, 1, 3, 1],
        /*8*/[1, 3, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1],
        /*9*/[1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1],
        /*10*/[1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1],
        /*11*/[1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1],
        /*12*/[1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 3, 1],
        /*13*/[1, 3, 1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1],
        /*14*/[1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1],
        /*15*/[1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 1, 3, 1],
        /*16*/[1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1],
        /*17*/[1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 1],
        /*18*/[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
        /*19*/[4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
        /*20*/[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ] 
//VARIABLES:
let walk = 0;
let wall = 1;
let poison = 2;
let points = 3;
let player = 4;
let goal = 5;
let tilesize = 16;
let playerposition;
//Two variables to help loop the results of the arrays.
    let x = 0; //C is the index of inner array.
    let y = 0; //Y is the index of outer array - Those wrote in quotes.
//Pointsystem
    let score = 0;
    let point = 1;
    let scoreStatus = document.querySelector("#score");
    scoreStatus.innerHTML = score;

    function pointScore() {
        score += point;
        scoreStatus.innerHTML = score;
    }
//Rules
    let rules = document.querySelector("#rules");

    function rule(){
        rules.innerHTML = "Jorden er ikke giftig... Men det er buskene. Støder du ind i dem skal du starte forfra.";
    }
    
//Load next lane
    function toThirdLane(){
        setTimeout(function(){
            location.href = "game3.html";
        }, 1000);
    }   



//CREATE MAZE 
//By looping the outer array, the frame to the game is created.
function maze(){
        //The funktion values if the command is true. The command is y < lane1.length.
        //If the command is true, the function create(y) will run.
        //y++ is autoincrement. It means y increases with 1 for every loop.
    for(y = 0; y < lane2.length; y++){
        create(y);
    }
}
//By looping the inner arrays, the board to the game is created.
function create(y){
        //The funktion values if the command is true. The command is x < lane1[y].length.
        //If the command is true, the function create(y,x) will run.
        //x++ is also autoincrement. It means x will increase with 1 for every loop.
    for(x = 0; x < lane2[y].length; x++){
        createlane(y,x);
    }
}
//The function createlane(y,x) handles color and size to the boardtiles. 
function createlane(y,x){
    if(lane2[y][x] == player){
        //Define playerposition as y,x where the value of y is y and the value of x is x.
        playerposition = {y:y,x:x};
        ctx2.fillStyle = "brown";
        ctx2.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
    }else if(lane2[y][x] == wall){
        ctx2.fillStyle ="black";
        ctx2.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
    }else if(lane2[y][x] == walk){
        ctx2.fillStyle = "#C6F68D";
        ctx2.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
    }else if(lane2[y][x] == goal){
        ctx2.fillStyle = "orange";
        ctx2.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
    }else if(lane2[y][x] == points){
        ctx2.fillStyle = "yellow";
        ctx2.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
    }
}

//SOUND


//MOVE
function keyup(){
    if(lane2[playerposition.y-1][playerposition.x] == 0){
        //New position of the player:
        lane2[playerposition.y-1][playerposition.x] = 4;
        //Old position of the player:
        lane2[playerposition.y][playerposition.x] = 0;
        //soundwalk();
    }else if(lane2[playerposition.y-1][playerposition.x] == 1){
        //bushsound();
        setTimeout(function(){
            alert("Vi prøver lige igen ;-)");
            location.reload();
        }, 1000);
    }else if(lane2[playerposition.y-1][playerposition.x] == 3){
        pointScore();
        lane2[playerposition.y-1][playerposition.x] = 4;
        lane2[playerposition.y][playerposition.x] = 0;
        //coinsound();
    }
}
function keydown(){
    if(lane2[playerposition.y+1][playerposition.x] == 0){
        lane2[playerposition.y+1][playerposition.x] = 4;
        lane2[playerposition.y][playerposition.x] = 0;
        //soundwalk();
    }else if(lane2[playerposition.y+1][playerposition.x] == 1){
        //bushsound();
        setTimeout(function(){
            alert("Vi prøver lige igen ;-)");
            location.reload();
        }, 1000);
    }else if(lane2[playerposition.y+1][playerposition.x] == 3){
        pointScore();
        lane2[playerposition.y+1][playerposition.x] = 4;
        lane2[playerposition.y][playerposition.x] = 0;
        //coinsound();
    }
}
function keyleft(){
    if(lane2[playerposition.y][playerposition.x-1] == 0){
        lane2[playerposition.y][playerposition.x-1] = 4;
        lane2[playerposition.y][playerposition.x] = 0;
        //soundwalk();
    }else if(lane2[playerposition.y][playerposition.x-1] == 1){
        //bushsound();
        setTimeout(function(){
            alert("Vi prøver lige igen ;-)");
            location.reload();
        }, 1000);
    }else if(lane2[playerposition.y][playerposition.x-1] == 3){
        pointScore();
        lane2[playerposition.y][playerposition.x-1] = 4;
        lane2[playerposition.y][playerposition.x] = 0;
        //coinsound();
    }
}
function keyright(){
    if(lane2[playerposition.y][playerposition.x+1] == 0){
        lane2[playerposition.y][playerposition.x+1] = 4;
        lane2[playerposition.y][playerposition.x] = 0;
        //soundwalk();
    }else if(lane2[playerposition.y][playerposition.x+1] == 1){
        //bushsound();
        setTimeout(function(){
            alert("Vi prøver lige igen ;-)");
            location.reload();
        }, 1000);
    }else if(lane2[playerposition.y][playerposition.x+1] == 5){
        //winningsound();
        alert("Tillykke du kom igennem labyrinten uden at ramme buskene!");
        toThirdLane();
    }else if(lane2[playerposition.y][playerposition.x+1] == 3){
        pointScore();
        lane2[playerposition.y][playerposition.x+1] = 4;
        lane2[playerposition.y][playerposition.x] = 0;
        //coinsound();
    }
}
function movePlayer(){
    window.addEventListener('keydown',function(event){
        switch(event.keyCode){
            case 38: //OP
                keyup();
                maze();
                break;
            case 39: //Højre
                keyright();
                maze();
                break;
            case 40: //Ned
                keydown();
                maze();
                break;
            case 37: //Venstre
                keyleft();
                maze();
                break;
            }
        })
}
maze();
movePlayer();
rule();
//window.addEventListener("load", maze);