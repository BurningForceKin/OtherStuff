// module aliases
var Engine = Matter.Engine,
  //  Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var w = 400;
var h = 400;
var ground;

function setup() {
  createCanvas(w, h);
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(200, height, width, 60, { isStatic: true });
  Engine.run(engine);
  World.add(world, ground);
}

function mouseDragged(){
boxes.push(new Box(mouseX, mouseY, 10, 10));
}



function draw() {
  background(51);
  for (var i = 0; i < boxes.length; i++){
          boxes[i].show();
  }

}


//  fill(255, 0, 0);
//  rect(boxA.position.x, boxA.position.y, 80, 80);
