var fixedRect, movingRect;
var obj1,obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 =createSprite(100,100,40,40);
  obj1.shapeColor="green"

  obj2=createSprite(200,100,40,40);
  obj2.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(obj1,movingRect)){                               
    movingRect.shapeColor = "blue";
    obj1.shapeColor = "blue";
  }
  else{                                         
    movingRect.shapeColor = "green";
    obj1.shapeColor = "green";
  }
  
  drawSprites();
}
function isTouching(p1,p2){    //function definition

  if (p1.x - p2.x < p1.width/2 + p2.width/2   //true
    && p2.x - p1.x < p1.width/2 + p2.width/2
    && p1.y - p2.y < p1.height/2 + p2.height/2
    && p2.y - p1.y < p1.height/2 + p2.height/2) {
      return true;
}
else {  //false
      return false;
}


}