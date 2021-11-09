//create game function
var game = function (){
  //set background
  background(0,0,0);
  //Generate random numbers
  var num1 = Math.floor(Math.random()*20);
  var num2 = Math.floor(Math.random()*20);
  var math1 = ["-","+"];
  
  fill(255,0,0);
  text(num1,90,100);
  text(math1[0],100,100);
  text(num2,110,100);
}
