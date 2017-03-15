// p5 can not be executed the normal "global" way -
// instead a sketch instance has to be manually created.

// this works exactly the same as the usual way, except that the whole sketch lives inside the top function, which is then called below. 

// also, note that every p5 function is being called with the p5 namespace.

var sketch = function(p5) {
	var canvas;

	p5.setup = function() {
		console.log('runnning p5 setup');
		canvas = p5.createCanvas(window.innerWidth,window.innerHeight);
		canvas.position(0,0);
		canvas.style('z-index', '-1');
		p5.background(255,150,150);
		p5.noStroke();
	};

	p5.draw = function() {
		p5.fill(255);
		p5.ellipse(p5.mouseX, p5.mouseY, 100, 100);
	};
};

var p5sketch = new p5(sketch);