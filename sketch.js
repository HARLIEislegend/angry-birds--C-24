const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1, pig2;
var ground,box2;
var log1,log2,log3,log4
var box3,box4;
var box5;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    box1 = new Box(750,100,70,70);
    box2 = new Box(850,100,70,70);

    pig1 = new Pig(800,120)
    log1 = new Log(800,110,270, PI/2)
    
 
    box3 = new Box(700,190,70,70);
    box4 = new Box(900,190,70,70);

    pig2 = new Pig(800,110)
    log2 = new Log(800,90,270, PI/2)
    box5 = new Box(800,70,70,70);
   log3 = new Log(750,60,130, PI/7)
    log4 = new Log(850,60,130, -PI/7)
    
    
    bird1 = new Bird(200,200)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
   log3.display();
    log4.display();
    bird1.display();
}