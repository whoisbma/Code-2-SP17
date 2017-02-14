## Week 4 - SIMPLE TEXT ANALYSIS AND GENERATION

###### February 13, 2017

Note the shared location of /libraries/ in this directory!

#### Homework Overview

1. Go through all the review notes below.
2. Make 

#### DADA and "the Cut Up Method", Oulipo, Erasures

Tristan Tzara - Romanian and French avant-garde poet, essayist, performance artist, one of the founders and central figures of the anti-establishment, anti-war, anti-bourgeois Dada movement of the early 20th century. Dada has ties to other avant garde artists of the time, notably Marcel Duchamp. 

Legend has it that at a surrealist rally in the 1920, Tzara created a poem by pulling words out of a hat, and a riot ensued.

From wikipedia:

*Many Dadaists believed that the 'reason' and 'logic' of bourgeois capitalist society had led people into war. They expressed their rejection of that ideology in artistic expression that appeared to reject logic and embrace chaos and irrationality. For example, George Grosz later recalled that his Dadaist art was intended as a protest "against this world of mutual destruction."*

*According to Hans Richter Dada was not art: it was "anti-art." Dada represented the opposite of everything which art stood for. Where art was concerned with traditional aesthetics, Dada ignored aesthetics. If art was to appeal to sensibilities, Dada was intended to offend.*

*As Hugo Ball expressed it, "For us, art is not an end in itself ... but it is an opportunity for the true perception and criticism of the times we live in."*

*A reviewer from the American Art News stated at the time that "Dada philosophy is the sickest, most paralyzing and most destructive thing that has ever originated from the brain of man." Art historians have described Dada as being, in large part, a "reaction to what many of these artists saw as nothing more than an insane spectacle of collective homicide."*

**TO MAKE A DADAIST POEM**

1. Take a newspaper.
2. Take some scissors.
3. Choose from this paper an article of the length you want to make your poem.
4. Cut out the article.
5. Next carefully cut out each of the words that makes up this article and put them all in a bag.
6. Shake gently.
7. Next take out each cutting one after the other.
8. Copy conscientiously in the order in which they left the bag.
9. Them poem will resemble you.
10. And there you are – an infinitely original author of charming sensibility, even though unappreciated by the vulgar herd.

[Burrough's cut up method](http://www.writing.upenn.edu/~afilreis/88v/burroughs-cutup.html)

ERASURES:

*Erasure is a form of found poetry or found art created by erasing words from an existing text in prose or verse and framing the result on the page as a poem. The results can be allowed to stand in situ or they can be arranged into lines and/or stanzas. Erasure is a way to give an existing piece of writing a new set of meanings, questions, or suggestions. It lessens the trace of authorship but requires purposeful decision making. What does one want done to the original text? Does a gesture celebrate, denigrate, subvert, or efface the source completely? One can erase intuitively by focusing on musical and thematic elements or systematically by following a specific process regardless of the outcome.*

[Erasure](https://en.wikipedia.org/wiki/Erasure_(artform))

**OULIPO**

*Oulipo (French pronunciation: short for French: Ouvroir de littérature potentielle; roughly translated: "workshop of potential literature") is a loose gathering of (mainly) French-speaking writers and mathematicians who seek to create works using constrained writing techniques.*

*Constraints are used as a means of triggering ideas and inspiration, most notably Perec's "story-making machine" which he used in the construction of Life: A User's Manual. As well as established techniques, such as lipograms (Perec's novel A Void) and palindromes, the group devises new techniques, often based on mathematical problems such as the Knight's Tour of the chess-board and permutations.*

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

###### Example 03-load-file

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

#### Split(), SplitTokens(), Join()

An important distinction is the difference between vanilla Javascript's `split()`, p5.js's `split()`, and p5.js's `splittokens()`.

`split()` takes a single argument, and is a class method of the string object. It returns an array of strings taken out of the original string, separated by the supplied argument (a delimiter, or separator).

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

`join()` also has a [p5.js](https://p5js.org/reference/#/p5/join) and [basic Javscript version](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join). Its the same idea in reverse - take an array and form it into a string.

For example, the p5.js approach:

```
var words = ['it','was','a','dark','and','stormy','night'];
var sentence = join(words, ' ');
```

------

#### Flesch Readability Index

The Flesch index is a simple way to calculate the general readibility of a text - that is, how easy or difficult it is to read. It is computed as a function of the **total words vs. total sentences**, and the **total syllables vs. total words**. In other words, the number of words per sentence and syllables per word should correspond to how difficult the text is to read.

**Flesch Index = 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words)**

It was developed under contract to the US Navy in 1975 by J. Peter Kincaid, who was building on top of earlier work by Dr. Rudolf Flesch. It was initially used by the military to assess the difficulty of technical manuals - and now is ubiquitous, being packaged in software like Microsoft Word and are part of all sorts of standards for text, especially those published in legal work, or by state or federal government.

Higher scores indicate material that is easier to read; lower numbers mark passages that are more difficult to read.

Score|School Level|Notes
-----------|-----------|--------------------------------
90.0–100.0 | 5th grade | Very easy to read. Easily understood by an average 11-year-old student.
80.0–90.0 | 6th grade | Easy to read. Conversational English for consumers.
70.0–80.0 | 7th grade | Fairly easy to read.
60.0–70.0 | 8th & 9th grade | Plain English. Easily understood by 13- to 15-year-old students.
50.0–60.0 | 10th to 12th grade | Fairly difficult to read.
30.0–50.0 | college | Difficult to read.
0.0–30.0 | college graduate | Very difficult to read. Best understood by university graduates.

From wikipedia:

Reader's Digest magazine has a readability index of about 65, Time magazine scores about 52, an average grade six student's written assignment (age of 12) has a readability index of 60–70 (and a reading grade level of six to seven), and the Harvard Law Review has a general readability score in the low 30s. The highest (easiest) readability score possible is around 120 (e.g. every sentence consisting of only two one-syllable words; "The cat sat on the mat." scores 116). The score does not have a theoretical lower bound. It is possible to make the score as low as wanted by arbitrarily including words with many syllables. The sentence "This sentence, taken as a reading passage unto itself, is being used to prove a point." has a readability of 74.1. The sentence "The Australian platypus is seemingly a hybrid of a mammal and reptilian creature." scores 24.4 as it has 26 syllables and 13 words. While Amazon calculates the text of Moby Dick as 57.9,[9] one particularly long sentence about sharks in chapter 64 has a readability score of −146.77.[10] One sentence in the beginning of "Swann's Way", by Marcel Proust, has a score of −515.1.[11] Even further, the chemical name for titin, 189,819 characters long, scores a −6,128,472, with 72,443 syllables. The U.S. Department of Defense uses the reading ease test as the standard test of readability for its documents and forms. Florida requires that life insurance policies have a Flesch reading ease score of 45 or greater.
  
The example we did in class was derived from code from Daniel Shiffman's A2Z course. It was a simplified version as we didn't have a particularly good check for syllables, among other things. Below is the explanation from the full [Daniel Shiffman example](http://shiffman.net/a2z/intro/):

Our pseudo-code will look something like this:

1. Read input file into String object
2. Count words
3. Count syllables
4. Count sentences
5. Apply formula
6. Write out report file

We know we can read in text from a file and store it in a String object as demonstrated in the example above. Now, all we have to do is examine that String object, counting the total words, sentences, and syllables, applying the formula as a final step. To count words, we’ll use split().

The first thing we’ll do is count the number of words in the text. We’ve seen in some of the examples above that we can accomplish this by using split() to split a String up into an array wherever there is a space. For this example, however, we are going to want to split by more than a space. A new word occurs whenever there is a space or some sort of punctuation.

```
var delimiters = '.:;?! !@#$%^&*()+';
var words = splitTokens(data, delimiters);
```

Now we have split up the text, we can march through all the words (tokens) and count their syllables.

```
for (var i = 0; i < words.length; i++) {
  var word = words[i];
  totalSyllables += countSyllables(word);
  totalWords++;
}
```

Ok, so countSyllables() isn’t a function that exists in JavaScript. We’re going to have to write it ourselves. The following method is not the most accurate way to count syllables, but it will do for now.

**Syllables = total # of vowels in a word (not counting vowels that appear after another vowel and when 'e' is found at the end of the word)**
  
* “beach” –> one syllable
* “banana” –> three syllables
* “home” –> one syllable
* Our code looks like this:

```
function countSyllables(word) {
  var syl    = 0;
  var vowel  = false;
  var length = word.length;

  // Check each word for vowels (don't count more than one vowel in a row)
  for (var i = 0; i < length; i++) {
    if (isVowel(word.charAt(i)) && (vowel == false)) {
      vowel = true;
      syl++;
    } else if (isVowel(word.charAt(i)) && (vowel == true)) {
      vowel = true;
    } else {
      vowel = false;
    }
  }

  var tempChar = word.charAt(word.length-1);
  // Check for 'e' at the end, as long as not a word w/ one syllable
  if (((tempChar == 'e') || (tempChar == 'E')) && (syl != 1)) {
    syl--;
  }
  return syl;
}

// Check if a char is a vowel (count y)
function isVowel(c) {
  if      ((c == 'a') || (c == 'A')) { return true;  }
  else if ((c == 'e') || (c == 'E')) { return true;  }
  else if ((c == 'i') || (c == 'I')) { return true;  }
  else if ((c == 'o') || (c == 'O')) { return true;  }
  else if ((c == 'u') || (c == 'U')) { return true;  }
  else if ((c == 'y') || (c == 'Y')) { return true;  }
  else                               { return false; }
}
```

Counting sentences is a bit simpler. We’ll just split the content using periods, question marks, exclamation points, etc. (“.:;?!”) as delimiters and count the total number of elements in the resulting array. This isn’t terribly accurate, but its ok for our purposes.

```
// Look for sentence delimiters
var sentenceDelim = '.:;?!';
var sentences = splitTokens(data, sentenceDelim);
totalSentences = sentences.length;
```

Now, all we need to do is apply the formula, generate a report.

```
// Calculate flesch index
var f1 = 206.835;
var f2 = 84.6;
var f3 = 1.015;
var r1 = totalSyllables / totalWords;
var r2 = totalWords / totalSentences;
var flesch = f1 - (f2 * r1) - (f3 * r2);

// Write Report
var report = "";

report += "Total Syllables: " + totalSyllables + "\n";
report += "Total Words    : " + totalWords + "\n";
report += "Total Sentences: " + totalSentences + "\n";
report += "Flesch Index   : " + flesch + "\n";
```

The Flesch index is by no means the only test. There are lots of alternatives. Most differ only slightly if at all in principle.

[Automated Readability index](https://en.wikipedia.org/wiki/Automated_readability_index)

[Coleman-Liau index](https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index)

[Dale-Chall readability formula](https://en.wikipedia.org/wiki/Dale%E2%80%93Chall_readability_formula)

[Gunning fog index](https://en.wikipedia.org/wiki/Gunning_fog_index)

------