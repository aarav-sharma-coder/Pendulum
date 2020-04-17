const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
var bob;
var chain;


function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  stand = new Stand(200,100,200,30);
  bob= new Bob(200,300,50);
  chain = new Chain(bob.body,stand.body);
}

function draw() {
  background("yellow");
  Engine.update(engine);



  stand.display(); 
  bob.display();
  chain.display();

  fill("black");
  text("PRESS ENTER TO SET THE PENDULUM",100,35);
  fill("red");
  text("PRESS ANY KEY TO RELEASE THE PENDULUM",75,80);

  if(keyCode === ENTER){
    bob.body.position.x = mouseX;
    bob.body.position.y = mouseY;
  }
}