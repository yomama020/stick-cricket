const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function preload(){
    batImg = loadImage("../images/cricketBat.png")
    bgImg = loadImage("../images/stick cricket photo.jpeg")
    ballImg = loadImage("../images/—Pngtree—white cricket ball png 3d_4354764.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    bat = Bodies.rectangle(550,265,200,200);

    ball = Bodies.circle(303,46,10,{isStatic: true});

}

function draw(){
    background(bgImg);
    
    //console.log("mouse: " + mouseX + ", ", mouseY);
    textSize(20)
    fill(255)
    text("mouse: " + mouseX + ", "+ mouseY,100,100)
    
    Engine.update(engine);

    ground.display();
    image(ballImg, ball.position.x, ball.position.y, 20,20)
    image(batImg, bat.position.x, bat.position.y, 200,200); 

    if(ball.position.y === 280){
        Matter.Body.setVelocity(ball,{x:0,y:0})
        Matter.Body.setVelocity(ball,{x: random(-1,1),y: 1})
    }

}

function keyPressed(){
    
    console.log("key pressed")
    //82 is the ASCII code of R key
    //114 is the ASCII code for r key
    if(keyCode === 82 || keyCode === 114){
        Matter.Body.setPosition(ball, {x: 700, y: 45});
        Matter.Body.setStatic(ball, true);
        //Matter.Body.applyForce(ball,ball.position,{x:10,y:145});
        //https://www.w3schools.com/charsets/ref_html_ascii.asp
        console.log("r")
    }
    else
    //32 is the ASCII code for space key
    if(keyCode === 32){
            Matter.Body.setStatic(ball, false);
        //Matter.Body.setVelocity(body, velocity)
          Matter.Body.setVelocity(ball,{x:0 ,y:3 })
          console.log("space")
    }
}