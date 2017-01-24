## Week 1 - Class Intro, Terminal & Github Review

###### January 23, 2017

* In this class we're making things primarily with javascript via P5.js and Node.js, using Terminal and github.
* How to get an A: show up, do the homework, be reasonable, try your best!
* Technical questions should go in the Canvas discussion board.
* Office hours are by appointment only.
* If you have special considerations of any kind, talk to me or set up an appointment, my email is bma@newschool.edu.
* Syllabus should be in your email, and also in the Canvas syllabus page. 
* The class repo [https://github.com/whoisbma/Code-2-SP17](https://github.com/whoisbma/Code-2-SP17) will be your main resource for the class, with homework assignments and examples.

#### Homework overview (details below):

1- Open the Developer Tools / Console in a browser, and change around some HTML. Save an screenshot of what you created with your "hacks".

2- Do the Terminal practice listed below, and get through a few sections of [http://cli.learncodethehardway.org/book/](http://cli.learncodethehardway.org/book/).

3- Review some basic HTML and CSS with [HTML & CSS intro](https://www.codecademy.com/learn/web)

4- Set up your github.io page, and create a simple HTML page for your first homework assignment. Create a subfolder structure in your github.io directory to upload your homeworks to, like *username.github.io/01/index.html*, etc. Your first assignment should be some html and css experimentation, also displaying the aforementioned screenshot of your hack results.

-----

#### HTML manipulation

In Chrome, open View -> Developer -> Javascript Console. On a Mac, the shortcut is Command-Option-i.

Click on the "Elements" tab and poke around. Expand sections of HTML via the little arrows to the left. Change some code by double-clicking on a section of text, changing it, then pressing Enter/Return.

Try breaking things, replacing things. Take a screenshot, and publish it to your week 1 github.io page (see below).

-----

#### Terminal

We are using the command line because gaining familiarity with it is a vital step towards becoming a better programmer. As we become better programmers, we gain more power to transform our imagination into reality.

When we connect to a remote AWS instance to update some code running on the cloud, we'll be in Terminal. When we push changes to our repo, Terminal is the way to do it. When we test some server code locally, we'll run it via Terminal.

The command line is the most fundamental interface to the operating system, and also is extremely efficient to use when you've gained some familiarity. Intend to master its usage.

Command Line Crash Course: [http://cli.learncodethehardway.org/book/](http://cli.learncodethehardway.org/book/)

Practice using these commands and techniques:

* ```pwd``` - ***print working directory***
	* shows what directory you are operating in in your terminal window. Make sure you are where you intend to be, especially when doing things like initializing git!
* ```open``` - ***opens directory in OS***
	* to open a directory, type the path - ```open ~/Desktop/```.
	* if you want to open the current working directory in terminal, enter - ```open .``` - the single ```.``` refers to the current directory.
* ```cd``` - ***change directory***
	* you can either type in a path yourself and then press enter to go there, like ```cd Desktop/```, or use the mouse to drag a folder over to terminal in front of a blank ```cd ``` - it will automatically copy the file path for you.
	* type ```cd ..``` to go back one directory, ```cd ../..``` to go back two directories, etc.
	* type ```cd``` and press enter to go back to your home directory.
	* typing ```cd -``` will take you to your most recent working directory.
* ```ls``` - ***list***
	* list all files in the current working directory.
* ```mkdir``` and ```rmdir``` - ***make directory*** and ***remove directory***
	* type in the name of the folder to create or remove after the command and press enter. 
	* you can only ```rmdir``` empty directories.
* ```touch``` and ```rm``` - ***create*** and ***remove*** a file
	* type the name of the file to create or remove after the command.
	* careful with that ```rm``` command! It will remove a file without sending it to the Trash first.
* ```echo``` - ***output text***
	* prints out the text entered after the command.
	* if used in conjunction with the ```>``` command, writes directly to a file, overwriting the existing content, like: ```echo "Hello world" > hello.txt```
	* using with ```>>``` will append rather than overwrite!
* ***Tab button*** - autocomplete! (life saver) 
	* Press tab after entering a few letters in for example, a ```cd``` command to have Terminal attempt to autocomplete. If there are multiple matches for what you've entered, you will need to enter a few more letters. For example ```cd Desk``` --> ```tab``` --> will autocomplete to Desktop if you are in your home directory.
* ***Up and down arrows*** - scroll to previous commands and back.
* ```vim``` - ***Terminal based text-editing program***
	* Very old-school, but very powerful when you know how to use it. You aren't required to use this, but I recommend giving it a try.
	* Try this Vim tutorial if you want to learn more: [http://www.openvim.com/](http://www.openvim.com/)

_____

#### Git

Git is **source control software**. Source control software lets programmers back up snapshots of file changes over the process of building a project, which means that any change can be reverted at any time. 

Instead of having a single file that you save and overwrite, you have the entire history of changes ever committed. This is extremely useful as its very common to make mistakes that break things in code, which makes rolling things back to a previous version a livesaver.

Git is also very powerful for collaboration, as it allows you to check out independent "branches" from a main code base, safely isolating a central branch from any risky changes.

As relatively new programmers however, the main way we will use Git is simply in order to push repositories to Github.

_____

#### Github

Github is not Git. Git is software that runs locally on your computer, storing commits in a hidden directory structure for you to access when needed. Github is a website that lets us connect a "Remote" to our repositories!

The purpose for this is to back up our changes to an external source. Also, being on the web, this means that you can share your code with others. Finally, since Github Pages allows us to turn a repo into a hosted website, we can publish content to the web very easily. More on this later.

There are two main approaches towards getting set up with a Git repo and a connected remote on Github. Both processes will ask you to log in and potentially edit some user information for Git - just follow the instructions if it interrupts you.

_____

#### Setting up a local repo, then connecting and pushing to a remote

The first is to set things up locally, then connect it to Github.

1- Open Terminal, and make sure you ```cd``` to the directory you want to turn into a git repository.

2- For example: ```cd ~/Documents/Code2```

3- Initialize this directory as a Git repo with ```git init```

4- Now you can connect to a remote any time you want. I would do it now - go to github.com, create a new repository by pressing the "+" button in the top right corner, then grab the link it gives you on the following page with all the instructions.

5- Connect your remote in terminal with ```git remote add origin``` followed by your remote link.

6- Add files for git to track: ```git add ``` then the file you want to add, or ```.``` for the current directory.

7- Commit any changes to the tracked files: ```git commit -m "enter a commit message here in quotes"```

8- Push your commits to the remote: ```git push origin master```

9- Now if you refresh your repo on github.com, you should see your files there.

_____

#### Setting up a remote, then cloning to your local system

The other approach is to set things up on Github, then clone it to your local system.

1- Open github.com, then create a repo, the same way as before. This time however you could check the "create README" option so its not an empty repository you're trying to clone.

2- Once created, open Terminal and navigate to the folder you want to create the local repo inside of.

3- No need to initialize, now all you have to do is run ```git clone ``` followed by the link of your remote, and it will grab the remote and initialize a new repo locally with its contents in a folder named for the remote repo.

4- Now you can add/change files, run ```git add```, ```git commit```, and ```git push origin master``` as before to update changes.

_____

#### Github Pages

As mentioned, Github is also extremely useful in that it offers a "Github Page", which is how homework will be turned in for this class. Follow the guide here to set it up if you haven't already in class: [https://pages.github.com/](https://pages.github.com/)