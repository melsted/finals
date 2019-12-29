//CANVAS 4:
    //Definition similar to the first canvas variables:
    let canvas4 = document.querySelector("#canvas4");
    let ctx4 = canvas4.getContext('2d');
    let lane4 = [
        /*0*/[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        /*1*/[1, 1, 1, 3, 1, 0, 0, 0, 1, 0, 1, 1, 1, 2, 3, 0, 0, 0, 1, 1, 3, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 5],
        /*2*/[1, 1, 3, 3, 3, 0, 1, 2, 1, 0, 0, 0, 1, 3, 0, 1, 1, 0, 0, 1, 1, 3, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
        /*3*/[1, 3, 3, 3, 1, 0, 1, 0, 3, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
        /*4*/[1, 1, 3, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 3, 0, 1, 0, 0, 0, 1, 0, 1],
        /*5*/[1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 3, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 2, 2, 1, 1, 0, 3, 1, 0, 1, 0, 0, 1],
        /*6*/[1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 2, 1, 0, 0, 1, 0, 2, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1],
        /*7*/[1, 0, 0, 1, 1, 1, 2, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
        /*8*/[1, 1, 3, 3, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 3, 2, 1, 0, 1],
        /*9*/[1, 1, 1, 2, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 2, 1, 3, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
        /*10*/[1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 2, 1, 0, 0, 1, 0, 0, 1, 2, 0, 0, 1, 0, 1, 3, 0, 1, 1, 0, 1, 0, 1, 1, 1],
        /*11*/[1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
        /*12*/[1, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 1, 3, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
        /*13*/[1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 3, 0, 2, 1, 0, 1, 0, 2, 1, 0, 0, 1, 0, 0, 1, 0, 1],
        /*14*/[1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 3, 1, 0, 0, 1, 1],
        /*15*/[1, 2, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 3, 3, 3, 1, 0, 1, 1],
        /*16*/[1, 1, 0, 0, 1, 0, 0, 1, 2, 3, 1, 1, 3, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 3 ,1, 1, 1, 1, 3, 1, 0, 3, 0, 1],
        /*17*/[1, 1, 1, 3, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 3, 1, 3, 0, 0, 1, 0, 0, 1, 0, 1],
        /*18*/[1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 3, 1, 1, 2, 1, 0, 1, 3, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
        /*19*/[1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 2, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1],
        /*20*/[1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
        /*21*/[1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 2, 0, 1, 1],
        /*22*/[1, 1, 0, 0, 1, 0, 2, 1, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 3, 1, 0, 0, 1, 0, 0, 1],
        /*23*/[1, 3, 0, 1, 1, 1, 3, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 3, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
        /*24*/[1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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
        rules.innerHTML = "Hjælp Snehvide med at plukke æbler til hendes æbletærte, men pas på at du kun plukker de grønne æbler! De røde æbler er forgiftet og vil sende Snehvide i en lang søvnforbandelse.";
    }

//CREATE MAZE
//By looping the outer array, the frame to the game is created.
function maze(){
    //The funktion values if the command is true. The command is y < lane1.length.
    //If the command is true, the function create(y) will run.
    //y++ is autoincrement. It means y increases with 1 for every loop.
for(y = 0; y < lane4.length; y++){
    create(y);
}
}
//By looping the inner arrays, the board to the game is created.
function create(y){
    //The funktion values if the command is true. The command is x < lane1[y].length.
    //If the command is true, the function create(y,x) will run.
    //x++ is also autoincrement. It means x will increase with 1 for every loop.
for(x = 0; x < lane4[y].length; x++){
    createlane(y,x);
}
}
//The function createlane(y,x) handles color and size to the boardtiles. 
function createlane(y,x){
if(lane4[y][x] == player){
    //Define playerposition as y,x where the value of y is y and the value of x is x.
    playerposition = {y:y,x:x};
    ctx4.fillStyle = "brown";
    ctx4.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
}else if(lane4[y][x] == wall){
    ctx4.fillStyle ="black";
    ctx4.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
}else if(lane4[y][x] == walk){
    ctx4.fillStyle = "#C6F68D";
    ctx4.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
}else if(lane4[y][x] == goal){
    ctx4.fillStyle = "orange";
    ctx4.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
}else if(lane4[y][x] == poison){
    ctx4.fillStyle = "red";
    ctx4.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
}else if(lane4[y][x] == points){
    ctx4.fillStyle = "yellow";
    ctx4.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
}
}


//SOUND

//MOVE
function keyup(){
if(lane4[playerposition.y-1][playerposition.x] == 0){
    //New position of the player:
    lane4[playerposition.y-1][playerposition.x] = 4;
    //Old position of the player:
    lane4[playerposition.y][playerposition.x] = 0;
    //soundwalk();
}else if(lane4[playerposition.y-1][playerposition.x] == 1){
    //treesound();
}else if(lane4[playerposition.y-1][playerposition.x] == 3){
    pointScore();
    lane4[playerposition.y-1][playerposition.x] = 4;
    lane4[playerposition.y][playerposition.x] = 0;
    //coinsound();
}else if(lane4[playerposition.y-1][playerposition.x] == 2){
    //applebitesound();
    setTimeout(function(){
        alert("Snehvide fik fat i et giftigt æble. Nu er hun ramt af en søvnforbandelse. Væk snehvide og prøv igen :-)");
        location.reload();
    }, 0);
}
}
function keydown(){
if(lane4[playerposition.y+1][playerposition.x] == 0){
    lane4[playerposition.y+1][playerposition.x] = 4;
    lane4[playerposition.y][playerposition.x] = 0;
    //soundwalk();
}else if(lane4[playerposition.y+1][playerposition.x] == 1){
    //treesound();
}else if(lane4[playerposition.y+1][playerposition.x] == 3){
    pointScore();
    lane4[playerposition.y+1][playerposition.x] = 4;
    lane4[playerposition.y][playerposition.x] = 0;
    //coinsound();
}else if(lane4[playerposition.y+1][playerposition.x] == 2){
    //applebitesound();
    setTimeout(function(){
        alert("Snehvide fik fat i et giftigt æble. Nu er hun ramt af en søvnforbandelse. Væk snehvide og prøv igen :-)");
        location.reload();
    }, 0);
}
}
function keyleft(){
if(lane4[playerposition.y][playerposition.x-1] == 0){
    lane4[playerposition.y][playerposition.x-1] = 4;
    lane4[playerposition.y][playerposition.x] = 0;
    //soundwalk();
}else if(lane4[playerposition.y][playerposition.x-1] == 1){
    //treesound();
}else if(lane4[playerposition.y][playerposition.x-1] == 3){
    pointScore();
    lane4[playerposition.y][playerposition.x-1] = 4;
    lane4[playerposition.y][playerposition.x] = 0;
    //coinsound();
}else if(lane4[playerposition.y][playerposition.x-1] == 2){
    //applebitesound();
    setTimeout(function(){
        alert("Snehvide fik fat i et giftigt æble. Nu er hun ramt af en søvnforbandelse. Væk snehvide og prøv igen :-)");
        location.reload();
    }, 0);
}
}
function keyright(){
if(lane4[playerposition.y][playerposition.x+1] == 0){
    lane4[playerposition.y][playerposition.x+1] = 4;
    lane4[playerposition.y][playerposition.x] = 0;
    //soundwalk();
}else if(lane4[playerposition.y][playerposition.x+1] == 1){
    //treesound();
}else if(lane4[playerposition.y][playerposition.x+1] == 3){
    pointScore();
    lane4[playerposition.y][playerposition.x+1] = 4;
    lane4[playerposition.y][playerposition.x] = 0;
    //coinsound();
}else if(lane4[playerposition.y][playerposition.x+1] == 2){
    //applebitesound();
    setTimeout(function(){
        alert("Snehvide fik fat i et giftigt æble. Nu er hun ramt af en søvnforbandelse. Væk snehvide og prøv igen :-)");
        location.reload();
    }, 0);
}else if(lane4[playerposition.y][playerposition.x+1] == 5){
    if(score >= 30){
        //winningsound();
        alert("Sådan! Nu kan Snehvide bage sin æbletærte uden at blive ramt af søvnforbandelsen.");
        toSecondLane();
    }else{
        alert("Snehvide skal bruge mindst 30 æbler til sin æbletærte - Du må ud i skoven og plukke lidt flere æbler :-)");
    }
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