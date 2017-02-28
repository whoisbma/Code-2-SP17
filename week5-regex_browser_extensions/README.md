## Week 5 - REGULAR EXPRESSIONS (REGEX)

###### February 27, 2017

------

### Homework Overview

The midterm is due two weeks from now, on March 13. There is no submission due in canvas for next week, but do the following and I will review your progress in class.

***The midterm assignment is to create a Chrome extension that accomplishes the following:***

* Transforms the experience of browsing a website or the internet generally via some critical or poetic intent.
  * *Think about the examples shown in class and included below. How do they, by transforming the experience of consuming media, or overtly transforming the media itself, comment on culture and society? Or alternatively, how do they create an aesthetic experience that illuminates some quality? You should aspire to this level of rhetoric in your project rather than making something purely functional - even something functional can have a deeper dimension of intent.*
* Makes use of at least one regular expression in the searching, analysis, or replacing of text.
  * *You could use a regular expression to find all `<a href` links and turn them into something else. Or find instances of all words that match your criteria, then use the Chrome extension popup to display some graphic analysis using p5js.*

***References:***

- [https://twitter.com/molleindustria/status/572411714723037184](https://twitter.com/molleindustria/status/572411714723037184)
  - [http://www.joannemcneil.com/gallery/emotional-labor/](http://www.joannemcneil.com/gallery/emotional-labor/)
  - [https://visitsteve.com/made/add-art-art-replaces-ads/](https://visitsteve.com/made/add-art-art-replaces-ads/)
  - [https://chrome.google.com/webstore/detail/rose-colored-window/djlhhopgmokkhnljjlkclknddoododoc](https://chrome.google.com/webstore/detail/rose-colored-window/djlhhopgmokkhnljjlkclknddoododoc)
  - [https://github.com/wheresaddie/girlsvsgit](https://github.com/wheresaddie/girlsvsgit)
  - [http://www.allisonburtch.net/illuminator/](http://www.allisonburtch.net/illuminator/)
  - [http://nytimes-se.com/](http://nytimes-se.com/)
  - [https://chrome.google.com/webstore/detail/bookindy-%E2%80%93-browse-amazon/pkojccpfacognnfgbafojnnlkeifcmhe?hl=en](https://chrome.google.com/webstore/detail/bookindy-%E2%80%93-browse-amazon/pkojccpfacognnfgbafojnnlkeifcmhe?hl=en)
  - [http://siberart.com/projects/untitled-project/north-america/](http://siberart.com/projects/untitled-project/north-america/)
  - [http://lav.io/2014/05/transform-any-text-into-a-patent-application/](http://lav.io/2014/05/transform-any-text-into-a-patent-application/)
  - [http://accessibleicon.org/](http://accessibleicon.org/)
  - [http://turbulence.org/project/the-shiftspace-commissions-program-2/](http://turbulence.org/project/the-shiftspace-commissions-program-2/)
  - [Regex Golf](http://www.alf.nu/RegexGolf)

***For moving forward please do the following:***

1. **Review all the Regex notes and give them a try in your code editor and in Javascript.**
2. **Prototype the regex-related functionality of what your midterm will be and be prepared to discuss it in class.**
3. **Get the basic Chrome extension example from class working. We'll be diving deeper into Chrome extensions next week.**

------

### Regular Expressions

Regular Expressions are patterns used to match and replace strings in text. They are notoriously cryptic looking but aren't really all that bad if you understand the components.

The most basic type of regular expression is a *literal* - this just means that you are literally searching for a sequence of characters. For example: `/hello/` searches for character `h`, followed by `e`, followed by `l`, then another `l`, then `o`, and will match any time its found.

A more complicated type of regular expression makes use of a *metacharacter* - this is a basic rule. For example - match all digit characters, any space characters, any word boundaries.

Metacharacters look like `\d`, `\w`, `*`, or `?` - the forward slash on the first two are meant to distinguish them from the *literals* `d` and `w` - and similarly, if you want to search `*` or `?` as a literal, you'll need to give them a forward slash to serve as an *escape character*: `\*` and `\?`.

You can write regular expressions in code but also with the *find* feature of most text editors. Open find with command-F in mac on sublime text and click the small icon in the lower left part of the screen to indicate that you will search with regular expressions.

##### Single Character metacharacters:

- `\d` - 0-9
- `\w` - A-Z, a-z, 0-9 (any word character)
- `\W` - any non-word character
- `\s` - any whitespace
- `\S` - any non-whitespace character
- `\b` - any word boundary
- `\B` - any non-word boundary
- `.` - any one character

##### Quantifier metacharacters:

- `*` - 0 or more
- `+` - 1 or more
- `?` - 0 or 1
- `{min, max}`
- `{n}`

##### Positional metacharacters:

- `^` - beginning of a line
- `$` - end of a line

##### Character classes (*conditionals*): 

- `[.-]` - literal dot or dash vs. . metacharacter (any one character)
- `[a-z]` - (dash vs. literal [-.] dash)
- `[^0-5]` - negation - anything except 0-5

##### Alternation (*more conditionals*):

- `(net|com)` - 'net' or 'com'

##### Capture Groups and Backreferences

If a Regex includes something in a parentheses `()`, this will store a reference to it. This means the regex can refer to what it just found. An example of this might be in searching for any word followed by itself:

- `\b(\w+)\b\s\1` - captures duplicate words

The key here is the `\1` - it refers to whatever was captured in the first set of parentheses, in this case `\w+`.

If you include more than one capture group, they can be referred to with subsequent numbers - `\1`, `\2`, `\3` and so on in the regular expression.

In code, you'll usually see the usage of `$1`, `$2`, `$3` (backreferences) and so on to refer to the captured groups.

##### Examples

- `colou?rs?` - match US or UK spelling of 'colors'
- `[aeiouAEIOU]` - match any vowel (remember the flesch index?)
- `http://[^\s<>"']+` - match URLS
- `\w+@\w+\.(net|com|edu|org)` - match emails
- `\d\d\d-\d\d\d-\d\d\d\d` - an extremely simple phone number match, could be improved:
- `\d{3}-\d{3}-\d{4}` - better, but could still be more complete:
- `\(?\d{3}[-.)]\d{3}[-.)]\d{4}` - a decent phone number matching regex

### Regex in Javascript

In JS, Regular Expressions, like strings, are objects. You can create a regex object like so:

`var regex = new RegExp('findme');`

A more common way is to use forward slashes. Just like a string is an array of characters between quotes, a regex is an array of characters between forward slashes.

`var regex = /findme/;`

##### regex.test()

The regexp object has several methods. The test() function returns true or false depending on if the string passed in matches the regex. This can be used to validate an email adress for example:

```
var email = /\w+@\w+\.(net|com|edu|org)/;
if (email.test("bma@newschool.edu")) {
  console.log("valid email");
}
```

##### string.search()

The Javascript string object also has several methods which accept regular expressions as input. For example, `search()` is a function that works similarly to `indexOf()`. It looks for a regular expression match and returns the index of that match.

```  
var zipcode = "My zip code is 90210";
var index = zipcode.search(/\d{5}/);
console.log("The zip code is at index: " + index);
```

##### string.match()

Probably the most useful regular expression function is match(): a method of the string object that returns the matches of a regular expression.

```
var txt = "this is a test.";
var testrx = /test/;
var results = txt.match(testrx);  //results now contains ["test"]
```

If the regular expression includes capturing parentheses, the groups would also appear in the array. For example, lets say you needed a regex to match a phone number in a string:

```
var txt = "Phone numbers: 212-555-1234 and 917-555-4321 and 646.555.9876.";
var regex = /(\d+)[-.]\d+[-.]\d+/;
var results = txt.match(regex);
//the resulting array is not what we want:
//['212-555-1234', '212'] - the full phone number is index 0 and captured group is index 1
//in order to capture everything, we'll need to add several steps.
```

##### Flags

Regular expressions can include flags that modify how the search operates. For example the flag 'i' is case-insensitivity so that the regular expression 'hello' with the flag 'i' would match 'hello', 'Hello', 'HeLlO', etc.
  
A flag is added after the second forward slash: for *case insensitivity*, `/hello/i`
  
The *global flag* `g` tells the regular expression that we want to search for all the matches and not the first one.

```
var regex = /(\d+)[-.]\d+[-.]\d+/g;
var txt = "Phone numbers: 212-555-1234 and 917-555-4321 and 646.555.9876.";
var results = txt.match(regex);
```

This usage of `match()` with the global flag now returns all the matches in the original string as elements of the array, but the captured group for the area codes is now lost.

##### regex.exec()

If there are multiple matches AND you want to have captured groups, you have to instead use the `exec()` method which is part of the RegExp object.
  
In the case of a single object, the `exec()` function is the same as `match()`. The `exec()` function, even with the global flag, will still return only the first match.  However, if you call `exec()` a second time with the same regex and input string, it will move on and return the results for the second match (or null if there is no match)you can therefore use a `while` loop to iterate through all matches:

```
var regex = /(\d+)[-.]\d+[-.]\d+/g;
var txt = "Phone numbers: 212-555-1234 and 917-555-4321 and 646.555.9876.";
var results = regex.exec(txt);
console.log(results);
while (results != null) {
  results = regex.exec(txt);
  console.log(results);
}
```

This could also be written with more brevity this way:

```
while (results = regex.exec(txt)) {
  console.log(results);
}
```

#### Using regex in our functions from previous classes

##### string.split()

Earlier we used string methods to do things like *split* strings into an array. Now lets do some regex in conjunction with them, using regex objects as delimiters.

```
var txt = "This text has characters, spaces, and some punctuation.";
var regex = /\W+/;
var words = txt.split(regex);
console.log('Total words: ' + words.length);
console.log(words);
```

If you want to capture all the delimiters, you can enclose them in capturing parentheses.

```  
var regex = /(\W+)/;
var words = txt.split(regex);
console.log(words);
```

##### string.replace()

Running a search and replace is one of the more powerful things one can do with regular expressions. This can be accomplished with the string's `replace()` method. 

The method receives two arguments, a regex and a replacement string. Whenever there is a regex match, it is replaced with the string provided.

```  
var txt = "Replace every time the word 'the' appears with the word ze.";
var regex = /\bthe\b/g;
var replaced = txt.replace(regex, 'ze');
console.log(replaced);
```

We can also reference the matched text using a backreference to a captured group in the substitution string. A backreference to the first group is indicated as $1, $2 is the second, etc.

```
var txt = "Double the vowels.";
var regex = /([aeiou]+)/g;
var replaced = txt.replace(regex, '$1$1');
console.log(replaced);
```
