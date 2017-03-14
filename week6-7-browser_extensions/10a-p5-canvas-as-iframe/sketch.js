function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(255);
  fill(random(255), random(255), random(255));
  ellipse(mouseX, mouseY, 100, 100);
}

function windowResized() {
   createCanvas(window.innerWidth, window.innerHeight);
}