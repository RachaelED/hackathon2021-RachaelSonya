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
  };
  
  //this.operation = ["-", "+"];
  //this.operation = '+';
  
  //text(this.num1 + this.operation + this.num2);
  
  
  
  
  //set background
  //background(0,0,0);
  //Generate random numbers
  //var num1 = Math.floor(Math.random()*20);
  //var num2 = Math.floor(Math.random()*20);
  //var math1 = ["-","+"];
  
  //var ans 
  //while(ans!="STOP"){
  //fill(255, 255, 255);
  //text(num1,90,100);
  //text(math1[0],100,100);
  //text(num2,110,100);
  //}

};
