var fixedRect, movingRect;
var object1, object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(600, 400, 50, 80);
  object1.shapeColor = "green";
  object2 = createSprite(400, 600, 50, 80);
  object2.shapeColor = "green";
}

function draw() {
  background(0, 0, 0);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (isTouching(movingRect, object2)) {
      movingRect.shapeColor = "red";
      object2.shapeColor = "red";
  }

  else {
      movingRect.shapeColor = "green";
      object2.shapeColor = "green"
  }

  drawSprites();
}