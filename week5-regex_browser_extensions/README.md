## Week 5 - REGULAR EXPRESSIONS (REGEX)

###### February 27, 2017

------

#### Homework Overview

1. Start midterm
2. 
3. 

------

#### Regular Expressions

Regular Expressions are patterns used to match and replace strings in text. They are notoriously cryptic looking but aren't really all that bad if you understand the components.

The most basic type of regular expression is a *literal* - this just means that you are literally searching for a sequence of characters. For example: `/hello/` searches for character `h`, followed by `e`, followed by `l`, then another `l`, then `o`, and will match any time its found.

A more complicated type of regular expression makes use of a *metacharacter* - this is a basic rule. For example - match all digit characters, any space characters, any word boundaries.

Metacharacters look like `\d`, `\w`, `*`, or `?` - the forward slash on the first two are meant to distinguish them from the *literals* `d` and `w` - and similarly, if you want to search `*` or `?` as a literal, you'll need to give them a forward slash to serve as an *escape character*: `\*` and `\?`.

You can write regular expressions in code but also with the *find* feature of most text editors. Open find with command-F in mac on sublime text and click the small icon in the lower left part of the screen to indicate that you will search with regular expressions.

###### Single Character metacharacters:

- `\d` - 0-9
- `\w` - A-Z, a-z, 0-9 (any word character)
- `\W` - any non-word character
- `\s` - any whitespace
- `\S` - any non-whitespace character
- `\b` - any word boundary
- `\B` - any non-word boundary
- `.` - any one character

###### Quantifier metacharacters:

- `*` - 0 or more
- `+` - 1 or more
- `?` - 0 or 1
- `{min, max}`
- `{n}`

###### Positional metacharacters:

- `^` - beginning of a line
- `$` - end of a line

###### Character classes (*conditionals*): 

- `[.-]` - literal dot or dash vs. . metacharacter (any one character)
- `[a-z]` - (dash vs. literal [-.] dash)
- `[^0-5]` - negation - anything except 0-5

###### Alternation (*more conditionals*):

- `(net|com)` - 'net' or 'com'

###### Examples

- `colou?rs?` - match US or UK spelling of 'colors'
- `[aeiouAEIOU]` - match any vowel (remember the flesch index?)
- `http://[^\s<>"']+` - match URLS
- `\w+@\w+\.(net|com|edu|org)` - match emails
- `\d\d\d-\d\d\d-\d\d\d\d` - an extremely simple phone number match, could be improved:
- `\d{3}-\d{3}-\d{4}` - better, but could still be more complete:
- `\(?\d{3}[-.)]\d{3}[-.)]\d{4}` - a decent phone number matching regex

#### Regex in Javascript

In JS, Regular Expressions, like strings, are objects. You can create a regex object like so:

`var regex = new RegExp('findme');`

A more common way is to use forward slashes. Just like a string is an array of characters between quotes, a regex is an array of characters between forward slashes.

`var regex = /findme/;`

The regexp object has several methods. The test() function returns true or false depending on if the string passed in matches the regex. This can be used to validate an email adress for example:

```
var email = /\w+@\w+\.(net|com|edu|org)/;
if (email.test("bma@newschool.edu")) {
  console.log("valid email");
}
```

The Javascript string object also has several methods which accept regular expressions as input. For example, `search()` is a function that works similarly to `indexOf()`. It looks for a regular expression match and returns the index of that match.

```  
var zipcode = "My zip code is 90210";
var index = zipcode.search(/\d{5}/);
console.log("The zip code is at index: " + index);
```

Probably the most useful regular expression is match(): a method of the string object that returns the matches of a regular expression.

```
var txt = "this is a test.";
var testrx = /test/;
var results = txt.match(testrx);  //results now contains ["test"]
```

(STILL ADDING TO THIS)

- go into your homework - replace some aspect of it with a regex.

- back to day 1 - find and replace

- look at some cool browser extensions
  - https://twitter.com/molleindustria/status/572411714723037184
  - http://www.joannemcneil.com/gallery/emotional-labor/
  - https://visitsteve.com/made/add-art-art-replaces-ads/
  - https://chrome.google.com/webstore/detail/rose-colored-window/djlhhopgmokkhnljjlkclknddoododoc
  - https://github.com/wheresaddie/girlsvsgit

- fancier than regex but get thinking about:
  - http://www.allisonburtch.net/illuminator/
  - http://nytimes-se.com/ (not exactly but)
  - https://chrome.google.com/webstore/detail/bookindy-%E2%80%93-browse-amazon/pkojccpfacognnfgbafojnnlkeifcmhe?hl=en
  - http://siberart.com/projects/untitled-project/north-america/
  - http://lav.io/2014/05/transform-any-text-into-a-patent-application/
  - http://accessibleicon.org/
  - http://turbulence.org/project/the-shiftspace-commissions-program-2/


- capturing groups with ()

- backreferences

------

#### Browser Extensions

