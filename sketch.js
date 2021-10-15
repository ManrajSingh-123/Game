var bg1,bg2,bg3,rock1,rock2,meteor1,meteor2,debris,wormhole1,wormhole2;

function preload(){
  bg1=loadImage("bg_1.jpg");
  bg2=loadImage("bg_2.jpeg");
  bg3=loadImage("bg_3.png");
  rock1=loadImage("rock_1.png");
  rock2=loadImage("rock_2.png");
  meteor1=loadImage("Meteor_1.png");
  meteor2=loadImage("Meteor_2.png");
  debris=loadImage("space_debris.png");
  wormhole1=loadImage("Wormhole.png");
  wormhole2=loadImage("Wormhole_2.png");


}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}