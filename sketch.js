
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyImg;
var backgroundImg;
var fruit;
var edge;


function preload()
{
  boyImg = loadImage("Boy.png");
  backgroundImg = loadImage("Background.png");
}

function setup() {

  createCanvas(1000,400);

  engine = Engine.create();
	world = engine.world;

  boy_options={
    isStatic:false
  };

  boy = createSprite(500,350);
  boy.addImage(boyImg);
  boy.scale = 0.5;
  boy.velocityX = 2;
  
  

  
}


function draw() 
{
  background(backgroundImg);


  boy.collide(edges);
  
  

  drawSprites();
  Engine.update(engine);
  
  
}

