// keep track of current scene
var scene = 0;
// keep track of money donated
var moneyDonated = 0;

// initialize input and answer variables
var input;
var ans;

// initialize grade1 variable
var grade1;

function setup() {
  createCanvas(400, 400);
  // create an input box
  input = createInput();
  // pass parameters to game function
  grade1 = new Game(1, 0, 10, ['+', '-']);
}

function draw() {
  // Call title screen function
  titleScreen();
  
  if (scene === 0) {
    titleScreen();
  } else if (scene === 1) {
    grade1.display();
  } else if (scene === 2) {
    grade1.showAnswer();
  }
}

// check if mouse is clicked
var mouseClicked = function () {
  // if the current scene is the title screen, advance to game scene
  if (scene === 0 && mouseX < 300 && mouseX > 100 && mouseY < 350 && mouseY > 300) {
    scene++;
  }
  
  // if the current scene is the display scene
  if (scene === 1 && mouseX < 375 && mouseX > 325 && mouseY < 350 && mouseY > 325) {
    //rect(325, 325, 50, 25);
    scene++;
    // fill(0, 0, 255);
    // rect(100, 100, 200, 200);
    
  }
};

// set the answer variable to be the value of the user's input
var textInput = function () {
  ans = input.value();
};
