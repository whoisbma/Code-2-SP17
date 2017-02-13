## Week 4 - SIMPLE TEXT ANALYSIS AND GENERATION

###### February 13, 2017

Note the shared location of /libraries/ in this directory!

------

#### REVIEW: Callbacks

A *callback* is any function that is called by another function, that takes it as an argument. A lot of the time, a callback is called when *something* happens - for example an event registered to an HTML element.

For example - we can have a callback that is called whenever an HTML button is pressed. This means that this callback has been set to be called on the HTML event of onClick or mousePressed or whatever it is.

Using P5.js, this would look something like this:

```
var button = createButton('PUSH ME');
button.mousePressed(doSomething);
```

In this case, `doSomething` is actually refering to a function - a function that will be called whenever the mouse is pressed on the button. That function might be declared somewhere else in the code, like:

```
function doSomething() {
	console.log('don't push me bro');
}
```

or, the callback function might be declared *anonymously* - that is, without being assigned a name. To do this we would simply write the code declaring the function *inside the argument parentheses themselves*: 

```
button.mousePressed(function() {
	console.log('oof!');
});
```

------

#### Loading External Text

All of the code we've been writing so far involves self-contained data. When we create a string, we create it as a variable and give it a value written in quotes. But if we want to load a larger amount of text, like for example, a paragraph, or a whole book, as well as give a user the ability to load in any text they choose instead of some predefined variable that we create, we have a number of different techniques that we can apply.

We could do any of the following (and more):
* Create an area of editable text and save its value into a variable we've defined.
* Create an editable HTML element and save its HTML text whenever it's been changed.
* Create a button that loads an external file into the page from the user's filesystem.
* Create a div on the page that a user can drag a text file from the user's computer to.

These approaches can all be done via basic javascript, p5.js functionality, or any number of other javascript libraries out there.

###### Example 01-textarea

If we create a textarea HTML element via p5.js, you would write something like this:

```
var area = createElement('textarea', 'Some text to start initially.');
```

and then register a callback to a button that would save the value of the textarea to a variable.

###### Example 02-contenteditable

To create an editable HTML element, you have to set the contenteditable value to true. In p5.js:

```
var p = createP('this is editable');
p.attribute('contenteditable', 'true');
```

Or in HTML:

```<div contenteditable="true"></div>```

###### Example 04-load-file

To create a button that loads a file selection window, you would call createFileInput with a callback containing the file data as an argument. In that callback you can see the file type with the `type` field (i.e. text, image, etc.), see the size with the `size` field, and the contents of the file itself with the `data` field.

```
var fileSelect = createFileInput(gotFile);

function gotFile(file) {
  createDiv(file.name + ' ' + file.type + ' ' + file.size + 'bytes');

  // Handle image and text differently
  if (file.type === 'image') {
    createImg(file.data);
  } else if (file.type === 'text') {
    createP(file.data);
  }
}
```

###### Example 04-drag-drop

Creating an area of the page you can drag and drop a file to is very similar. Check out the example.

------

#### Split vs. SplitTokens()

An important distinction is the difference between vanilla Javascript's `split()`, p5.js's `split()`, and p5.js's `splittokens()`.

`split()` takes a single argument, and is a class method of the string object. It returns an array of strings taken out of the original string, separated by the supplied argument (a delimiter).

```
var sentence = 'The quick brown fox jumps over the lazy dog.';
var result = sentence.split(' ');
// returns ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
```

P5.js ALSO has a `split()` method, one that is not a method of the string object but instead lives on its own. However they both do the same thing.

```
var result = split(sentence, ' ');
```

Finally P5.js also has `splitTokens()`, which doesn't take a single delimitter but rather a whole string of delimiters!

```
var mishmosh = 'The quick,brown, fox jumps,over,the lazy, dog.';
// Splits by any comma OR a space!
var list2 = splitTokens(mishmosh, ', ')
```

Let's say you want to calculate the sum of a list of numbers in a string:

```
var numbers = '8,67,5,309';
var numlist = numbers.split(',');
var sum = 0;
for (var i = 0; i < numlist.length; i++) {
  sum = sum + Number(numlist[i]);  // Converting each String into an number!
}
console.log(sum);
```

vs join()

```
var words = ['it','was','a','dark','and','stormy','night'];
var sentence = join(words, ' ');
```

- to make a dadaist poem



- live code flesch index



------

**Homework Overview**