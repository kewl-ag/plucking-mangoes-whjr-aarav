
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,tree,stone,ground;

var m1,m2,m3,m4,m5;

var treei,boyi;

var treesprite;

var rope;

function preload()
{

	treei = loadImage("Plucking/tree.png");
    boyi = loadImage("Plucking/boy.png");
}

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,650,800,30);

treesprite = createSprite(700,450);
treesprite.addImage(treei);
treesprite.scale = 0.35;

boy = createSprite(200,570);
boy.addImage(boyi);
boy.scale = 0.1;


m1 = new Mango(670,300,30);
m2 = new Mango(650,280,30);
m3 = new Mango(650,290,30);
m4 = new Mango(660,330,30);
m5 = new Mango(700,280,30);
stone = new Stone(170,570,40);
rope = new Rope(stone.body,{x : 150,y : 520});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  d(stone,m1);
  d(stone,m2);
  d(stone,m3);
  d(stone,m4);
  d(stone,m5);
  
  drawSprites();
 
ground.display();
m1.display();
stone.display();
rope.display();
m2.display();
m3.display();
m4.display();
m5.display();

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	
	}
	
	function mouseReleased(){
		rope.fly();
	}
	

function keyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(stone.body,{x : 235,y : 420}); 
rope.attach(stone.body);
}

}


function d(lstone,lmango){

	mangoBodyPosition = lmango.body.position;
    stoneBodyPosition = lstone.body.position;

var distnce = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

if(distance <= lmango.r+lstone.r){


Matter.Body.setStatic(lmango.body = false)

}

}