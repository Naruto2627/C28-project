const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ball;
var binImg,bin;

function preload(){
    binImg = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    crumpledPaper = new Paper();

    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    binPart1 = new Dustbin(910,505,1,120);
    binPart2 = new Dustbin(962,565,110,10);
    binPart3 = new Dustbin(1015,505,10,120);

    launcher = new Launcher(crumpledPaper.body,{x:370,y:270});
    Engine.run(engine);

}

function draw(){
    rectMode(CENTER);
    background("pink");
    

    //text(mouseX+","+mouseY,200,200);

    fill("blue");
    textStyle(BOLD);
    textSize(52);
    text("CRUMPLED BALLS 3",385,45);

    ground.display();
    crumpledPaper.display();
    binPart1.display();
    binPart2.display();
    binPart3.display(); 
      

    drawSprites();
    
}

/*function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
    }
}*/

function mouseDragged(){
    Matter.Body.setPosition(crumpledPaper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}
