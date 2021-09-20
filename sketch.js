

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ball ; 
var dustbin1 ; 
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ball = new Paper(200,450,50)
   dustbin1 = new dustbin(1200,650);
   

   ground1 = new Ground(width/2 , 670 , width , 20)
   var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
   

	Engine.run(engine);
  Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  ball.display();
  dustbin1.display();
  ground1.display();
  drawSprites();
 
}

function keyPressed(){
if ( keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body , ball.body.position, { x:130, y: -90})
}
}

