/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;*/

//var engine;
var bg1 ,girl, girlWalk, girlJump, girlDead;
var momImage , mom;
var ground,bg2,bg3,start,start1;
var gameState = "OP";
function preload(){
bg1 = loadImage("Capture.PNG");
bg3 = loadImage("890.jpg");
start1 = loadImage("0.png")
girlWalk = loadAnimation("Run1.png","Run2.png","Run3.png","Run4.png",
"Run5.png","Run6.png","Run7.png","Run8.png");
/*girlJump = loadAnimation("Jump (1).png","Jump (2).png","Jump (3).png","Jump (4).png","Jump (5).png","Jump (6).png",
"Jump (7).png","Jump (8).png","Jump (9).png","Jump (10).png");
girlDead = loadAnimation("Dead (1).png","Dead (2).png","Dead (3).png","Dead (4).png","Dead (5).png","Dead (6).png",
"Dead (7).png","Dead (8).png","Dead (9).png","Dead (10).png")*/
}

function setup(){
    createCanvas(1000,350);
    //engine = Engine.create();
    //world = engine.world;

    bg2 = createSprite(0,174,1000,350);
    bg2.addImage('abc' ,bg1);
    bg2.velocityX = -5;
    bg2.scale = 0.85
    girl = createSprite(70,260,20,20);
    girl.addAnimation("abc" ,girlWalk);
    girl.scale = 0.2;

    ground = createSprite(350,340,1300,5);
    ground.visible = false;
    
    start = createSprite(400,240,10,10);
    start.addImage("st" ,start1);
    start.scale = 0.1

}

function draw(){
    background(bg3);
    if(gameState=="OP"){
        textSize(22);
        textFont('Impact');
        fill("black");
        text("There is an evil doer (not from earth) who wants to destroy all planets in the solar system, ",90,100)
       text("But only earth has the machine that can destroy all of them,",190,140);
         text("Unfortunately he has already acquired the device but it still has some time before it can detonate.",90,180);
         girl.visible = false;
         ground.visible = false;
         bg2.visible = false;
         if(mousePressedOver(start)){
             gameState="PLAY";
         }
    }
if(gameState=="PLAY"){
if(bg2.x <400){
    bg2.x = 600
}
if(keyDown("space") && girl.y >= 159){
    girl.velocityY = -5;
   
}
girl.velocityY = girl.velocityY+0.8;
girl.collide(ground);
start.visible = false;
girl.visible = true;
         ground.visible = true;
         bg2.visible = true;
}
drawSprites();

}
//