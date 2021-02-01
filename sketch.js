var knife;
var knifeImage;
var fruit;
var fruit1,fruit2,fruit3,fruit4;
var score;
var PLAY=1;
var END=0;
var gameState=PLAY;
var fruitGroup;
var enemyGroup;
var monster;
var monsterImage;
var gameOverImage;



function preload(){
  knifeImage=loadImage("sword.png");
  
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  
  monsterImage=loadAnimation("alien1.png","alien2.png");
  
  gameOverImage=loadImage("gameover.png");
}

function setup(){
  createCanvas(600,400);
  
  enemyGroup=new Group();
  fruitGroup=createGroup();
  
  knife=createSprite(300,100,20,20);
  knife.addImage("knife image",knifeImage);
  knife.scale=0.5;
  
  score=0;
  
}

function draw(){
  background ("cyan");
  
  if(gameState===PLAY){
    fruits();
    enemy();
    
  if(fruitGroup.isTouching(knife)){
     fruitGroup.destroyEach();
     score=score+2;
  }
  if(enemyGroup.isTouching(knife)){
     gameState=END;
  }    
  }
  
  if(gameState===END){
    knife.addImage(gameOverImage);
    knife.x=200;
    knife.y=200;
    
    enemyGroup.destroyEach();
    fruitGroup.destroyEach();
    
    fruitGroup.setVelocityXEach(0);               
    enemyGroup.setVelocityXEach(0);
    fruitGroup.setLifetimeEach(-1);
    enemyGroup.setLifetimeEach(-1);
  }
  knife.y=World.mouseY;
  knife.x=World.mouseX;
  
  drawSprites();
  
  
  fill("black");
  textSize(12);
  text("Score:"+score,500,50);
}

function fruits(){
  if(World.frameCount%80===0){
  fruit=createSprite(400,200,20,20);
  fruit.scale=0.2;
  r=Math.round(random(1,4));
  if (r == 1){
    fruit.addImage(fruit1);
  }else if (r == 2){
    fruit.addImage(fruit2);
  }else if (r == 3){
    fruit.addImage=(fruit3);
    fruit.scale=1;
  }else{
    fruit.addImage=(fruit4);
    fruit.scale=1;
  }
  
   fruit.y=Math.round(random(50,340));
    
    fruit.velocityX=-7;
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
}  
}
function enemy(){
if(World.frameCount%200===0){
  monster=createSprite(400,200,20,20);
  monster.addAnimation("moving",monsterImage);
  monster.y=Math.round(random(100,300));
  monster.velocityX=-8;
  monster.setLifetime=50;
  
  enemyGroup.add(monster);
}
}  