var button;
var textarea;
var savedText;

function setup() {
  noCanvas();
  
  textarea = createElement('textarea', 'Enter text here!');
  textarea.size(300,400);

  createElement('br');
  button = createButton('push to save');
  
  button.mousePressed(saveText);
}

function saveText() {
  createP(textarea.value());
}