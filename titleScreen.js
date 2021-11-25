var titleScreen = function () {
  // hide piggybank image
  document.getElementById("mydiv").style.visibility="hidden";
  // draw background
  background(0, 0, 0);
  // write title of game
  fill(255, 255, 255);
  textSize(40);
  text("Math review", 100, 150);
  // names
  textSize(16);
  text("By: Rachael D. & Sonya R.", 107, 180);
  // button rectangle
  rect(105, 220, 200, 40);
  noStroke();
  // addition sign
  rect(350,130,10,50);
  rect(330,150,50, 10);
  // equals sign
  rect(170,30,50,10);
  rect(170,50,50,10);
  // subtraction sign
  rect(50,70,50,10);
  // division sign
  rect(30,160,50,10);
  ellipse(55,140,15,15);
  ellipse(55,190,15,15);
  // multiplication sign
  textSize(90);
  text("x",300,90);
  // text for button
  textSize(20);
  fill(0, 0, 0);
  text("Click to begin", 145, 245);
};

