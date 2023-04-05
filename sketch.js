var tileSize = 18.75
var world = []
var worldWidth
var worldHeight
var targetX;
var targetY;

function setup() {
  bg = loadImage('noun634.png');
  
let canvas = createCanvas(600, 600);
 canvas.parent('sketch-container');
  
  noStroke();
  worldWidth = int(width / tileSize)
  worldHeight = int(height / tileSize)
  for (var x = 0; x < worldWidth; x++) {
    var colum = []
    for (var y = 0; y < worldHeight; y++) {
      if (noise(x * 100, y * 100) > 0.47) {
        colum.push(-1)
      } else {
        colum.push(0)
      }
    }
    world.push(colum)
  }
  console.log(world)
  
   input = createInput();
  input.position(0, 600);

  button = createButton('submit');
  button.position(input.x + input.width, 600);
  button.mousePressed(greet);

  greeting = createElement('h2');
  textAlign(CENTER);
  textSize(50)

function greet() {
  const password = input.value(); 
   if (password == 1623) {
      greeting.html('Congratulations! Puzzle #Noun634  Solved');
      } else {
      greeting.html('Not Correct')
      textSize(50)}
  
    input.value('');
}}

function draw(){
  targetX = int(mouseX / tileSize)
  targetY = int(mouseY / tileSize)
    image(bg,0,0,600,600)
  
  if ((targetX == 4 && targetY ==5)||
      (targetX == 5 && targetY ==5)||
      (targetX == 5 && targetY ==6)||
      (targetX == 5 && targetY ==7)||
      (targetX == 5 && targetY ==8)||
      (targetX == 5 && targetY ==9)||
      (targetX == 5 && targetY ==10)||
      (targetX == 5 && targetY ==11)||
      (targetX == 5 && targetY ==12)||
      (targetX == 5 && targetY ==13)||
      (targetX == 5 && targetY ==14)||
      
      (targetX == 9 && targetY == 9)||
      (targetX == 9 && targetY ==10)||
      (targetX == 9 && targetY ==11)||
      (targetX == 9 && targetY ==12)||
      (targetX == 9 && targetY ==13)||
      (targetX == 9 && targetY ==14)||
      (targetX == 9 && targetY ==15)||
      (targetX == 9 && targetY ==16)||
      (targetX == 9 && targetY ==17)||
      (targetX == 9 && targetY ==18)||
      (targetX == 9 && targetY ==19)||
      (targetX == 9 && targetY ==20)||
      (targetX == 9 && targetY ==21)||
      (targetX == 10 && targetY ==15)||
      (targetX == 11 && targetY ==15)||
      (targetX == 12 && targetY ==15)||
      (targetX == 13 && targetY ==15)||
      (targetX == 14 && targetY ==15)||
      (targetX == 15 && targetY ==15)||
      (targetX == 10 && targetY ==21)||
      (targetX == 11 && targetY ==21)||
      (targetX == 12 && targetY ==21)||
      (targetX == 13 && targetY ==21)||
      (targetX == 14 && targetY ==21)||
      (targetX == 15 && targetY ==21)||
      (targetX == 15 && targetY ==16)||
      (targetX == 15 && targetY ==17)||
      (targetX == 15 && targetY ==18)||
      (targetX == 15 && targetY ==19)||
      (targetX == 15 && targetY ==20)||
      (targetX == 15 && targetY ==21)||
      
      (targetX == 18 && targetY ==15)||
      (targetX == 19 && targetY ==15)||
      (targetX == 20 && targetY ==15)||
      (targetX == 21 && targetY ==15)||
      (targetX == 22 && targetY ==15)||
      (targetX == 23 && targetY ==15)||
      (targetX == 23 && targetY ==16)||
      (targetX == 23 && targetY ==17)||
      (targetX == 23 && targetY ==18)||
      (targetX == 23 && targetY ==19)||
      (targetX == 23 && targetY ==20)||
      (targetX == 23 && targetY ==21)||
      (targetX == 18 && targetY ==21)||
      (targetX == 19 && targetY ==21)||
      (targetX == 20 && targetY ==21)||
      (targetX == 21 && targetY ==21)||
      (targetX == 22 && targetY ==21)||
      (targetX == 18 && targetY ==22)||
      (targetX == 18 && targetY ==23)||
      (targetX == 18 && targetY ==24)||
      (targetX == 18 && targetY ==25)||
      (targetX == 18 && targetY ==26)||
      (targetX == 19 && targetY ==26)||
      (targetX == 20 && targetY ==26)||
      (targetX == 21 && targetY ==26)||
      (targetX == 22 && targetY ==26)||
      (targetX == 23 && targetY ==26)||
      
      (targetX == 26 && targetY ==19)||
      (targetX == 27 && targetY ==19)||
      (targetX == 28 && targetY ==19)||
      (targetX == 29 && targetY ==19)||
      (targetX == 30 && targetY ==19)||
      (targetX == 30 && targetY ==20)||
      (targetX == 30 && targetY ==21)||
      (targetX == 30 && targetY ==22)||
      (targetX == 30 && targetY ==23)||
      (targetX == 30 && targetY ==24)||
      (targetX == 30 && targetY ==25)||
      (targetX == 30 && targetY ==26)||
      (targetX == 30 && targetY ==27)||
      (targetX == 30 && targetY ==28)||
      (targetX == 30 && targetY ==29)||
      (targetX == 26 && targetY ==24)||
      (targetX == 27 && targetY ==24)||
      (targetX == 28 && targetY ==24)||
      (targetX == 29 && targetY ==24)||
      (targetX == 26 && targetY ==29)||
      (targetX == 27 && targetY ==29)||
      (targetX == 28 && targetY ==29)||
      (targetX == 29 && targetY ==29)  
   )
  { fill(60,240,60)
    rect(targetX * tileSize, targetY * tileSize, tileSize, tileSize)} 
    else {fill(30,120,180)
         rect(targetX * tileSize, targetY * tileSize, tileSize, tileSize)}
}
