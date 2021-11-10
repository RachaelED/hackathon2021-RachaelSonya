//create game function
// pass in values for the lowest/highest numbers and an array of possible operations
var Game = function (g, l, h, o){
  this.grade = g;
  this.low = l;
  this.high = h;
  this.operation = o[Math.floor(random(0, o.length))];
  this.num1 = Math.floor(random(this.low, this.high));
  this.num2 = Math.floor(random(this.low, this.high));
  
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
    
    fill(0, 0, 0);
    text(scene, 200, 200);
    
  };
  
  this.showAnswer = function () {
   
    // background(255, 0, 0);
    
    if (this.operation === '+') {
      fill(0, 255, 0);
      text(this.num1 + this.num2, 250, 200);
      if (ans === this.num1 + this.num2) {
        fill(0, 0, 255);
        text("Correct!", 200, 200);
        text(this.num1 + this.num2, 250, 200);
      }
    }
  };
  

};
