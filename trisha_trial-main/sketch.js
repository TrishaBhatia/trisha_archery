var bg,player1,player2,arrow;
var p1,p2,arrows,player;
var gameState=0;
var m1,m2,m3,m4,m5,m6,m7;
var steps,step;
var RbGroup,Arrow;
var life;
var live=3;
function preload()
{
	bg=loadImage("bg2.jpg");
  m1=loadImage("monster1.png");
  m2=loadImage("monster2.png");
  m3=loadImage("monster3.png");
  m4=loadImage("monster4.png");
  m5=loadImage("monster5.png");
  m6=loadImage("monster6.png");
  m7=loadImage("monster7.png");
  player1=loadImage("player.png");
  player2=loadImage("player1.png");
  arrow=loadImage("arrow.png");
  steps=loadImage("steps.jpg");
  life=loadImage("life.png");
}

function setup() {
	createCanvas(windowWidth,windowHeight);
background(255)
step=createSprite(380,300);
    step.addImage(steps);
     RbGroup=createGroup();
     Arrow=createGroup();
  //p1.addImage(player1);
  //p1.scale=0.7;
  button1=createButton("Boy")
    button2=createButton("Girl")
      //p2=createSprite(500,400);
      //p2.addImage(player2);
      button1.position(800,220);
      button1.style('width', '200px');
      button1.style('height', '40px');
    
      button2.position(800,340);
      button2.style('width', '200px');
      button2.style('height', '40px');
    
     
        button1.mousePressed(() => {
          p1=createSprite(150,300);
          p1.addImage(player1)  
          p1.scale=0.8;
          gameState=1
          
        })
        button2.mousePressed(() => {
          p1=createSprite(150,400);
          p1.addImage(player2)
          gameState=1
          p1.scale=0.8;
         
        })

        //obstaclesGroup = new Group();
}


function draw() {
  if (gameState===0)
  {

    
    step.scale=0.4;

  }
  

  if(gameState===1)
  {
    
    background(bg);
    var score=createSprite(520,15);
    score.addImage(life);
    score.scale=0.1;
    fill("white");
    textSize(20);
    text(":"+live,550,20);
    step.scale=0.00000001;
   step.x=25;
    step.y=25;
    button1.hide()
    button2.hide()
    monster();
    p1.y=mouseY;
    if(keyDown("space")){
      spawnArrow();
    }
      for(var i=0;i<RbGroup.length;i++)
      {
        
      if (RbGroup.get(i).isTouching(Arrow))
         { 
          RbGroup.get(i).destroy();
          Arrow.destroyEach();
         
           }
          if(RbGroup.get(i).isTouching(p1))
     {
       live--;
      
     }
     }
     
     if(live===0)
     {
       gameState=2;
     }
      
    }
    if(gameState===2)
    {
      fill("black")
      text("Game Over",500,500);
	    text("Refresh To Start Over",500,550);
    }
    

 
  
  drawSprites();
 
}
function spawnArrow()
{
 arrows=createSprite(p1.x+5,p1.y-8);
 arrows.addImage(arrow);
 arrows.velocityX=10;
 arrows.scale=0.1;
 Arrow.add(arrows);
}

function monster()
{
 if(frameCount%80 === 0)
 {
  var mon1=createSprite(windowWidth,random(0,windowHeight-200),100,100);
 
  var r=Math.round(random(1,7));
  console.log(r);
  switch(r){
  case 1: mon1.addImage(m1);
  break;
  case 2: mon1.addImage(m2);
  break;
  case 3: mon1.addImage(m3);
  break;
  case 4: mon1.addImage(m4);
  break;
  case 5: mon1.addImage(m5);
  break;
  case 6: mon1.addImage(m6);
  break;
  case 7: mon1.addImage(m7);
  break;
  default:break;
 }
  mon1.scale=0.5;
  mon1.velocityX=-5;
  RbGroup.add(mon1);
  mon1.debug=true;
}
 }

