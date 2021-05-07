const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var blocks1, blocks2, blocks3, blocks4, blocks5, blocks6, blocks7, blocks8, blocks9;
var polygon, polygon_img, slingShot;

function preload(){
    polygon_img = loadImage("polygon.png");
}

function setup(){
createCanvas(900,400);
engine = Engine.create();
world = engine.world;

ground = new Ground();
stand1 = new Stand(390,300,250,10);
stand2 = new Stand(700,200,200,10);

//set 1 for first stand
//level 1
block1 = new Block(300,275,30,40);
block2 = new Block(330,275,30,40);
block3 = new Block(360,275,30,40);
block4 = new Block(390,275,30,40);
block5 = new Block(420,275,30,40);
block6 = new Block(450,275,30,40);
block7 = new Block(480,275,30,40);
//level 2
block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);
//level 3
block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);
//level 4
block16 = new Block(390,155,30,40);

//set 2 for second stand
//level 1
blocks1 = new Block(640,175,30,40);
blocks2 = new Block(670,175,30,40);
blocks3 = new Block(700,175,30,40);
blocks4 = new Block(730,175,30,40);
blocks5 = new Block(760,175,30,40);
//level 2
blocks6 = new Block(670,135,30,40);
blocks7 = new Block(700,135,30,40);
blocks8 = new Block(730,135,30,40);
//level 3
blocks9 = new Block(700,95,30,40);

//polygon holder with slings
polygon = Bodies.circle(50,200,20);
World.add(world, polygon);

slingShot = new Slingshot(this.polygon, {x:100, y:200})

Engine.run(engine);
}

function draw(){
    background(56,44,44);
    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and release it to launch it towards the blocks",100,30);

    Engine.update(engine);
    ground.display();
    stand1.display();
    stand2.display();

    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("turquoise");
    block13.display();
    block14.display();
    block15.display();
    fill("grey");
    block16.display();

    fill("skyblue");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    fill("turquoise");
    blocks6.display();
    blocks7.display();
    blocks8.display();
    fill("pink")
    blocks9.display();

    imageMode(CENTER);
    image(polygon_img, polygon.position.x, polygon.position.y,40,40);

    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
