function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.r = 40;
  this.col = color(255);
  this.vx = random(-2,2);
  this.vy = random(-2,2);

  this.changeColor = function() {
    this.col = color(random(255), random(255), random(255));
  };

  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
    this.col = 255;
  };

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  };

  this.update = function() {

    this.x += this.vx;
    this.y += this.vy;

    if (this.x > width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = width;
    }

    if (this.y > height) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = height;
    }
  };
}

var bubbles = [];
var displayEllipses = true;

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 20; i++) {
    bubbles[i] = new Bubble(random(width),random(height));
  }
}

function draw() {
  background(0);

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    if (displayEllipses) {
      bubbles[i].display();
    }
    for (var j = i+1; j < bubbles.length; j++) {
      if (bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor();
        bubbles[j].changeColor();
        stroke(255);
        line(bubbles[i].x, bubbles[i].y, bubbles[j].x, bubbles[j].y);
      }
    }
  }
}

function mousePressed() {
  displayEllipses = !displayEllipses;
}