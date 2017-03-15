## WEEK 6 & 7 - BROWSER EXTENSIONS

###### March 6 & 13, 2017

------

### More Midterm details

Also changed version in Week 5 to match this.

The midterm is due on March 27.

***The midterm assignment is to create a Chrome extension that accomplishes the following:***

* Transforms the experience of browsing a website or the internet generally via some critical or poetic intent.
  * *Think about the examples shown in class and included in week 5's README. How do they, by transforming the experience of consuming media, or overtly transforming the media itself, comment on culture and society? Or alternatively, how do they create an aesthetic experience that illuminates some quality? You should aspire to this level of rhetoric in your project rather than making something purely functional - even something functional can have a deeper dimension of intent.*
* Makes use of at least one regular expression in the searching, analysis, or replacing of text.
  * This could be as simple as a basic regular expression that counts words, or several regular expressions designed to match specific phrases, or more functional elements like email addresses and phone numbers.
* Uses at least one of the following chrome extension techniques:
  * routing data from a background script listener to the active page
  * data gathered from running a content script on the active page to the popup
  * or sending data from the popup to the active page.
* Extra credit for actually packaging and submitting your extension to Google!

Although there are a number of technical requirements listed above, a significant portion of your performance on this midterm will be assessed based on creativity.

***Starting points on moving forward:***
* Running an algorithm to analyze and visualize text on the page in a popup - can use P5.js or another approach. (Remember the Flesch index?)
* Replacing words on webpages to some critical intent (there are many examples of this, needs to be creative/critical). Images are also a possibility - but you'll need to find a reason to use regex still. You could use a regex instead of getElementByTagName if you really wanted but try to find a better reason.
* Use a regex to pull text out of the page, then rearranging and displaying them in the popup, Dada-poetry style - or possibly more interesting, on the page itself.

***I highly suggest going through the trouble of reading the Chrome extensions documentation yourself, especially to note what areas you do and don't understand: [https://developer.chrome.com/extensions](https://developer.chrome.com/extensions)***

Also note it is possible to view the source code of any extension that you've added to chrome: [https://www.howtogeek.com/198964/how-to-view-the-source-code-of-a-chrome-extension/](https://www.howtogeek.com/198964/how-to-view-the-source-code-of-a-chrome-extension/)

------

### Code

![01-04](https://raw.githubusercontent.com/whoisbma/Code-2-SP17/master/week06-07-browser_extensions/images/1-4.png "01-04")

**01-set-page-color_P5**

Creates a popup that uses P5.js to create a button. When that button is pressed, use the chrome API call `chrome.tabs.executeScript` to send inline code directly to the active tab. This requires a `tabs` permission in the manifest.json.

You could do the same sort of thing to change the background color of other HTML elements, via a technique like:

```
var pElements = document.getElementsByTagName('p');
for (var i = 0; i < pElements.length; i++) {
  pElements[i].style['background-color'] = 'lightblue';
}
```

**02-set-page-color_P5**

This example is identical to the above, except it uses a linked script instead of inline javascript in the call to `chrome.tabs.executeScript`.

**03-set-page-color_JS**

This is a fancier, non-P5.js version of the first example, with color options!

**04-set-page-color_background**

The functionality of this example is the same as 01 and 02, except it omits a popup entirely and triggers the injection of a script based on a background listener. Notice that there is no `default_popup` field in the manifest.json, and that instead there is a `background` script. In that background.js file, the chrome browser action is registered to an event listener, that when clicked, calls `chrome.tabs.executeScript`.

![05-06](https://raw.githubusercontent.com/whoisbma/Code-2-SP17/master/week06-07-browser_extensions/images/5-6.png "05-06")

**05-replace-image-local**

This example uses a content script to programmatically replace all the images on the page with a local extension file image. Notice that the doge.png file is made accessible by adding it to the manifest.json file in `web_accessible_resources`. Rather than using a regex to pull the image tags manually, we use `document.getElementsByTagName('img')` for a simple solution, then looping through them to replace the source URL with `chrome.extension.getURL("doge.png");`

**06-replace-image-URL**

This example works the same as above, but replaces images with ones located online, using the placekittens.com service to generate image URLs. It therefore doesn't need `web_accessible_resources` in the manifest.json.

![07-08](https://raw.githubusercontent.com/whoisbma/Code-2-SP17/master/week06-07-browser_extensions/images/7-8.png "07-08")

**07-regex-word-replace**

This example uses a content script to traverse the DOM to find all text nodes, then using a regular expression to replace all words with "hello". There is a simpler but more flawed way to do it via `innerHTML.replace` but you should try to use the more complex method.

**08-regex-word-replace-onclick**

This does the same as the 07, but the word replace script is injected by clicking on the browser action icon, registered to an event listener in a background script.

**08a-regex-word-redacter**

This code was adapted from a Daniel Shiffman A2Z example. Its another example of how you might filter text out of the innerHTML of a webpage. It ignores all tags and identifies the string 'the' - then replacing it with custom HTML including a new `<span>` class that has custom CSS in the attached stylesheet, "censoring" the words.

![09](https://raw.githubusercontent.com/whoisbma/Code-2-SP17/master/week06-07-browser_extensions/images/9.png "09")

**09-script-to-popup**

Arguably the most complex of all the examples as it involves two-way communication. This has permissions for the browser tabs in the manifest.json as well as a content script called replace.js.

Replace.js waits to hear a message called "getCount" from the popup. When it gets it, it runs a simple regex to count the number of words on the active page. Meanwhile, popup.js sends the "getCount" message once the p5 code gets to setup(), and takes the response to save to the variable `numWords`, also using it to update the div displaying the number. Finally in draw() this variable is used to set the size of an ellipse and some text.

The message-sending code in popup.js:

```
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {type: "getCount"}, function(response) {
    numWords = response;
    numWordsDiv.html(numWords);
  });
});
```

Notice that the `sendMessage` function lives inside of the `tabs.query` function. We use that to query the tabs in order to get the information on the current tab.

Also the `{type: "getCount"}` object is what is defining the message we are sending to that tab. You could write this object out separately instead, or have an array of them.

```
var messageObject = {
  type: "getCount"
};

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, messageObject, function(response) {
    // do something with the response
  });
});
```

The message-listening code in replace.js:

```
chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    switch(message.type) {
      case "getCount":
        var count = getAllWords();
        sendResponse(count);
        break;
      default:
        console.error("Unrecognised message: ", message);
      }
  }
);
```

This code listens for an `onMessage` event, and when it receives one, checks `message.type` to see if it is `getCount`. If it is, it uses `sendResponse` to send the result of `getAllWords` to the sender.

**09a-popup_to_script**

This code is adapted from a Daniel Shiffman A2Z example. It does essentially a simpler version of 09 - sending a message to the content script which changes the style of the page.

![10](https://raw.githubusercontent.com/whoisbma/Code-2-SP17/master/week06-07-browser_extensions/images/10.png "10")

**10-p5-canvas-in-content-script**

This is a simple way to get a p5 canvas appended to the page, but there are a few tricks. Check the code for details.

**10a-p5-canvas-as-iframe**

This code is from Tega Brain's Speculative Bureaucracy workshop. Its a fancier way to do essentially the same thing, but the p5 code is a separate script that is loaded as an **iframe** in the current page (basically a page within a page).

------

### Reminders/definitions:

* BROWSER ACTIONS: 
  * permanently displayed to the right of the address bar
  * good if the extension can work on any website, or if its website agnostic.

* PAGE ACTIONS:
  * only displayed on certain pages, icon is displayed inside the address bar
  * needs permissions array to include the URL that the extension has access to.
  * permissions also includes things like "tabs", "activetab", "storage" part of the chrome API.
  * the page_action object contains information about the extension's UI (i.e. `default_popup`).

* CONTENT SCRIPTS:
  * This is the script that has access to the website the visitor is on. Its like a script embedded in the html of the actual page.
  * If your content script's code should always be injected, register it in the extension manifest using the content_scripts field.
  * If you want to inject the code only sometimes, use the permissions field instead. Search for "match patterns."
  * Using the content_scripts field, an extension can insert multiple content scripts into a page; each of these content scripts can have multiple JavaScript and CSS files. 

* BACKGROUND SCRIPTS:
  * Run by the browser in a non-visible window. Can be used to add event listeners on the browser itself and send data from each component of the architecture.
  * Another type of background script is an Event Page.
  * Inserting a script into a page programmatically via a background listener is useful when your JavaScript or CSS code shouldn't be injected into every single page that matches the pattern — for example, if you want a script to run only when the user clicks a browser action's icon.
  * To insert code into a page, your extension must have cross-origin permissions for the page. It also must be able to use the chrome.tabs module. 

* POPUPS
  * The popup is a simple HTML document that we pointed to in our manifest file under page_action["default_popup"].
  * You can't run inline javascript in the HTML, you have to link to an external script.
