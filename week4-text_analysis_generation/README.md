## Week 4 - SIMPLE TEXT ANALYSIS AND GENERATION

###### February 13, 2017

------

**REVIEW: Callbacks**

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

**Loading External Text**

All of the code we've been writing so far involves self-contained data. When we create a string, we create it as a variable and give it a value written in quotes. But if we want to load a larger amount of text, like for example, a paragraph, or a whole book, as well as give a user the ability to load in any text they choose instead of some predefined variable that we create, we have a number of different techniques that we can apply.

We could do any of the following (and more):
* Create an area of editable text and save its value into a variable we've defined.
* Create an editable HTML element and save its HTML text whenever it's been changed.
* Create a button that loads an external file into the page from the user's filesystem.
* Create a div on the page that a user can drag a text file from the user's computer to.

These approaches can all be done via basic javascript, p5.js functionality, or any number of other javascript libraries out there.

ASOIDJSAOIDJKLSADJKSA EXAMPLESXD!

If we create a textarea HTML element via p5.js, you would write something like this:

```
var area = createElememt('textarea', 'Some text to start initially.');
```

and then register a callback to a button that would save the value of the textarea to a variable.

To create an editable HTML element, you have to set the contenteditable value to true. In p5.js:

```
var p = createP('this is editable');
p.attribute('contenteditable', 'true');
```

Or in HTML:

```<div contenteditable="true"></div>```


- createFileInput() text file

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

- split() vs. splittokens()

```
var spaceswords = 'The quick brown fox jumps over the lazy dog.';
// Splits by any space
var list1 = split(spacewords, ' ');
console.log(list1[0]);
console.log(list1[1]);

var commaswords = 'The, quick, brown, fox, jumps, over, the, lazy, dog.';
// Splits by any comma followed by a space
var list2 = split(commaswords, ', ')
for (var i = 0; i < list2.length; i++) {
  console.log(i + ': ' + list2[i]);
}

var mishmosh = 'The quick,brown, fox jumps,over,the lazy, dog.';
// Splits by any comma OR a space!
var list2 = splitTokens(mishmosh, ', ')
for (var i = 0; i < list2.length; i++) {
  console.log(i + ': ' + list2[i]);
}

// Calculate sum of a list of numbers in a string
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