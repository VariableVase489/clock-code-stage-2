var sc, mn, hr, scAngle;


function setup() {
  createCanvas(1425,775);
  
}

function draw() {
  background(25,255,255);  
  sc = second();
  mn = minute();
  hr = hour();
  translate(712.5,387.5);
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  stroke(255,0,0);
  strokeWeight(7);
  push();
  rotate(scAngle);
  line(0,0,0,-300);
  pop();

  angleMode(DEGREES);
  mnAngle = map(mn,0,60,0,360);
  stroke(0,255,0);
  strokeWeight(7);
  push();
  rotate(mnAngle);
  line(0,0,0,-150);
  pop();

  angleMode(DEGREES);
  hrAngle = map(hr,0,60,0,360);
  stroke(0,0,255);
  strokeWeight(7);
  push();
  rotate(hrAngle);
  line(0,0,0,-75);
  pop();

  drawSprites();
}