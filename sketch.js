
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

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

	bobDiameter=100;;

	//Create the Bodies Here.
	roof1 = new Roof(400,100,1200,50);
	bob1 = new BOB(100,200,50,50);
	bob2 = new BOB(200,200,50,50);
	bob3 = new BOB(300,200,50,50);
	bob4 = new BOB(400,200,50,50);
	bob5 = new BOB(500,200,50,50);

	rope1 = new Rope(bob1.body,roof1.body,bobDiameter*2-100,0)
	rope2 = new Rope(bob2.body,roof1.body,bobDiameter*2,0)
	rope3 = new Rope(bob3.body,roof1.body,bobDiameter*2+100,0)
	rope4 = new Rope(bob4.body,roof1.body,bobDiameter*2+200,0)
	rope5 = new Rope(bob5.body,roof1.body,bobDiameter*2+300,0)


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
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.posirion,{x:-50,y:-45});
	}
}

