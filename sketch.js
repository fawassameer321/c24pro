
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new hammer(100,100)
    rubber = new rubber(400,600)
	stone = new stone(300,500)
	ground = new ground(750,680,1500,50)
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
hammer.display();
rubber.display();
stone.display();
ground.display();

  drawSprites()
 
}



