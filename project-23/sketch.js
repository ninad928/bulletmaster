var helicopterIMG, helicopterSprite, packageIMG,package2IMG;
var packageBody,packageBody2,ground,package,package2;
var l1,l2,l3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	package2IMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	package = createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2;

	package2 = createSprite(width/2, 80, 10,10);
	package2.addImage(packageIMG)
	package2.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	
	l1 = createSprite(width/2,height-50,200,20);
	l1.shapeColor="red";
	l2 = createSprite(510,610,20,100);
	l2.shapeColor="red";
	l3 = createSprite(310,610,20,100);
	l3.shapeColor="red";


	engine = Engine.create();
	world = engine.world;

	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	packageBody2 = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody2);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  package.x= packageBody.position.x;
  package.y= packageBody.position.y; 
  package2.x= packageBody2.position.x;
  package2.y= packageBody2.position.y; 
  
  package.collide(l1);
  package.collide(l2);
  package.collide(l3);
  package2.collide(l1);
  package2.collide(l2);
  package2.collide(l3);


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  Matter.Body.setStatic(packageBody,false);
  if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody2,false);
  }

    
  }
}



