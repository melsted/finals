//CANVAS 1:    
//Definition of the game canvas by queryselector to the canvas id:
    let canvas1 = document.querySelector("#canvas1");
//Definition of the canvas context (ctx):
    let ctx1 = canvas1.getContext('2d');
//Canvas grids made by arrays in an array:
    let lane1 = [
        /*0*/[0, 1, 0, 1, 1, 7, 2, 1, 0, 1, 2, 6, 1, 1, 0, 0, 0],
        /*1*/[1, 0, 1, 1, 0, 8, 1, 1, 1, 1, 1, 3, 0, 1, 0, 1, 0],
        /*2*/[0, 1, 1, 2, 0, 1, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 5],
        /*3*/[1, 1, 2, 1, 0, 1, 0, 6, 7, 9, 0, 1, 0, 1, 0, 1, 1],
        /*4*/[1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        /*5*/[9, 7, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 8, 9],
        /*6*/[2, 1, 1, 0, 0, 1, 1, 3, 0, 7, 1, 1, 0, 0, 1, 1, 2],
        /*7*/[1, 1, 2, 8, 1, 1, 9, 2, 1, 2, 6, 1, 1, 7, 2, 1, 1],
        /*8*/[0, 1, 1, 3, 0, 0, 0, 1, 1, 1, 0, 0, 0, 3, 1, 1, 0],
        /*9*/[1, 1, 2, 3, 1, 1, 3, 2, 1, 2, 8, 1, 1, 9, 2, 1, 1],
        /*10*/[2, 1, 1, 0, 0, 1, 1, 6, 0, 3, 1, 1, 0, 0, 1, 1, 2],
        /*11*/[6, 8, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 3, 7],
        /*12*/[1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        /*13*/[1, 1, 0, 1, 0, 1, 0, 7, 7, 9, 0, 1, 0, 1, 2, 1, 1],
        /*14*/[4, 1, 0, 1, 0, 1, 1, 2, 1, 2, 1, 1, 0, 2, 1, 1, 0],
        /*15*/[0, 1, 0, 1, 0, 9, 1, 1, 1, 1, 1, 6, 0, 1, 1, 0, 1],
        /*16*/[0, 0, 0, 1, 1, 3, 2, 1, 0, 1, 2, 8, 1, 1, 0, 1, 0]
    ]
//VARIABLES:
    let walk = 0;
    let wall = 1;
    let poison = 2;
    let player = 4;
    let goal = 5;
    let tilesize = 25;
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
            rules.innerHTML = "The little christmastree is searcing the attic for its christmasdecorations. Can you help the little christmastree find the decorations, using the arrow keys? You need to find at least 28 pieces of decoration, before its possible to reach for the star. Be aware of the axes, if the little christmastree hit those, it will be chopped into splinters.";
        }    
    //Load next lane
        function toSecondLane(){
            setTimeout(function(){
                location.href = "game2.html";
            }, 1000);
        }
    //Get graphics
        let christmastree = new Image();
            christmastree.src = 'tiles/christmastree.png';
        let christmasballRed = new Image();
            christmasballRed.src = 'tiles/christmasballred.png';
        let christmasballBlue = new Image();
            christmasballBlue.src = 'tiles/christmasballblue.png';
        let christmasHeart = new Image();
            christmasHeart.src = 'tiles/christmasheart.png';
        let candycane = new Image();
            candycane.src = 'tiles/candycane.png';
        let bulbs = new Image();
            bulbs.src = 'tiles/bulbs.png';
        let box = new Image();
            box.src = 'tiles/paperbox.png';
        let axe = new Image();
            axe.src = 'tiles/axe.png';
        let star = new Image();
            star.src = 'tiles/star.png';
        

//CREATE MAZE 1
//By looping the outer array, the frame to the game is created.
    function maze(){
            //The funktion values if the command is true. The command is y < lane1.length.
            //If the command is true, the function create(y) will run.
            //y++ is autoincrement. It means y increases with 1 for every loop.
        for(y = 0; y < lane1.length; y++){
            create(y);
        }
    }
//By looping the inner arrays, the board to the game is created.
    function create(y){
            //The funktion values if the command is true. The command is x < lane1[y].length.
            //If the command is true, the function create(y,x) will run.
            //x++ is also autoincrement. It means x will increase with 1 for every loop.
        for(x = 0; x < lane1[y].length; x++){
            createlane(y,x);
        }
    }
//The function createlane(y,x) handles color and size to the boardtiles. 
    function createlane(y,x){
        if(lane1[y][x] == player){
            //Define playerposition as y,x where the value of y is y and the value of x is x.
            playerposition = {y:y,x:x};
            ctx1.fillStyle = "#fff7f5";
            ctx1.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
            ctx1.drawImage(christmastree, x*tilesize, y*tilesize, tilesize, tilesize);
        }else if(lane1[y][x] == walk){
            ctx1.fillStyle = "#fff7f5";
            ctx1.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
        }else if(lane1[y][x] == 6){
            ctx1.fillStyle ="#fff7f5";
            ctx1.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
            ctx1.drawImage(christmasballRed, x*tilesize, y*tilesize, tilesize, tilesize);
        }else if(lane1[y][x] == 7){
            ctx1.fillStyle ="#fff7f5";
            ctx1.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
            ctx1.drawImage(christmasballBlue, x*tilesize, y*tilesize, tilesize, tilesize);
        }else if(lane1[y][x] == 8){
            ctx1.fillStyle ="#fff7f5";
            ctx1.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
            ctx1.drawImage(christmasHeart, x*tilesize, y*tilesize, tilesize, tilesize);
        }else if(lane1[y][x] == 9){
            ctx1.fillStyle ="#fff7f5";
            ctx1.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
            ctx1.drawImage(candycane, x*tilesize, y*tilesize, tilesize, tilesize);
        }else if(lane1[y][x] == 3){
            ctx1.fillStyle ="#fff7f5";
            ctx1.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
            ctx1.drawImage(bulbs, x*tilesize, y*tilesize, tilesize, tilesize);
        }else if(lane1[y][x] == 1){
            ctx1.fillStyle ="#fff7f5";
            ctx1.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
            ctx1.drawImage(box, x*tilesize, y*tilesize, tilesize, tilesize);
        }else if(lane1[y][x] == 2){
            ctx1.fillStyle ="#fff7f5";
            ctx1.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
            ctx1.drawImage(axe, x*tilesize, y*tilesize, tilesize, tilesize);
        }else if(lane1[y][x] == goal){
            ctx1.fillStyle ="#fff7f5";
            ctx1.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
            ctx1.drawImage(star, x*tilesize, y*tilesize, tilesize, tilesize);
        }
    }


//SOUND
    function jinglebells(){
        let jinglebells = new Audio('sound/sleighbells.wav');
        jinglebells.play();
    }
    function axechop(){
        let axechop = new Audio('sound/axes.wav');
        axechop.play();
    }
    function decorationPoint(){
        let decorationPoint = new Audio('sound/point.wav');
        decorationPoint.play();
    }
    function winning(){
        let winning = new Audio('sound/winwin.wav');
        winning.play();
    }

//MOVE
    function keyup(){
        if(lane1[playerposition.y-1][playerposition.x] == 0){
            //New position of the player:
            lane1[playerposition.y-1][playerposition.x] = 4;
            //Old position of the player:
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
        }else if(lane1[playerposition.y-1][playerposition.x] == 1){
            //treesound();
        }else if(lane1[playerposition.y-1][playerposition.x] == 3){
            pointScore();
            lane1[playerposition.y-1][playerposition.x] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y-1][playerposition.x] == 6){
            pointScore();
            lane1[playerposition.y-1][playerposition.x] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y-1][playerposition.x] == 7){
            pointScore();
            lane1[playerposition.y-1][playerposition.x] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y-1][playerposition.x] == 8){
            pointScore();
            lane1[playerposition.y-1][playerposition.x] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y-1][playerposition.x] == 9){
            pointScore();
            lane1[playerposition.y-1][playerposition.x] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y-1][playerposition.x] == 2){
            axechop();
            setTimeout(function(){
                alert("OH NO! The little christmastree got chopped into splinters! You have to start over.");
                location.reload();
            }, 500);
        }
    }
    function keydown(){
        if(lane1[playerposition.y+1][playerposition.x] == 0){
            lane1[playerposition.y+1][playerposition.x] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
        }else if(lane1[playerposition.y+1][playerposition.x] == 5){
            if(score >= 28){
                winning();
                setTimeout(function(){
                    alert("WOW! Well done! The little christmastree look amazing with all its decorations!");
                    toSecondLane();
                }, 500);
            }else{
                alert("The little christmastree would like at least 28 pieces of decoration before the star is putted on top :-)");
            }
        }else if(lane1[playerposition.y+1][playerposition.x] == 1){
            //treesound();
        }else if(lane1[playerposition.y+1][playerposition.x] == 3){
            pointScore();
            lane1[playerposition.y+1][playerposition.x] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y+1][playerposition.x] == 6){
            pointScore();
            lane1[playerposition.y+1][playerposition.x] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y+1][playerposition.x] == 7){
            pointScore();
            lane1[playerposition.y+1][playerposition.x] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y+1][playerposition.x] == 8){
            pointScore();
            lane1[playerposition.y+1][playerposition.x] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y+1][playerposition.x] == 9){
            pointScore();
            lane1[playerposition.y+1][playerposition.x] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y+1][playerposition.x] == 2){
            axechop();
            setTimeout(function(){
                alert("OH NO! The little christmastree got chopped into splinters! You have to start over.");
                location.reload();
            }, 500);
        }
    }
    function keyleft(){
        if(lane1[playerposition.y][playerposition.x-1] == 0){
            lane1[playerposition.y][playerposition.x-1] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
        }else if(lane1[playerposition.y][playerposition.x-1] == 1){
            //treesound();
        }else if(lane1[playerposition.y][playerposition.x-1] == 3){
            pointScore();
            lane1[playerposition.y][playerposition.x-1] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y][playerposition.x-1] == 6){
            pointScore();
            lane1[playerposition.y][playerposition.x-1] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y][playerposition.x-1] == 7){
            pointScore();
            lane1[playerposition.y][playerposition.x-1] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y][playerposition.x-1] == 8){
            pointScore();
            lane1[playerposition.y][playerposition.x-1] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y][playerposition.x-1] == 9){
            pointScore();
            lane1[playerposition.y][playerposition.x-1] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y][playerposition.x-1] == 2){
            axechop();
            setTimeout(function(){
                alert("OH NO! The little christmastree got chopped into splinters! You have to start over.");
                location.reload();
            }, 500);
        }
    }
    function keyright(){
        if(lane1[playerposition.y][playerposition.x+1] == 0){
            lane1[playerposition.y][playerposition.x+1] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
        }else if(lane1[playerposition.y][playerposition.x+1] == 1){
            //treesound();
        }else if(lane1[playerposition.y][playerposition.x+1] == 3){
            pointScore();
            lane1[playerposition.y][playerposition.x+1] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y][playerposition.x+1] == 6){
            pointScore();
            lane1[playerposition.y][playerposition.x+1] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y][playerposition.x+1] == 7){
            pointScore();
            lane1[playerposition.y][playerposition.x+1] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y][playerposition.x+1] == 8){
            pointScore();
            lane1[playerposition.y][playerposition.x+1] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y][playerposition.x+1] == 9){
            pointScore();
            lane1[playerposition.y][playerposition.x+1] = 4;
            lane1[playerposition.y][playerposition.x] = 0;
            jinglebells();
            decorationPoint();
        }else if(lane1[playerposition.y][playerposition.x+1] == 2){
            axechop();
            setTimeout(function(){
                alert("OH NO! The little christmastree got chopped into splinters! You have to start over.");
                location.reload();
            }, 500);
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