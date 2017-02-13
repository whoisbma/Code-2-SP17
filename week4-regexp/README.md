## Week 4 - REGULAR EXPRESSIONS

###### February 13, 2017


Say we want to load an external string into the browser.

What's the best way do to that?

- textarea element via createElement()

```
var area = createElememt('textarea', 'Some text to start initially.');
```

- contenteditable = true

```
var p = createP('this is editable');
p.attribute('contenteditable', 'true');
```

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

- live code flesch index



------

**Homework Overview**