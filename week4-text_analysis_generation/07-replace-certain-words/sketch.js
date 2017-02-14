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
  createP("original text: " + savedText);

  // get the array of all the words from the savedText variable
  var textArr = splitTokens(savedText, '.:;?! !@#$%^&*()+');
  var length = textArr.length;

  // loop through the array, if the word found is 'I' or 'i', replace it with 'you', etc.
  for (var i = 0; i < textArr.length; i++) {
    if (textArr[i] === "I" || textArr[i] === "i") {
      textArr[i] = "you";
    }
    if (textArr[i] === "My" || textArr[i] === "my") {
      textArr[i] = "your";
    }
    if (textArr[i] === "Our" || textArr[i] === "our") {
      textArr[i] = "your";
    }
  }

  // join the array into a single string, separated by spaces
  var newString = join(textArr, ' ');
  createP("NEW TEXT: " + newString);
}