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

  // create a new array to hold the result of the reshuffling
  var jumbledArr = [];

  // loop through the array, pick a random index, add it to the new array, and remove it from the old array
  for (var i = 0; i < length; i++) {
    var whichIndex = int(random(textArr.length));
    jumbledArr.push(textArr[whichIndex]);
    textArr.splice(whichIndex, 1);
  }

  // join the new jumbled array into a single string, separated by spaces
  var newString = join(jumbledArr, ' ');
  createP("NEW TEXT: " newString);
}