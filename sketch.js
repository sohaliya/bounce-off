var fixedRect, movingRect;
var gameobj1, gameobj2;
function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobj1 = createSprite(100, 100, 50, 80);
  gameobj1.shapeColor = "green";
  gameobj1.debug = true;
  gameobj2 = createSprite(200, 800,80,30);
  gameobj2.shapeColor = "green";
  gameobj2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);

  gameobj2.x=mouseX;
  gameobj2.y=mouseY;


  if(isTouching(gameobj1,gameobj2)){
    gameobj1.shapeColor="white";
    gameobj2.shapeColor="red";
  }
  else{
    gameobj1.shapeColor="green";
    gameobj2.shapeColor="green";
  }
  drawSprites();
}

