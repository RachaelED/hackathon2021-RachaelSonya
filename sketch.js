// keep track of current scene
var scene = 0;
// keep track of money donated
var moneyDonated = 0;

var grade1;

function setup() {
  createCanvas(400, 400);
  grade1 = new Game();
}

function draw() {
  // Call title screen function
  titleScreen();
  
  if (scene === 0) {
    titleScreen();
  } else if (scene === 1) {
    grade1.display();
  }
}

// check if mouse is clicked
var mouseClicked = function () {
  // if the current scene is the title screen, advance to game scene
  if (scene === 0 && mouseX < 300 && mouseX > 100 && mouseY < 350 && mouseY > 300) {
    scene++;
  }
};
