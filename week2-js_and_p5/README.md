## Week 2 - SUBLIME TEXT, MARKDOWN, JAVASCRIPT, P5.JS

###### January 30, 2017

**GIT AND GITHUB**
- Reminder: the process to get a local repo connected to a remote is:
	- Set up a repo on github.com, then ```git clone``` it to the location you want your local to be in.
	- Or, ```git init``` a local directory to initialize it as a git repo, then ```git add remote origin <your remote repo link>``` to connect it.
	- Three steps to remember to commit and push your changes to remote:
		-	```git add <your file, or . for all in your current directory>```
		- ```git commit -m "<your commit message>"```
		- ```git push origin master```
- If you're still having trouble getting git/github started and understanding what is going on try [http://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1/](http://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1/) and [http://readwrite.com/2013/10/02/github-for-beginners-part-2/](http://readwrite.com/2013/10/02/github-for-beginners-part-2/)
- For a more comprehensive understanding of git, check out the Git book here: [https://git-scm.com/book/en/v2/Getting-Started-Git-Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

------

**GITHUB.IO PAGES FOR HOMEWORK**
- Set up your github.io page. You can use any general structure you like but just make sure to have a page that will link to every one of your assignments.
- Github pages guide: [here](https://pages.github.com/)

------

**GIT FOR WINDOWS USERS**
- Please follow [this guide](https://help.github.com/articles/set-up-git/#platform-windows) to install Github Desktop in order to use Git Shell. Git Shell is installed along with Github Desktop and will take git terminal commands.
- Based on the 5 minutes I spent in class looking at Git Shell, it seemed to work fine especially when cloning a Repo to a local directory

------

**MARKDOWN**
- Markdown is a simple [markup language](https://en.wikipedia.org/wiki/Markup_language) that plays very nicely with Github. Github repos online will automatically render any file saved as README.md in the repo to serve as a user-facing text document with simple styling like headers, lists, images, and so on.
- [A good example of using a README.md in a github repo to give all sorts of information (scroll down)](https://github.com/patriciogonzalezvivo/glslViewer)
- [Markdown Syntax Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Markdown Github guide](https://guides.github.com/features/mastering-markdown/)
- Start getting in the habit of adding a README.md file to any github repo you are setting up.

------

**SUBLIME TEXT**
- Sublime Text is a basically a fancy text editor. This is in contrast to Integrated Development Environments (like XCode or Processing) that also handle compiling and executing your code - Sublime Text doesn't do that by itself. However it is deceptively powerful. We'll get more into what Sublime Text offers throughout the semester.
- [Fun shortcuts](https://www.cheatography.com/martinprins/cheat-sheets/sublime-text-3-osx/) - some of my favorites are multiple cursors, moving whole lines, and *tab* vs. *shift-tab* to change indentation in and out.
- Command Palette - press ***command-shift-P*** or ***ctrl-shift-P***
- Package Control - open the Command Palette and search for install package control. A must-do. This will let you install external packages for Sublime Text that help do all sorts of different things. You install them and use them via the Command Palette. Try:
	- [GitGutter](https://packagecontrol.io/packages/GitGutter) for tracking changes since your last git commit.
	- Custom themes like [Soda](https://packagecontrol.io/packages/Theme%20-%20Soda)
	- [Markdown Preview](https://packagecontrol.io/packages/Markdown%20Preview) for quick previews of .md files.
	- [Sidebar Enhancements](https://packagecontrol.io/packages/SideBarEnhancements) for some extra sidebar functionality.

------

**BROWSERS, WEBSITES, AND WEBSERVERS**

![browser to server](https://github.com/whoisbma/Code-2-SP17/blob/master/week2-js_and_p5/browser2server.gif?raw=true "Browser to server")

The web as we experience it via browsers basically boils down to this. We can look at this in much more detail but this is the essence of what happens when we load a page on the internet. The browser sends a message off to a target server which asks the server to send back a file - a *HTTP GET Request* - and the server responds by looking for that file locally, then sending it back to the browser. The browser looks at the markup designating how that page is displayed, then renders it accordingly.

The other thing that browsers do nowadays is to execute *Javascript*.

------

**JAVSCRIPT**

Javascript is a [high-level](https://en.wikipedia.org/wiki/High-level_programming_language), [dynamic](https://en.wikipedia.org/wiki/Dynamic_programming_language), [untyped](https://en.wikipedia.org/wiki/Programming_language#Type_system), and [interpreted](https://en.wikipedia.org/wiki/Interpreted_language) programming language. Along with HTML and CSS, Javascript is one of the three core technologies of world wide web content, most websites use it, and all modern web browsers support it.

Unlike when using Processing, we don't have to declare specific data types, like *integers*, *floats*, and *strings* - we only create ***var*** variables. Everything can be a var, essentially. This makes Javascript a very easy-going language, which will handle a lot of things for you under the hood that in a stricter language we would need to be explicit about. However this also results in harder to find bugs and common mistakes for beginners.

```
// create a variable containing a number
var myNum = 10;
// create a variable containing a string
var myStr = "hello";
// create a variable containing an array of numbers
var myArr = [0,1,2,3,4];
```

It's also important to note that even though we don't declare data types explicitly, variables do have types hidden away from this. We can see them by using the ```typeof``` function.

```
var myVar = 10;
console.log(typeof(myVar));
// result will be 'number'
```

Syntax for Javascript is otherwise very similar to what we learned in Processing - writing functions, loops, conditionals, and other functionality is very similar.

```
// print out 0 to 9
for (var i = 0; i < 10; i++) {
	console.log(i);
}

// a function that prints "Hello!"
function sayHello() {
	console.log("Hello!");
}

// check to see if two variables have the same value
var numA = 5;
var numB = 10;
if (numA == numB) {
	console.log('equal!');
} else {
	console.log('not equal!');
}

// but careful, two equal sign operator ("==") comparisons will also return true here:
var strA = "5";
if (numA == strA) {
	console.log("'equal' because of automatic type conversion!")
}

// so use the triple equal sign operator ("===") to take type into consideration:
if (numA === strA) {
	console.log("this will definitely return false");
} else {
	console.log("false!");
}
```

We can run Javascript in the browser directly, accessing any data that exists from page load. Try pressing *command-option-I* to access the developer console to write some basic Javascript.

We also can write Javascript directly in our html files by including it within a ```<script>``` tag.

```
<!DOCTYPE html>
<html>
<head>
	<title>This page executes some Javascript</title>
	<script>
		for (var i = 0; i < 10; i++) {
			console.log(i);
		}
	</script>
</head>
<body>
	<p>Woohoo Javascript!</p>
</body>
</html>
```

HTML files full of javascript code might be a little messy looking, so we might want to separate our JS files from our HTML and link them.

```
<!DOCTYPE html>
<html>
<head>
	<title>This page executes some external Javascript</title>
	<script src="./myScript.js"></script>
</head>
<body>
	<p>Woohoo external Javascript!</p>
</body>
</html>
```

When we use Javascript libraries, we need to link them in this way. One of the JS libraries we will use is...

------

**P5.JS**

![p5.js](https://p5js.org/assets/img/p5js.svg "p5.js")


P5.js is essentially a remake of Processing using Javascript instead of Java. This allows us to get Processing sketches onto the web to share easily. It was created by artist and educator [Lauren McCarthy](http://lauren-mccarthy.com/) with the support of the [Processing Foundation](https://processingfoundation.org/).

There was a fair amount of work being done on a P5.js app that was very similar to the Processing IDE, but it has been deprecated - see info on that here: [https://github.com/processing/p5.js-editor](https://github.com/processing/p5.js-editor)

I do not suggest using the app for this reason. This means we will need to put a little more work into getting things started, but you'll get used to it very quickly.

- Follow the guide here: [https://p5js.org/get-started/](https://p5js.org/get-started/)
- Very useful information on converting Processing sketches to P5.js: [https://github.com/processing/p5.js/wiki/Processing-transition](https://github.com/processing/p5.js/wiki/Processing-transition)
- Check out the [examples](https://p5js.org/examples/) and the [reference](https://p5js.org/reference/).

______

**PYTHON'S SIMPLEHTTPSERVER**

In order to view our work properly in a browser, it needs to be served from a server to a browser. Opening the index.html file locally from the local file system will result in problems. This means you can get it up to your github.io page to render it properly in the browser, but that is a bit of a long process to review some quick changes. Instead, use the `python -m SimpleHTTPServer` command in terminal to create a quick *local server* which will serve your site to the browser.

Use `cd` in terminal to go to the local directory that you want to serve.

```python -m SimpleHTTPServer```

Or if you are using Python 3, type:

```python -m http.server```

Then visit http://localhost:8000 on your browser.

There are some caveats. The python simple server is relatively slow and displaying content like video will have some issues. But it is enough for what we need it for for now.

------
------
------

### Homework Overview

1. Make sure you are set up with Sublime Text. Install Package Control and try some packages.
2. Make a markdown file README.md for your *<username>*.github.io repo.
3. Read Chapters 1-2 of [Eloquent Javascript](http://eloquentjavascript.net/)
4. Watch [Dan Shiffman's introduction to P5.js](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
5. Convert an old Processing sketch from your Code 1 homework to P5.js and get it running on your github.io page. Submit the link to canvas.