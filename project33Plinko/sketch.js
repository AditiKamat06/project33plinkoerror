const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;
 
var particle,gameState;
var engine, world;

var plinkos = [];

var divisionHeight= 300;
var score = 0;
var count = 0;

function setup() {
    createCanvas(1600,800);
  
    engine = Engine.create();
    world = engine.world;
  
    ground = new Ground1(800,800,1600,20);
  
    for (var k=0; k<= width; k=k+80){
      divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
    }
  
    for (var j = 40 ; j<=width; j=j+100){
      plinkos.push(new Plinko(j,75))
    }
  
    for (var j = 15; j<=width; j=j+100){
      plinkos.push(new Plinko(j,105))
    }
  
    for (var j = 40; j<=width; j=j+100){
      plinkos.push(new Plinko(j,145))
    }
}

function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
  
  for (var j = 40 ; j<=width; j=j+100){
    plinkos.push(new Plinko(j,75))
  }

  for (var j = 15; j<=width; j=j+100){
    plinkos.push(new Plinko(j,105))
  }

  for (var j = 40; j<=width; j=j+100){
    plinkos.push(new Plinko(j,145))
  }

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  Engine.update(engine);
}