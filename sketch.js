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

// midi shit

var boxdrop; 
var boxheight;
var boxbreedte;
var boxhoogte;

function setup() {

  // physics shit
  createCanvas(w, h);
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(200, height, width, 60, { isStatic: true });
  Engine.run(engine);
  World.add(world, ground);
}

// function mouseDragged(){
// boxes.push(new Box(mouseX, mouseY, 10, 10));
// } 



function draw() {
  console.log(vel, note);
  
  // change map to fit keyboard. 
  // this one's configured for note 41 to 72.
  boxdrop = map(note, 41, 72, 10, w-10);
  boxheight = map(vel, 2, 64, 50, 0);
  boxbreedte = random(10, 40);
  boxhoogte = random(10, 40);
  
  background(51);

  if(on == 144) {
  boxes.push(new Box(boxdrop, boxheight, boxbreedte, boxhoogte));
  }
  
  for (var i = 0; i < boxes.length; i++){
          boxes[i].show();
  }
    
  // fill(255);
  // ellipse(boxdrop, 20, 10,10);
  
}
