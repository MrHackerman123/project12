var bird, birdImg;
var fly, flyImg;
var bg, bgImg;
var crow,crowImg
var lives = 3
var life1,life2,life3,lifeImg;
var death1,death2,death3,deathImg;
var crowGroup;


function preload(){

  birdImg = loadImage("eagle.png")
  flyImg = loadImage("fly.png")
  bgImg = loadImage("cover.jpg")
  crowImg = loadImage("crow.png")
  lifeImg = loadAnimation("redheart.png")
  deathImg = loadAnimation("black.png")
  

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bg = createSprite(700,300,windowWidth,windowHeight);
  bg.addImage(bgImg);
  bg.scale = 4
  bg.velocityX = -3
 


  bird = createSprite(200,200,50,50);
  bird.addImage(birdImg);
  bird.scale = 0.75;



 /* fly = createSprite(300,300,50,50);
  fly.addImage(flyImg);
  fly.scale = 0.2;
  fly.velocityX = 3*/


  life1 = createSprite(100,100);
  life2 = createSprite(200,100);
  life3 = createSprite(300,100);
  life1.addAnimation("life",lifeImg);
  life1.addAnimation("death",deathImg)
  life2.addAnimation("life",lifeImg);
  life2.addAnimation("death",deathImg)
  life3.addAnimation("life",lifeImg);
  life3.addAnimation("death",deathImg)
  life1.scale = 0.2
  life2.scale = 0.2
  life3.scale = 0.2

  crowGroup = createGroup()


}

function draw() {
 
  if(bg.x < 600 ){
    bg.x = 1200
  }

  bird.x = World.mouseX;
  bird.y = World.mouseY;
 
  
  if(World.frameCount % 120 === 0){
    spawnCrows()
  }

  if(crowGroup.isTouching(bird) && lives === 3){
    lives -=1;
    life3.changeAnimation("death")
    crow.destroy()
  } else if(crowGroup.isTouching(bird) && lives === 2){
    lives -=1;
    life2.changeAnimation("death")
    crow.destroy()
  } else if(crowGroup.isTouching(bird) && lives === 1){
    lives -=1;
    life1.changeAnimation("death")
    crow.destroy()
  } 

  if(lives === 0 ){

    crowGroup.velocityXEach = 0
    bg.velocityX = 0
  }
  


  

  
  
  drawSprites();
}

function spawnCrows(){
  crow = createSprite(windowWidth,Math.round(random(300,700)))
  crow.addImage(crowImg);
  crow.scale = 0.3;
  crow.velocityX = -7
  crowGroup.add(crow)

}