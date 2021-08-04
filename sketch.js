
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1;
var bob1;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(400,100,800,50);
	bob1 = new BOB(100,300,100,100);
	bob2 = new BOB(200,300,100,100);
	bob3 = new BOB(300,300,100,100);
	bob4 = new BOB(400,300,100,100);
	bob5 = new BOB(500,300,100,100);

	rope1 = new Rope(bob1.body,roof1.body,bob1Diameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  drawSprites();
 
}



