//create game function
// pass in values for the lowest/highest numbers and an array of possible operations
var Game = function (g, l, h, o){ 
  this.grade = g;
  this.low = l;
  this.high = h;
  this.operation = o[Math.floor(random(0, o.length))];
  this.num1 = Math.floor(random(this.low, this.high));
  this.num2 = Math.floor(random(this.low, this.high));
  
  while (this.num1 > this.num2) {
    this.num1 = Math.floor(random(this.low, this.high));
  }
  
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
  
  this.showAnswer = function () {
    
    // redraw background
    background(0, 0, 0);
    // display question
    fill(255, 255, 255);
    text(this.num1 + " " + this.operation + " " + this.num2 + " = ", 100, 150);
    
    // convert the answer to be stored as a number instead of as a string
    ans = parseInt(ans, 10);
    
    // if the operation is a +, then add the two numbers and display the answer
    if (this.operation === '+') {
      fill(0, 255, 0);
      text(this.num1 + this.num2, 200, 150);
      if (ans === this.num1 + this.num2) {
        fill(0, 0, 255);
        text("Correct! You donated 2 cents!", 150, 225);
        moneyDonated += 0.02;
        text(moneyDonated, 100, 300);
        //text(this.num1 + this.num2, 250, 200);
      } else if (ans != this.num1 + this.num2) {
        text("Incorrect.", 150, 225);
      }
    }
    
    // if the operation is a -, then subtract the two numbers and display the answer
    if (this.operation === '-') {
      fill(0, 255, 0);
      text(this.num1 - this.num2, 200, 150);
      if (ans === this.num1 - this.num2) {
        fill(0, 0, 255);
        text("Correct! You donated 2 cents!", 150, 225);
        moneyDonated += 0.02;
      } else if (ans != this.num1 - this.num2) {
        text("Incorrect.", 150, 225);
      }
    }
    
  };
  

};
