//CANVAS 3:
    //Definitions similar to the first canvas variables:
    let canvas3 = document.querySelector("#canvas3");
    let ctx3 = canvas3.getContext('2d');
    let lane3 =[
        /*0*/[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        /*1*/[1, 2, 0, 0, 0, 1, 0, 0, 0, 3, 3, 1, 3, 5],
        /*2*/[1, 3, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 3, 1],
        /*3*/[1, 3, 0, 1, 0, 1, 0, 3, 3, 1, 0, 1, 0, 1],
        /*4*/[1, 3, 0, 1, 0, 1, 1, 1, 0, 1, 3, 3, 0, 1],
        /*5*/[1, 3, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1],
        /*6*/[1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        /*7*/[1, 0, 1, 3, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
        /*8*/[1, 0, 1, 1, 1, 2, 1, 2, 0, 0, 0, 1, 0, 1],
        /*9*/[1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
        /*10*/[1, 1, 1, 1, 1, 3, 0, 0, 1, 3, 3, 3, 0, 1],
        /*11*/[1, 0, 0, 0, 1, 1, 1, 0, 1, 3, 1, 1, 1, 1],
        /*12*/[1, 0, 1, 0, 1, 0, 0, 0, 0, 3, 1, 0, 3, 1],
        /*13*/[1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
        /*14*/[4, 0, 1, 3, 3, 3, 1, 0, 0, 0, 0, 0, 2, 1],
        /*15*/[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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
    let x = 0; //X is the index of inner array.
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
        rules.innerHTML = "Nu har den frække drillenisse været på spil igen... Denne her gang har han taget alle julemandens nissehuer og gemt for ham. Kan du hjælpe julemanden med at få mindst 20 nissehuer tilbage?";
    }
    
//Load next lane
    function toFourthLane(){
        setTimeout(function(){
            location.href = "game4.html";
        }, 1000);
    }



//CREATE MAZE
//By looping the outer array, the frame to the game is created.
function maze(){
        //The funktion values if the command is true. The command is y < lane1.length.
        //If the command is true, the function create(y) will run.
        //y++ is autoincrement. It means y increases with 1 for every loop.
    for(y = 0; y < lane3.length; y++){
        create(y);
    }
}
//By looping the inner arrays, the board to the game is created.
function create(y){
        //The funktion values if the command is true. The command is x < lane1[y].length.
        //If the command is true, the function create(y,x) will run.
        //x++ is also autoincrement. It means x will increase with 1 for every loop.
    for(x = 0; x < lane3[y].length; x++){
        createlane(y,x);
    }
}
//The function createlane(y,x) handles color and size to the boardtiles. 
function createlane(y,x){
    if(lane3[y][x] == player){
        //Define playerposition as y,x where the value of y is y and the value of x is x.
        playerposition = {y:y,x:x};
        ctx3.fillStyle = "brown";
        ctx3.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
    }else if(lane3[y][x] == wall){
        ctx3.fillStyle ="black";
        ctx3.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
    }else if(lane3[y][x] == walk){
        ctx3.fillStyle = "#C6F68D";
        ctx3.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
    }else if(lane3[y][x] == goal){
        ctx3.fillStyle = "orange";
        ctx3.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
    }else if(lane3[y][x] == poison){
        ctx3.fillStyle = "red";
        ctx3.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
    }else if(lane3[y][x] == points){
        ctx3.fillStyle = "yellow";
        ctx3.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
    }
}


//SOUND


//MOVE
function keyup(){
    if(lane3[playerposition.y-1][playerposition.x] == 0){
        //New position of the player:
        lane3[playerposition.y-1][playerposition.x] = 4;
        //Old position of the player:
        lane3[playerposition.y][playerposition.x] = 0;
        //soundwalk();
    }else if(lane3[playerposition.y-1][playerposition.x] == 1){
        //bushsound();
    }else if(lane3[playerposition.y-1][playerposition.x] == 3){
        pointScore();
        lane3[playerposition.y-1][playerposition.x] = 4;
        lane3[playerposition.y][playerposition.x] = 0;
        //coinsound();
    }else if(lane3[playerposition.y-1][playerposition.x] == 2){
        //magicsound();
        window.setTimeout(function(){
            location.reload();
        }, 0);
    }
}
function keydown(){
    if(lane3[playerposition.y+1][playerposition.x] == 0){
        lane3[playerposition.y+1][playerposition.x] = 4;
        lane3[playerposition.y][playerposition.x] = 0;
        //soundwalk();
    }else if(lane3[playerposition.y+1][playerposition.x] == 1){
        //bushsound();
    }else if(lane3[playerposition.y+1][playerposition.x] == 3){
        pointScore();
        lane3[playerposition.y+1][playerposition.x] = 4;
        lane3[playerposition.y][playerposition.x] = 0;
        //coinsound();
    }
}
function keyleft(){
    if(lane3[playerposition.y][playerposition.x-1] == 0){
        lane3[playerposition.y][playerposition.x-1] = 4;
        lane3[playerposition.y][playerposition.x] = 0;
        //soundwalk();
    }else if(lane3[playerposition.y][playerposition.x-1] == 1){
        //bushsound();
    }else if(lane3[playerposition.y][playerposition.x-1] == 3){
        pointScore();
        lane3[playerposition.y][playerposition.x-1] = 4;
        lane3[playerposition.y][playerposition.x] = 0;
        //coinsound();
    }else if(lane3[playerposition.y][playerposition.x-1] == 2){
        //magicsound();
        window.setTimeout(function(){
            location.reload();
        }, 0);
    }
}
function keyright(){
    if(lane3[playerposition.y][playerposition.x+1] == 0){
        lane3[playerposition.y][playerposition.x+1] = 4;
        lane3[playerposition.y][playerposition.x] = 0;
        //soundwalk();
    }else if(lane3[playerposition.y][playerposition.x+1] == 1){
        //bushsound();
    }else if(lane3[playerposition.y][playerposition.x+1] == 5){
        if(score >= 20){
            //winningsound();
            alert("Yay julemanden fik fundet alle nissehuerne til sin familie, takket været dig! :-) Godt arbejde!");
            toFourthLane();
        }else{
            alert("Julemanden skal samle mindst 20 huer, før alle nissebørnene kan få nissehuer på hovedet igen :-)");
        }
    }else if(lane3[playerposition.y][playerposition.x+1] == 3){
        pointScore();
        lane3[playerposition.y][playerposition.x+1] = 4;
        lane3[playerposition.y][playerposition.x] = 0;
        //coinsound();
    }else if(lane3[playerposition.y][playerposition.x+1] == 2){
        //magicsound();
        window.setTimeout(function(){
            location.reload();
        }, 0);
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