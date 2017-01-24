## Week 1 - Class Intro, Terminal & Github Review

HTML/DOM manipulation


#### Terminal

We are using the command line because gaining familiarity with it is a crucial step towards becoming a better programmer. When we connect to a remote AWS instance to update some code running on the cloud, we'll be in Terminal. When we push changes to our repo, Terminal is the way to do it. When we test some server code locally, we'll run it via Terminal.

The command line is the most fundamental interface to the operating system, and also is extremely efficient to use when you've gained some familiarity. Intend to master its usage.

Command Line Crash Course: [http://cli.learncodethehardway.org/book/](http://cli.learncodethehardway.org/book/)

Main takeaways/commands to memorize:

* ```pwd``` - ***print working directory***
	* shows what directory you are operating in in your terminal window. make sure you are where you intend to be, especially when doing things like initializing git!
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
	* careful with that ```rm``` command! 
* ```echo``` - ***output text***
	* prints out the text entered after the command.
	* if used in conjunction with the ```>``` command, writes directly to a file, overwriting the existing content, like: ```echo "Hello world" > hello.txt```
	* using with ```>>``` will append rather than overwrite!
* ***Tab button*** - autocomplete! (life saver) 
	* Press tab after entering a few letters in for example, a ```cd``` command to have Terminal attempt to autocomplete. If there are multiple matches for what you've entered, you will need to enter a few more letters. For example ```cd Desk``` --> ```tab``` --> will autocomplete to Desktop if you are in your home directory.
* ***Up and down arrows*** - scroll to previous commands and back.
* ```vim``` - ***Terminal based text-editing program***
	* Very old-school, but very powerful. You aren't required to use this, but I recommend giving it a try.
	* Try this Vim tutorial if you want to learn more: [http://www.openvim.com/](http://www.openvim.com/)

#### Github

###### Git vs. Github

###### Setting up a local repo, then connecting and pushing to a remote

###### Setting up a remote, then cloning to your local system

	