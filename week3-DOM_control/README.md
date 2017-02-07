## Week 3 - HTML AND THE DOM

###### February 6, 2017

------

**Sublime Linter**

Linters check for syntax issues in your code. I highly recommend installing SublimeLinter and JSHint for Sublime Text for some additional help recognizing bugs and problematic Javascript in Sublime Text.

[http://www.sublimelinter.com/en/latest/](http://www.sublimelinter.com/en/latest/)

------

**Javascript Strings**

In many programming languages, strings are not basic data types like integers or floats. Instead they are full fledged *objects* that contain both member variables/fields and functions. Strings in javascript are no different. Some of the string methods we'll be using are:

- charAt()
- indexOf()
- substring()
- substr()
- slice()
- concat()
- split()
- replace()

[charAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) takes a single number as an argument, returning the character that many positions in from the start of the string.

```
var myStr = "hello world!";
console.log(myStr.charAt(1));	  // will print 'e' to console
```

[indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) takes a character as an argument, returning the index position in the string of the first time it occurs.

```
console.log(myStr.indexOf('w'));	// will print the number 6 to console
```

[substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) takes two index numbers as arguments and returns the string inbetween those indices. [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) is very similar - I was actually [somewhat off explaining the difference in class today](http://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring) - its a bit of a weird difference. Use [substr()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr) to grab based on length.

```
console.log(myStr.substring(1,5));	// will print "ello"
console.log(myStr.slice(1,5));	// will print the same
console.log(myStr.substr(5,3)); // will print out " wo"
```

[concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat) does the same thing as concatenation via the '+' operator, combining two strings into one.

```
var otherString = "i would never say ";
console.log(otherString.concat(myStr));		// will print out "i would never say hello world!";
```

[split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) takes an argument known as a "separator", looks for the separator in the string, and returns an array of new strings split by instances of the separator.

```
console.log(myStr.split(" "));		// will print out ["hello", "world!"];
```

[replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) is the function we used when automatically replacing some text in a webpage on day 1. It takes two arguments, and in this usage of replace() the first is a string to replace with something, and the second is the replacement.

```
console.log(myStr.replace("hello", "goodbye"));		// will print out "goodbye world!"
```

The important thing to remember is that calling this method on a string *doesn't change the string itself* - you have to assign its *result* to a string if you want to save it.

```
myStr = myStr.replace("hello", "goodbye"); 	// will replace the contents of myStr with "goodbye world!"
```

------

**The Document Object Model (DOM)** 

![DOM](http://www.w3schools.com/js/pic_htmltree.gif "DOM")

The DOM is a specification for how HTML documents is structured.

Whenever you write some basic HTML, such as:

```
<html>
	<head>
		<title>Titles are super great</title>
	</head>
	<body>
		<div>
			<p>Welcome to The Page</p>
		</div>
	</body>
</html>
```

... you are writing a basic DOM tree. 

The top-level parent node is `<html>`, followed by `<head>` and `<body>` as sibling child nodes. We can see this because `<html>` opens at the top and closes at the bottom, and `<head>` and `<body>` are independent of one another.

The `<head>` node has one child node, `<title>`, and `<body>` has a `<div>` child which has one `<p>` child.

All HTML in the DOM tree works this way - parents and children - and all nodes are a what is known as a [HTML Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). A `<p>` paragraph node is an HTML element, just as a `<div>` or `<body>`.

What gives Javascript a lot of power is that it has access to the DOM, and is able to do many things with it - changing existing elements, removing them, adding new ones, and so on. The DOM also has the ability to execute javascript attached to a given element. Similarly, Javascript can also access, create, and change all CSS styles in the page.

When you write `createCanvas()` in some javascript code using the p5.js library, it actually creates an HTML element called `<canvas>` which HTML5 is able to use to draw arbitrarily to a defined area. Just by calling this one line in a p5.js sketch you are already modifying the DOM - it is creating a canvas element with the specified width and height, then appending it to the document body.

------

**P5.js and the DOM**

As done in class, basic Javascript is fully capable of accessing the DOM, via functions like 

`var returnedDivElement = document.getElementById('myDiv')` 

... but you can also use simplified P5.js functions to do this. You just need to ensure that the p5.dom.js library is linked in your html - the standard library (p5.js or p5.min.js) does not contain this functionality!

I'm not going to write it out here because there is already an excellent guide on the P5.js wiki. It also introduces the concept of Event Listeners. Go through all of it!

[https://github.com/processing/p5.js/wiki/Beyond-the-canvas](https://github.com/processing/p5.js/wiki/Beyond-the-canvas)

Also its very important to make sure you understand the usage of HTML Element [IDs](http://www.w3schools.com/tags/att_global_id.asp) vs. [classes](http://www.w3schools.com/tags/att_global_class.asp). Let me know if you need more guidance on brushing up on this kind of basic HTML, but the Code Academy tutorial on HTML and CSS linked to on Day 1 is a good resource.
 
------

**Examples**

You'll notice there are a ton of example sketches in the code. They are all running at [http://whoisbma.github.io/code2/week03/](http://whoisbma.github.io/code2/week03/). Go through each one.

homework-
- p5 sketch that is modified via interaction with HTML elements