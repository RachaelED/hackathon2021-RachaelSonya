//create game function
var Game = function (){
  this.num1 = 20;
  this.num2 = 10;
  
  this.display = function () {
    background(0, 0, 0);
    fill(255, 0, 0);
    text(this.num1 + "+" + this.num2, 100, 100);
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
