- searching for text - finding and replacing a word inside a string
- 

- regex literals vs. metacharacters

- what are "types" of characters? (any possible vowel? any possible consonant? uppercase character? digit? any character that you might find as part of a word? whitespace? non-whitespace character?)

- what rules would you write to match a US phone number?
  - \d\d\d-\d\d\d-\d\d\d\d , etc. try in sublime

- single char
  - \d   0-9
  - \w   A-Z, a-z, 0-9
  - \s   whitespace
  - .    any one character

- slash as escape vs. meta
  - \d vs. d
  - . vs. \.

- quantifiers:
  - *   0 or more
  - +   1 or more
  - ?   0 or 1
  - {min, max} 
  - {n}

- colou?rs?

- position:
  - ^   beginning of a line
  - $   end of a line
  - \b  word boundary

- ^\w+

- writing out meaning of regex to emphasize its just a bunch of rules

- character classes
  - [ ]

- [.-] literal dot or dash vs. . metacharacter (any one character)
- [a-z] dash vs. literal [-.] dash
- [^0-5] negation - anything except 0-5

- alternation
  - (net|com)

- \(?\d{3}[-.)]\d{3}[-.)]\d{4}
  - optional parenthesis (escaped), three digits, either dash, period or closing parenthesis, three more digits, 4 more digits

- replacing function from Flesch index code

- regex in javascript

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



- browser extensions basics

regex part 2:

- capturing groups with ()

- backreferences
