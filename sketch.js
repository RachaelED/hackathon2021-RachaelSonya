// keep track of current scene
var scene = 0;
// keep track of money donated
var moneyDonated = 0;
var donate = false;

// initialize input and answer variables
var input;
var check;
var ans;

// initialize grade1 variable
var grade1;

function setup() {
  createCanvas(400, 400);
  // pass parameters to game function
  grade1 = new Game(1, 0, 10, ['+', '-']);
}

function draw() {
  // Call title screen function
  titleScreen();
  
  // switch between the scenes
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
  if (scene === 0 && mouseX < 305 && mouseX > 105 && mouseY < 260 && mouseY > 200) {
    // set the variable input to be an input box
    input = createInput();
    // position it at (x, y)
    input.position(200, 265);
    // set the variable check to be a button that says "Check"
    check = createButton('Check');
    // position it at (x, y)
    check.position(325, 265);
    // establish that if the button is pressed, call the checkAnswer function
    check.mousePressed(checkAnswer);
    // then, advance to the next scene to show the questions
    scene++;
  }
  
  // if the showAnswer scene is being displayed
  if (scene === 2 && mouseX < 200) {
    
    // check if the value of donate is true (did the user answer correctly)
    if (donate === true) {
      // increase the value of moneyDonated by 2 cents
      moneyDonated += 0.02;
    }
    
    // reset donate to false
    donate = false;
    // reset the variable grade1 to be a new Game (question) and pass in parameters
    grade1 = new Game(1, 0, 10, ['+', '-']);
    // reset the input value to read nothing (so that the last thing input by the user isn't still present)
    input.value('');
    // reset the position of the input box and check button to their regular positions
    input.position(200, 265);
    check.position(325, 265);
    // go back to scene 1 (display a question)
    scene = 1;
 }
  
};

// set the ans variable to be the value of the user's input
var textInput = function () {
  ans = input.value();
};

// called when the 'check' button is pressed
var checkAnswer = function () {
  // move the position of the input box and check button to be off of the canvas so that it doesn't show up on showAnswer screen
  input.position(-500, -500);
  check.position(-500, -500);
  // advance the scene to 2 so that it displays the answer screen
  scene = 2;
};
