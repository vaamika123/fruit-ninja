var PLAY=1;
var END=0;
var gameState=PLAY;
var fruit10,fruit20,fruit30,fruit40;
var monsters, monsters1;
var monstersGroup,monsters1Group, monster1, monster2;
var gameoverimage, gameover, gameoversound;
var score =0,scoresound;
var sword, swordImage;
var backim;
var fruit1Group,fruit2Group,fruit3Group,fruit4Group;

function preload(){
  
  fruit10 = loadImage("fruit1.png");
  fruit20 = loadImage("fruit2.png");
  fruit30 = loadImage("fruit3.png");
  fruit40 = loadImage("fruit4.png");

  monster1 = loadImage("alien1.png");
  monster2 = loadImage("alien2.png");
  
  swordImage = loadImage("sword.png");
  scoresound = loadSound("knifeSwooshSound.mp3");

  gameoverimage = loadImage("gameover.png");
  gameoversound = loadSound("gameover.mp3");
  
  backim = loadImage("back.jpg");
   
}
function setup() {
  createCanvas(400, 400);
  
  gameover = createSprite(200,200,250,100);
  gameover.addImage(gameoverimage);
  gameover.scale = 1.1;

  sword = createSprite(200,100,150,150);
  sword.addImage(swordImage);
  sword.scale = 0.6
  sword.setCollider("circle", 0,0,50);
  sword.debug = true;
  
  fruit1Group = new Group();
  fruit2Group = new Group();
  fruit3Group = new Group();
  fruit4Group = new Group();
  monstersGroup = new Group();

}

function draw() {
  background(backim);
  
  sword.depth= background.depth;
  sword.depth = sword.depth +1;
  
  gameover.depth= background.depth;
  gameover.depth = gameover.depth +1;
  
  text.depth= box.depth;
  text.depth = text.depth +1;
  
  text("score: "+ score,330,30);
  
  
  if (gameState === PLAY){
    
    sword.x = World.mouseX;
    sword.y = World.mouseY;
    
    gameover.visible = false;
    
    var rando = Math.round(random(1,4));
    switch(rando){

      case 1: fruit11();
              break;
      case 2: fruit22();
              break;
      case 3: fruit33();
              break;
      case 4: fruit44();
              break;
      default: 
              break;
         }    

  if (sword.isTouching(fruit1Group)) {

        score = score + 1; 
        scoresound.play();
        fruit1Group.destroyEach(); 

  }
    
  if (sword.isTouching(fruit2Group)) {

        score = score + 1; 
        scoresound.play();
        fruit2Group.destroyEach(); 

  }  
    
  if (sword.isTouching(fruit3Group)) {

        score = score + 1; 
        scoresound.play();
        fruit3Group.destroyEach(); 

  }  
    
  if (sword.isTouching(fruit4Group)) {

        score = score + 1; 
        scoresound.play();
        fruit4Group.destroyEach(); 

  }  
   
  if (sword.isTouching(monstersGroup)) {
    
      sword.destroy();
      gameState = END;
      gameover.visible = true;
      gameoversound.play();
      
      
  }  
    fruit11();
    fruit22();
    fruit33();
    fruit44();
    monsters();
}
    
    else if(gameState === END){     
      
      fruit1Group.destroyEach(); 
      fruit2Group.destroyEach();
      fruit3Group.destroyEach();
      fruit4Group.destroyEach();
      
      fruit1Group.setVelocityXEach(0);
      fruit2Group.setVelocityXEach(0);
      fruit3Group.setVelocityXEach(0);
      fruit4Group.setVelocityXEach(0);
      
      monstersGroup.destroyEach();
      monstersGroup.setVelocityXEach(0);
      gameover.visible = true;
      //gameoversound.play();
      
      
            } 

  drawSprites();
}

function fruit11(){

   if (frameCount%50 === 0) {
     
     var fruit1;
     var ran = Math.round(random(1,2))

  switch(ran){

   case 1: fruit1 = createSprite
           (0,Math.round(random(60,350)),10,10);
           fruit1.velocityX = 2;
      if(score %6 === 0&&score>0){
        fruit1.velocityX = fruit1.velocity + 2;       
       
        }
           break;

   case 2: fruit1 = createSprite
           (400,Math.round(random(60,350)),10,10);  
           fruit1.velocityX = -2;
      if(score %6 === 0&&score>0){
         fruit1.velocityX = fruit1.velocity - 2;       
       
         }
           break; 

   default:
           break;  
  }
     
     fruit1.addImage(fruit10);
     fruit1.scale = 0.2;
     fruit1.lifetime = 100;
     fruit1.depth = sword.depth
     sword.depth = sword.depth +1;
     fruit1Group.add(fruit1);
     fruit1Group.setLifetimeEach(-1);
     
     fruit1.depth = background.depth
     fruit1.depth = fruit1.depth +1;
     
}
             
}


function fruit22(){

   if (frameCount%70 === 0) {
     
     var fruit2;
     var ran = Math.round(random(1,2))

  switch(ran){

   case 1: fruit2 = createSprite
           (0,Math.round(random(60,350)),10,10);
           fruit2.velocityX = 2;
      if(score%7 ===0&&score>0){
    
        fruit2.velocituX = fruit2.velocity+2;
       
      }
           break;

   case 2: fruit2 = createSprite
           (400,Math.round(random(60,350)),10,10);  
           fruit2.velocityX = -2;
      if(score%7 ===0&&score>0){
    
         fruit2.velocityX = fruit2.velocity-2;
        }
           break; 

   default:
           break;  
  }
     fruit2.addImage(fruit20);
     fruit2.scale = 0.2;
     fruit2.lifetime = 100;
     fruit2.depth = sword.depth
     sword.depth = sword.depth +1;
     fruit2Group.add(fruit2);
     fruit2Group.setLifetimeEach(-1);
     
     fruit2.depth = background.depth
     fruit2.depth = fruit2.depth +1;
     
}

}

function fruit33(){

   if (frameCount%50 === 0) {
     
     var fruit3;
     var ran = Math.round(random(1,2))

  switch(ran){

   case 1: fruit3 = createSprite
           (0,Math.round(random(60,350)),10,10);
           fruit3.velocityX = 3;
      
      if(score%4 ===0&&score>0){
    
        fruit3.velocityX = fruit3.velocityX + 2;
      }
           break;

   case 2: fruit3 = createSprite
           (400,Math.round(random(60,350)),10,10);  
           fruit3.velocityX = -3; 
      
      if(score%4 ===0&&score>0){
    
         fruit3.velocityX = fruit3.velocityX - 2;
      }
           break; 

   default:
           break;  
  }
     
     fruit3.addImage(fruit30);
     fruit3.scale = 0.2;
     fruit3.lifetime = 100;
     fruit3.depth = sword.depth
     sword.depth = sword.depth +1;
     fruit3Group.add(fruit3);
     fruit3Group.setLifetimeEach(-1);
     
     fruit3.depth = background.depth
     fruit3.depth = fruit3.depth +1;
     
}
             
}

function fruit44(){

   if (frameCount%60 === 0) {
     
     var fruit4
     var ran = Math.round(random(1,2))

  switch(ran){

   case 1: fruit4= createSprite
           (0,Math.round(random(60,350)),10,10);
           fruit4.velocityX = 2;
      
      if(score%5 === 0&&score>0){
    
         fruit4.velocityX = fruit4.velocity +4;
      }   
           break;

   case 2: fruit4= createSprite
           (400,Math.round(random(60,350)),10,10);  
           fruit4.velocityX = -4; 
      
      if(score%5 === 0&&score>0){
    
        fruit4.velocityX = fruit4.velocity -2;
      }   
           break; 

   default:
           break;  
  }
     fruit4.addImage(fruit40);
     fruit4.scale = 0.2;
     fruit4.lifetime = 100;
     fruit4.depth = sword.depth
     sword.depth = sword.depth +1;
     fruit4Group.add(fruit4)
     fruit4Group.setLifetimeEach(-1);

     fruit4.depth=  background.depth;
     fruit4.depth= fruit4.depth +1;
     
}
             
}


function monsters(){

     if (frameCount%40 === 0) {
       
       var monsters;

        var ran = Math.round(random(1,2));
        switch(ran){

        case 1: monsters = createSprite
                (0,Math.round(random(40,350)),10,10);
                monsters.velocityX = 3;
                     monsters.depth = monsters.depth +1;
       if(score%3 === 0&&score>0){
         
         monsters.velocityX = monsters.velocityX + 3;
       }
                break;

        case 2: monsters = createSprite
                (400,Math.round(random(40,350)),10,10);
                monsters.velocityX = -5;  
                     monsters.depth = monsters.depth +1;
       if(score%3 === 0&&score>0){
         
         monsters.velocityX = monsters.velocityX - 3;
       }
                break;

        default:
                break;
        }    
                
                monsters.scale = 0.8;
                monsters.lifetime= 135;
                monsters.depth = sword.depth
                sword.depth = sword.depth +1;
       
                monsters.depth = background.depth
                  
                var rando = Math.round(random(1,2));
                      
                  switch(rando){
                      
                    case 1: monsters.addImage(monster1);
                            break;
                    case 2: monsters.addImage(monster2);
                            break;
                    default: 
                            break;
                  }
                    
                  monstersGroup.add(monsters);
                  
        }
                                       
        
}

