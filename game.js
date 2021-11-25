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
  
  
  // function to display questions
  this.display = function () {
    background(0, 0, 0);
    fill(255, 255, 255);
    // display the grade
    text("Grade " + this.grade, 10, 30);
    textSize(15);
    // provide instructions
    text("Type your answer to the following question in the space \nprovided.", 10, 75);
    // display piggy bank
    document.getElementById("mydiv").style.visibility="visible";
    
    
    rect(15, 125, 370, 250);
    fill(0, 0, 0);
    textSize(30);
    // display the question
    text(this.num1 + " " + this.operation + " " + this.num2 + " = ", 75, 200);
    textSize(16);
    
    // if the input value has changed, call the textInput function
    input.changed(textInput);
    
    fill(255, 255, 255);
    // use Math.round(_ * 100) / 100 to round to 2 decimal places
    text("Total: " + Math.round(moneyDonated * 100)/100, 232, 40);
    
  };
  
  // called to display the answer to the question
  this.showAnswer = function () {
    // display piggy bank
    document.getElementById("mydiv").style.visibility="visible";
    // redraw background
    background(0, 0, 0);
    fill(255, 255, 255);
    strokeWeight(5);
    stroke(0, 0, 0);
    rect(0, 0, 200, 400);
    noStroke();
    // button to go to next question
    fill(0, 0, 0);
    text("Click to continue.", 25, 200);
    // display question
    fill(255, 255, 255);
    text(this.num1 + " " + this.operation + " " + this.num2 + " = ", 250, 150);
    
    // convert the answer to be stored as a number instead of as a string
    ans = parseInt(ans);
    
    // if the operation is a +, then add the two numbers and display the answer
    if (this.operation === '+') {
      fill(0, 255, 0);
      text(this.num1 + this.num2, 330, 150);
      if (ans === this.num1 + this.num2) {
        fill(0, 255, 0);
        text("Correct! \nYou donated 2 cents!", 205, 225);
        
        // display a coin on top of piggy bank
        fill(222,192,0);
        ellipse(335,20,15,15);
          
        
        donate = true;
        //text(this.num1 + this.num2, 250, 200);
      } else if (ans != this.num1 + this.num2) {
        fill(222, 20, 27);
        text("Incorrect.", 250, 225);
        donate = false;
      }
    }
    
    // if the operation is a -, then subtract the two numbers and display the answer
    if (this.operation === '-') {
      fill(0, 255, 0);
      text(this.num1 - this.num2, 330, 150);
      if (ans === this.num1 - this.num2) {
        fill(0, 255, 0);
        text("Correct! \nYou donated 2 cents!", 205, 225);
        
        // display a coin on top of piggy bank
        fill(222,192,0);
        ellipse(335,20,15,15);
        
        
        donate = true;
      } else if (ans != this.num1 - this.num2) {
        fill(222, 20, 27);
        text("Incorrect.", 250, 225);
        donate = false;
      }
    }
    
  };
  

};

