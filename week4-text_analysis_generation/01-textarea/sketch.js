var button;     // variable to store reference to the button HTML element
var textarea;   // variable to store reference to the textarea HTML element
var savedText;  // variable to store the string from the textarea

function setup() {
  noCanvas();
  
  // create a textarea HTML element with some filler text
  textarea = createElement('textarea', 'Enter text here!');
  // access the size parameter of the textarea element.
  // remember all of this could be done in simple HTML too.
  textarea.size(300,400);

  // create a <br> HTML element to space things out
  createElement('br');

  // create a button and use the button variable to store a reference to it
  button = createButton('push to save');
  
  // register callback saveText to the mousePressed event of the button HTML element
  button.mousePressed(saveText);

  // this could instead be written with an anonymous callback like so:
  // button.mousePressed(function() {
  //   createP(textarea.value());
  // });
}

function saveText() {
  // save the value of the textarea to the savedText variable and create a new HTML paragraph element to display it.
  savedText = textarea.value();
  createP(savedText);
}