const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1,ground,box2,ball;

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(width/2,height/4,width/7,20);
    ball1 = new Ball (width/2-40,height/4+300,20);
    ball2 = new Ball (width/2-20,height/4+300,20);
    ball3 = new Ball (width/2,height/4+300,20);
    ball4 = new Ball (width/2+20,height/4+300,20);
    ball5 = new Ball (width/2+40,height/4+300,20);
    rope1 = new Rope(ball1.body,ground.body,-40,0);
    rope2 = new Rope(ball2.body,ground.body,-20,0);
    rope3 = new Rope(ball3.body,ground.body,0,0);
    rope4 = new Rope(ball4.body,ground.body,20,0);
    rope5 = new Rope(ball5.body,ground.body,40,0);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
     rope5.display();

   
}
function keyPressed(){
    if(keyCode == UP_ARROW){
        Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45})
    }
}