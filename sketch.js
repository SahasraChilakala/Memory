var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leavesImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=World.mouseX;

  spawnApples()
  swpawnLeaves()

  drawSprites();
}

function swpawnLeaves(){

if(frameCount%80===0){
  Leaves = createSprite(random(50,350),40,10,10)
  Leaves.addImage(leavesImg)
  Leaves.scale=0.1
  Leaves.velocityY=5
  Leaves.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1
  Leaves.lifetime=55
    }

  }

function spawnApples(){
  if(frameCount%80===0){
Apple = createSprite(random(50,350),40,10,10)
Apple.addImage(appleImg)
Apple.scale=0.1
Apple.velocityY=5
Apple.depth=rabbit.depth
rabbit.depth=rabbit.depth+1
Apple.lifetime=50
  }
}
