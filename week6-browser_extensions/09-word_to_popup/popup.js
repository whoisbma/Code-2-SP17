var numWordsDiv;
var numWords;

function setup() {
	createCanvas(300,300);
	textAlign(CENTER, CENTER);
	noStroke();

	numWordsDiv = select('#word-count');

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {type: "getCount"}, function(response) {
			numWords = response;
			numWordsDiv.html(numWords);
		});
	});
}

function draw() {
	background(255);
	var ellipseSize = map(numWords,0,1000,0,300);
	fill(255,0,0);
	ellipse(width/2, height/2, ellipseSize, ellipseSize);
	fill(0);
	text(numWords + " words on this page", width/2, height/2);
}