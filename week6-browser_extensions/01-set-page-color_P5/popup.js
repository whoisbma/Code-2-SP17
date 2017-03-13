var button;

function setup() {
	noCanvas();
	button = select('#change-color');
	button.mousePressed(changeColor);
}

function draw() {

}

function changeColor() {
	chrome.tabs.executeScript(null,
		{code:"document.body.style.backgroundColor='red';"});
	window.close();
}