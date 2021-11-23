//create game function
// pass in values for the lowest/highest numbers and an array of possible operations
var Game = function (g, l, h, o){ 
  this.grade = g;
  this.low = l;
  this.high = h;
  this.operation = o[Math.floor(random(0, o.length))];
  this.num1 = Math.floor(random(this.low, this.high));
  // generate num2 such that it is smaller than num1
  this.num2 = Math.floor(random(this.low, this.num1));
  
  
  this.display = function () {
    background(0, 0, 0);
    fill(255, 255, 255);
    text("Grade " + this.grade, 10, 30);
    textSize(15);
    text("Type your answer to the following question in the space \nprovided.", 10, 75);

    
    rect(15, 125, 370, 250);
    fill(0, 0, 0);
    text(this.num1 + " " + this.operation + " " + this.num2 + " = ", 100, 150);
    
    // Call textInput function to store input as the answer
    input.changed(textInput);
    fill(0, 0, 0);
    text("Your answer: " + ans, 15, 300);
    
    // button to check answer
    fill(0, 0, 0);
    rect(325, 325, 50, 25);
    fill(255, 255, 255);
    text("Check", 325, 345);
    
    fill(255, 0, 0);
    text(moneyDonated, 250, 25);
    
  };
  
  // called to display the answer to the question
  this.showAnswer = function () {
    
    // redraw background
    background(0, 0, 0);
    fill(255, 255, 255);
    strokeWeight(5);
    stroke(0, 0, 0);
    rect(0, 0, 200, 400);
    noStroke();
    fill(0, 0, 0);
    text("Click to continue.", 25, 200);
    // display question
    fill(255, 255, 255);
    text(this.num1 + " " + this.operation + " " + this.num2 + " = ", 250, 150);
    
    // convert the answer to be stored as a number instead of as a string
    ans = parseInt(ans, 10);
    
    // if the operation is a +, then add the two numbers and display the answer
    if (this.operation === '+') {
      fill(0, 255, 0);
      text(this.num1 + this.num2, 330, 150);
      if (ans === this.num1 + this.num2) {
        fill(0, 0, 255);
        text("Correct! \nYou donated 2 cents!", 205, 225);
        fill(222,192,0);
        ellipse(310,10,15,15);
        //moneyDonated += 0.02;
        donate = true;
        //text(this.num1 + this.num2, 250, 200);
      } else if (ans != this.num1 + this.num2) {
        text("Incorrect.", 250, 225);
        donate = false;
      }
    }
    
    // if the operation is a -, then subtract the two numbers and display the answer
    if (this.operation === '-') {
      fill(0, 255, 0);
      text(this.num1 - this.num2, 330, 150);
      if (ans === this.num1 - this.num2) {
        fill(0, 0, 255);
        text("Correct! \nYou donated 2 cents!", 205, 225);
        //moneyDonated += 0.02;
        donate = true;
      } else if (ans != this.num1 - this.num2) {
        text("Incorrect.", 250, 225);
        donate = false;
      }
    }
    
  };
  

};
