## Week 2 - Class Intro, Terminal & Github Review

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
- browser sends HTTP request to server
- server sends back html and other files
- browser loads html and executes javascript

**javascript**
- interpreted, untyped, dynamic
- vars, functions, loops, math, logging
- running js in the browser
- embedding javascript in an html file
- linking javascript in an html file

**p5.js**
- processing remade in javascript
- lauren mccarthy
- p5 app no longer supported


### Homework Overview
