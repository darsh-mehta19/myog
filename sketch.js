
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bg;
var ground;
var wet_dustbin,wimg;
var dry_dustbin,dimg;
var wGarbageGroup;
var wGarbage,Gimg1,Gimg2;
var wGarbageGroup;
var dGarbage,dgimg1,dgimg2,dgimg3;
var score;
function preload()
{
	bg =loadImage("bg.png")
	wimg = loadImage("DUSTBIN WET.png");
	dimg = loadImage("DUSTBIN DRY.png");
	Gimg1 = loadImage("garbage wet 1.png")
	Gimg2 = loadImage("garbage wet 2.png")
	dgimg1 = loadImage("dry waste 1.png")
	dgimg2 = loadImage("dry waste 2.png")
	dgimg3 = loadImage("dry waste 3.png")
	wGarbageGroup   = new Group();
	dGarbageGroup   = new Group();

}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)
	wet_dustbin = createSprite(1100,725,300,300);
	wet_dustbin.addImage(wimg)
	wet_dustbin.scale= 1.5;
	dry_dustbin = createSprite(950,725,300,300);
	dry_dustbin.addImage(dimg)
	dry_dustbin.scale= 1.5;
	score =0;
	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(bg);
  ground.display();
	textSize(20)
	text("Score: "+score,1100,100);

	if(dGarbageGroup.isTouching(dry_dustbin)){
		score++;

		dGarbageGroup.visible = false;	}
		else if (dGarbageGroup.isTouching(wet_dustbin)){
		score = score -20 ;

		dGarbageGroup.visible = false;	}

	if(wGarbageGroup.isTouching(wet_dustbin)){
		score++;

		wGarbageGroup.visible = false;
	}else if (wGarbageGroup.isTouching(dry_dustbin)){
		score = score -20 ;
		wGarbageGroup.visible = false;

	}

  if (frameCount % 120 === 0) {
	wGarbage = createSprite(random(100,1150),750 , 100, 100);
	wGarbage.scale=0.25
	var rand = Math.round(random(1,2));
	switch(rand){
		case 1: wGarbage.addImage(Gimg1);
		break;
		case 2: wGarbage.addImage(Gimg2);
		break;
	}
	wGarbageGroup.add(wGarbage);
	
}

if (frameCount %120 === 0) {
	dGarbage = createSprite(random(100, 1150),750 , 100, 100);
	dGarbage.scale=0.25
	var rand = Math.round(random(1,3));
	switch(rand){
		case 1: dGarbage.addImage(dgimg1);
		break;
		case 2: dGarbage.addImage(dgimg2);
		break;
		case 3 : dGarbage.addImage(dgimg3);
		break;
	}
	dGarbageGroup.add(dGarbage);
	
}
wGarbageGroup.setLifetimeEach(240);
dGarbageGroup.setLifetimeEach(240);

 drawSprites();
 
}



