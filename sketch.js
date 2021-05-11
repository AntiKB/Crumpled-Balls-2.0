const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var ground;
var paper;
var dustbin;
var slingshot;

function setup(){
	createCanvas(1600,500);
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2,490,width,20);
	paper = new Paper(170,height/2,35);
	dustbin = new Dustbin(1400,height-20-333/2, 276, 333);
	slingshot = new Slingshot(paper.body,{x:175,y:250});
}

function draw() {
  background(255);
  Engine.update(engine);
  strokeWeight(5);

  ground.display();
  paper.display();
  dustbin.display();
  slingshot.display();
}

function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingshot.fly();
}