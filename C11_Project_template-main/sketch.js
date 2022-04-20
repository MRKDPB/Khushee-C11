var sea,ship;
var seaImg,shipImg, iceberg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadImage("ship-1.png");
  icebergImg=loadImage("iceberg.png")
}


function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addImage("movingShip",shipImg1);
  ship.scale =0.25;
  

}

function draw(){
  background(0);
  spawnIcebergs();
  drawSprites();
}
function spawnIcebergs(){
  if(frameCount % 80 ===0){
    iceberg= createSprite(300,350,10,10);
    iceberg.scale=0.2;
  iceberg.addImage(icebergImg)
   iceberg.velocityX = -5;

  }
}