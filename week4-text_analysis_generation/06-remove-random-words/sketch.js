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
  savedText = textarea.value();
  createP("ORIGINAL TEXT: " + savedText);

  // get the array of all the words from the savedText variable
  var textArr = splitTokens(savedText, '.:;?! !@#$%^&*()+');
  var length = textArr.length;

  // how many elements to remove?
  var numToRemove = textArr.length/2;

  // loop through the array, pick a random index, remove it from the array
  for (var i = 0; i < numToRemove; i++) {
    var whichIndex = int(random(textArr.length));
    textArr.splice(whichIndex, 1);
  }

  // join the array into a single string, separated by spaces
  var newString = join(textArr, ' ');
  createP("NEW TEXT: " + newString);
}