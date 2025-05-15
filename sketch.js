//The setup function only happens once
 var flushing= 0;
 function setup() {
	createCanvas(500,500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(mouseY,176,210 ); //an RGB color for the canvas' background
  //circle
  stroke(54,51,88); // an RGB color for the circle's border
  strokeWeight (5);
  fill(225,217,222,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  rect(mouseX-25,mouseY-25,50,50)
  ellipse(100,100,flushing,flushing); // center of canvas, 20px dia

  fill(238,199,59)
rect(mouseX-25,mouseY-25,50,50);
stroke(248,76,19);

triangle(200,250,300,300,100,175,mouseX);
strokeWeight (0)
fill(248,197,163);
textSize(100);
textFont("Helvetica");
text('Happy',80,300)
stroke(0,0,0);
ellipse (random (width),random(height),10,10);
}
function mousePressed (){
  if (flushing>255)
    {flushing=0;}
  else{
    flushing= flushing+10;
  }
}
  
