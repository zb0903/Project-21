var astronaut
var bathAnimation, brushAnimation, drinkAnimation, eatAnimation, gymAnimation, moveAnimation, sleepAnimation, backgroundAnimation

function preload() {

  bathAnimation = loadAnimation("images/bath1.png","images/bath2.png")
  brushAnimation = loadAnimation("images/brush.png")
  drinkAnimation = loadAnimation("images/drink1.png","images/drink2.png");
  eatAnimation = loadAnimation("images/eat1.png", "images/eat2.png");
  gymAnimation = loadAnimation("images/gym1.png","images/gym2.png","images/gym3.png","images/gym4.png");
  moveAnimation = loadAnimation("images/move1.png","images/move2.png");
  sleepAnimation = loadAnimation("images/sleep.png");
  backgroundAnimation = loadAnimation("images/iss.png");
}

function setup() {
  createCanvas(400, 400);
  
  astronaut = createSprite(300,100);
  astronaut.addImage("moving",moveAnimation);

}

function draw() {
  background(backgroundAnimation);
}





