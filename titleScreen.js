var titleScreen = function () {
  // hide piggybank image
  document.getElementById("mydiv").style.visibility="hidden";
  // draw background
  background(0, 0, 0);
  // write title of game
  fill(255, 255, 255);
  textSize(40);
  text("Math review", 100, 150);
  textSize(16);
  text("By: Rachael D. & Sonya R.", 107, 180);
  rect(100, 300, 200, 40);
  noStroke();
  rect(350,130,10,50);
  rect(330,150,50, 10);
  rect(170,30,50,10);
  rect(170,50,50,10);
  rect(50,70,50,10);
  rect(30,160,50,10);
  ellipse(55,140,15,15);
  ellipse(55,190,15,15);
  textSize(90);
  text("x",300,90);
  textSize(20);
  fill(0, 0, 0);
  text("Click to begin", 135, 330);
};
