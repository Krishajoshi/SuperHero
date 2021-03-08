const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var engine, world;
var background1;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

var ground;
var hero;
var rope;
var monster;
function preload() {
background1 = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;  
  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(200,200,200,200);
  monster = new Monster(1050,100,200,200);

  var point_B={
    x:200,
    y:500,
}    
rope = new fly(hero.body,point_B);
box1 = new Block(900, 100, 70, 70);
box2 = new Block(900, 100, 70, 70);
box3 = new Block(900, 100, 70, 70);
box4 = new Block(900, 100, 70, 70);
box5 = new Block(900, 100, 70, 70);
box6 = new Block(900, 100, 70, 70);
box7 = new Block(800,100,70,70);
box8 = new Block(800,100,70,70);
box9 = new Block(800,100,70,70);
box10 = new Block(800,100,70,70); 
box11 = new Block(800,100,70,70);
box12 = new Block(800,100,70,70);
box13 = new Block(700, 100, 70, 70);
box14 = new Block(700, 100, 70, 70);
box15 = new Block(700, 100, 70, 70);
box16 = new Block(700, 100, 70, 70);
box17 = new Block(700, 100, 70, 70);
box18 = new Block(700, 100, 70, 70);
box19 = new Block(700, 100, 70, 70);
box20 = new Block(700, 100, 70, 70);


}

function draw() {
  background(background1);
  Engine.update(engine);

  ground.display();
  hero.display();
  rope.display();

  box1.display("red");
  box2.display("orange");
  box3.display("yellow");
  box4.display("Green")
  box5.display("Blue")
  box6.display("Indigo")
  box7.display("Purple")
  box8.display("Pink")
  box9.display("Brown")
  box10.display("Black")
  box11.display("white")
  box12.display("Salmon")
  box13.display("Coral")
  box14.display("CornflowerBlue")
  box15.display("lightRed")
  box16.display("DarkOrchid")
  box17.display("Crimson")
  box18.display("Turquoise")
  box19.display("lightBlue")
  box20.display("cyan")

  monster.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}

