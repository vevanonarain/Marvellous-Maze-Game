//creating variables of sprites
var canvas;

var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10,
wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21;

var back, plyer, bx;

var gameState;

var bound1, bound2, bound3, bound4;

var box;

var coins = 0, life = 5 ;

var coin, coin2, coin3, coin4, coin5, coin6, cin;

var fruit, frut;

var bullet1, bullet2;
 
function preload(){
  //loading images of background and player
  back = loadImage("images/backg.jpg");
  plyer = loadImage("images/player.jpg");
  bx = loadImage("images/box.jpg");
  cin = loadImage("images/coin.png");
  frut = loadImage("images/fruit.jpg");
}

function setup() {
  //creating canvas
  canvas = createCanvas(displayWidth - 50, displayHeight-55);
  
  //player
  player = createSprite(displayWidth/2 + 500, displayHeight - 173, displayWidth - 1346, displayHeight - 748);
  player.addImage("player", plyer);
  player.scale = 0.28;
  
  //creating walls
  wall1 = createSprite(displayWidth - 866, displayHeight - 168, displayWidth - 50, displayHeight - 763);
  wall2 = createSprite(displayWidth - 666, displayHeight - 218, displayWidth - 50, displayHeight - 763);
  wall3 = createSprite(displayWidth - 1316, displayHeight - 268, displayWidth - 1000, displayHeight - 763);
  wall4 = createSprite(displayWidth - 1066, displayHeight - 328, displayWidth - 1361, displayHeight - 900);
  wall5 = createSprite(displayWidth - 1151, displayHeight - 328, displayWidth - 1200, displayHeight - 763);
  wall6 = createSprite(displayWidth - 846, displayHeight - 433, displayWidth - 300, displayHeight - 763);
  wall7 = createSprite(displayWidth - 316, displayHeight - 268, displayWidth - 50, displayHeight - 763);
  wall8 = createSprite(displayWidth - 150, displayHeight - 318, displayWidth - 1361, displayHeight - 670);
  wall9 = createSprite(displayWidth - 556, displayHeight - 368, displayWidth - 350, displayHeight - 763);
  wall10 = createSprite(displayWidth - 686, displayHeight - 498, displayWidth - 150, displayHeight - 763);
  wall11 = createSprite(displayWidth - 76, displayHeight - 550, displayWidth - 1361, displayHeight - 400);
  wall12 = createSprite(displayWidth - 776, displayHeight - 588, displayWidth - 175, displayHeight - 763);
  wall13 = createSprite(displayWidth - 1166, displayHeight - 550, displayWidth - 1361, displayHeight - 750);
  wall14 = createSprite(displayWidth - 1016, displayHeight - 523, displayWidth - 1361, displayHeight - 750);
  wall15 = createSprite(displayWidth - 866, displayHeight - 563, displayWidth - 1361, displayHeight - 750);
  wall16 = createSprite(displayWidth - 716, displayHeight - 523, displayWidth - 1361, displayHeight - 750);
  wall17 = createSprite(displayWidth - 566, displayHeight - 563, displayWidth - 1361, displayHeight - 750);
  wall18 = createSprite(displayWidth - 416, displayHeight - 523, displayWidth - 1361, displayHeight - 750);
  wall19 = createSprite(displayWidth - 266, displayHeight - 563, displayWidth - 1361, displayHeight - 750);
  wall20 = createSprite(displayWidth - 675, displayHeight - 680, displayWidth - 170, displayHeight - 763);
  wall21 = createSprite(displayWidth - 1356, displayHeight - 645, displayWidth - 1361, displayHeight - 655);
  
  //moving walls
  wall13.velocityY = 3;
  wall14.velocityY = -3;
  wall15.velocityY = 3;
  wall16.velocityY = -3;
  wall17.velocityY = 3;
  wall18.velocityY = -3;
  wall19.velocityY = 3;

  //colours of walls
  wall1.shapeColor = "green";
  wall2.shapeColor = "green";
  wall3.shapeColor = "green";
  wall4.shapeColor = "green";
  wall5.shapeColor = "green";
  wall6.shapeColor = "green";
  wall7.shapeColor = "green";
  wall8.shapeColor = "green";
  wall9.shapeColor = "green";
  wall10.shapeColor = "blue";
  wall11.shapeColor = "green";
  wall12.shapeColor = "blue";
  wall13.shapeColor = "red";
  wall14.shapeColor = "red";
  wall15.shapeColor = "red";
  wall16.shapeColor = "red";
  wall17.shapeColor = "red";
  wall18.shapeColor = "red";
  wall19.shapeColor = "red";
  wall20.shapeColor = "green";
  wall21.shapeColor = "green";
 
  //setting the gamestate to 0
  gameState = 0;

  //creating boundaries
  bound1 = createSprite(displayWidth/2, displayHeight - 55, displayWidth, displayHeight - 763);
  bound2 = createSprite(displayWidth/2, displayHeight - 768, displayWidth, displayHeight - 763);
  bound3 = createSprite(displayWidth - 1366, displayHeight/2, displayWidth - 1361, displayHeight);
  bound4 = createSprite(displayWidth - 50, displayHeight/2, displayWidth - 1361, displayHeight);

  //making box
  box = createSprite(displayWidth - 150, displayHeight - 725, displayWidth - 1350 , displayHeight - 752);
  box.addImage("box", bx);
  box.scale = 0.3;

  //creating fruits
  fruit = createSprite(displayWidth - 400, displayHeight - 640, displayWidth - 1346, displayHeight - 748);
  fruit.addImage("fruit", frut);
  fruit.scale = 0.15;
  fruit1 = createSprite(displayWidth - 300, displayHeight - 310, displayWidth - 1346, displayHeight - 748);
  fruit1.addImage("fruit1", frut);
  fruit1.scale = 0.15;

  //creating bullets
  bullet1 = createSprite(displayWidth - 500 /2, displayHeight - 400, displayWidth -1346, displayHeight - 753);
  bullet1.shapeColor = "brown";
  bullet1.velocityX = -5;
  bullet2 = createSprite(displayWidth - 500 /2, displayHeight - 250, displayWidth -1346, displayHeight - 753);
  bullet2.shapeColor = "brown";
  bullet2.velocityX = 5;

  //creating coins
  coin = createSprite(displayWidth - 600, displayHeight - 400, displayWidth - 1300, displayHeight - 700);
  coin.addImage("coin", cin);
  coin.scale = 0.2;
  coin1 = createSprite(displayWidth - 500, displayHeight - 475, displayWidth - 1300, displayHeight - 700);
  coin1.addImage("coin1", cin);
  coin1.scale = 0.2;
  coin2 = createSprite(displayWidth - 700, displayHeight - 620, displayWidth - 1300, displayHeight - 700);
  coin2.addImage("coin2", cin);
  coin2.scale = 0.2;
  coin3 = createSprite(displayWidth - 800, displayHeight - 300, displayWidth - 1300, displayHeight - 700);
  coin3.addImage("coin3", cin);
  coin3.scale = 0.2;
  coin4 = createSprite(displayWidth - 400, displayHeight - 700, displayWidth - 1300, displayHeight - 700);
  coin4.addImage("coin4", cin);
  coin4.scale = 0.2;
  coin5 = createSprite(displayWidth - 900, displayHeight - 200, displayWidth - 1300, displayHeight - 700);
  coin5.addImage("coin5", cin);
  coin5.scale = 0.2;
  coin6 = createSprite(displayWidth - 300, displayHeight - 250, displayWidth - 1300, displayHeight - 700)
  coin6.addImage("coin6", cin);
  coin6.scale = 0.2;
}

function draw() {
  
  //setting background
  background(back);

  //writing entry and exit  
  textSize(30);
  textFont("Century Schoolbook");
  stroke("black")
  text("Entry", displayWidth/2 + 540, displayHeight - 125);
  text("Exit", displayWidth - 1306, displayHeight - 743);

    //condition for gameState 0
    if(gameState === 0){
      player.velocityX = 0;
      player.velocityY = 0;
      player.x = displayWidth/2 + 500;
      player.y = displayHeight - 173;
      textSize(20);
      stroke("blue");
      textFont("Century Schoolbook");
      text("INSTRUCTIONS: 1) You have to collect atleast 600 coins and get the coins to the box. The shields will give you 1 life",
      displayWidth- 1340, displayHeight - 130);
      text("2) Avoid the hot walls as they bounce off the reflecting walls. Press space to start", 
      displayWidth- 1185, displayHeight - 100);
      text("3)If you touch the hot walls, you lose 1 life. If you touch the bullet, you lose all lives", 
      displayWidth- 1185, displayHeight - 70);
  }
     //condition for gameState 1
     if(keyCode === 32){
       gameState = 1;
  }
    if(gameState === 1){
       if(keyIsDown(UP_ARROW)){
        player.velocityX = 0;
        player.velocityY = -5;
        }
        if(keyIsDown(DOWN_ARROW)){
          player.velocityX = 0;
          player.velocityY = 5;
        }  
        if(keyIsDown(LEFT_ARROW)){
          player.velocityY = 0;
          player.velocityX = -5;
        }
          if(keyIsDown(RIGHT_ARROW)){
          player.velocityY = 0;
          player.velocityX = 5;
        }
  }      
    //condition for gameState 2
    if(player.isTouching(box) && coins > 500){
      gameState = 2;
      textFont("Century Schoolbook");
      stroke("black");
      text("You win!! Press R to play again", displayWidth/2 - 400, displayHeight - 710);
      player.velocityY = 0;
      player.velocityX = 0;
    }

    if(player.isTouching(box) && coins < 600){
      gameState = 2;
      textFont("Century Schoolbook");
      stroke("black");
      text("You lose!! Press R to play again", displayWidth/2 - 400, displayHeight - 710);
      player.velocityY = 0;
      player.velocityX = 0;
    }

    bullet1.bounceOff(bound3);
    bullet1.bounceOff(bound4);
    bullet2.bounceOff(bound3);
    bullet2.bounceOff(bound4);

    if(player.isTouching(wall13) ||player.isTouching(wall14) ||player.isTouching(wall15) 
    ||player.isTouching(wall16) ||player.isTouching(wall17) ||player.isTouching(wall18) 
    ||player.isTouching(wall19)){
      life = life - 1;
    }
    if(life === 0 || player.isTouching(bullet1)|| player.isTouching(bullet2)){
      gameState = 2;
      player.velocityY = 0;
      player.velocityX = 0;
      bullet1.velocityX = 0;
      bullet2.velocityX = 0;
      textFont("Century Schoolbook");
      stroke("black");
      text("You lose!! Press R to play again", displayWidth / 2 - 400, displayHeight - 710);
    }
    if(keyCode === 82 && gameState === 2){
      gameState = 0;

      player.x = displayWidth/2 + 500;
      player.y = displayHeight - 173;

      life = 5;

      fruit.x = displayWidth - 400;
      fruit1.x = displayWidth - 300;

      bullet1.velocityX = -5;
      bullet2.velocityX = 5;

      coin.x = displayWidth - 600;
      coin1.x = displayWidth - 500;
      coin2.x = displayWidth - 700;
      coin3.x = displayWidth - 800;
      coin4.x = displayWidth - 400;
      coin5.x = displayWidth - 900;
      coin6.x = displayWidth - 300;
    }

    if(player.isTouching(fruit)){
      life++;
      fruit.x = displayWidth;
    }
    if(player.isTouching(fruit1)){
      life++;
      fruit1.x = displayWidth;
    }
    if(player.isTouching(coin)){
      coins += 100;
      coin.x = displayWidth;
    }
    if(player.isTouching(coin1)){
      coins += 100;
      coin1.x = displayWidth;
    }
    if(player.isTouching(coin2)){
      coins += 100;
      coin2.x = displayWidth;
    }
    if(player.isTouching(coin3)){
      coins += 100;
      coin3.x = displayWidth;
    }
    if(player.isTouching(coin4)){
      coins += 100;
      coin4.x = displayWidth;
    }
    if(player.isTouching(coin5)){
      coins += 100;
      coin5.x = displayWidth;
    }
    if(player.isTouching(coin6)){
      coins += 100;
      coin6.x = displayWidth;
    }

  //making player collide with the wall
  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  player.collide(wall10);
  player.collide(wall11);
  player.collide(wall12);
  player.collide(wall13);
  player.collide(wall14);
  player.collide(wall15);
  player.collide(wall16);
  player.collide(wall17);
  player.collide(wall18);
  player.collide(wall19);
  player.collide(wall20);
  player.collide(wall21);
   
  //making player collide with the boundaries
  player.collide(bound1);
  player.collide(bound2);
  player.collide(bound3);
  player.collide(bound4);
  
  //making hot walls(the red walls) bounce of the reflcting walls(blue walls)
  wall13.bounceOff(wall10);
  wall13.bounceOff(wall12);
  wall14.bounceOff(wall10);
  wall14.bounceOff(wall12);
  wall15.bounceOff(wall10);
  wall15.bounceOff(wall12);
  wall16.bounceOff(wall10);
  wall16.bounceOff(wall12);
  wall17.bounceOff(wall10);
  wall17.bounceOff(wall12);
  wall18.bounceOff(wall10);
  wall18.bounceOff(wall12);
  wall19.bounceOff(wall10);
  wall19.bounceOff(wall12);

  //displaying lives and coins
  textFont("Century Schoolbook");
  stroke("black");
  text("lives: "+ life, displayWidth/2 - 70, displayHeight - 740);
  text("coins: "+ coins, displayWidth/2 + 70, displayHeight - 740);

  //drawing all the sprites
  drawSprites();
}