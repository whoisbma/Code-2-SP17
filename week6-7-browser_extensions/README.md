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

### Code from Class

**01-set-page-color_P5**

Creates a popup that uses P5.js to create a button. When that button is pressed, use the chrome API call `chrome.tabs.executeScript` to send inline code directly to the active tab. This requires a `tabs` permission in the manifest.json.

**02-set-page-color_P5**

This example is identical to the above, except it uses a linked script instead of inline javascript in the call to `chrome.tabs.executeScript`.

**03-set-page-color_JS**

This is a fancier, non-P5.js version of the first example, with color options!

**04-set-page-color_background**

The functionality of this example is the same as 01 and 02, except it omits a popup entirely and triggers the injection of a script based on a background listener. Notice that there is no `default_popup` field in the manifest.json, and that instead there is a `background` script. In that background.js file, the chrome browser action is registered to an event listener, that when clicked, calls `chrome.tabs.executeScript`.

**05-replace-image-local**

**06-replace-image-URL**

**07-regex-word-replace**

**08-regex-word-replace-onclick**

**09-word-to-popup**

1. Change background color:
OK _ 1 - first with HTML button
OK _ 2 - next with background.js script
OK _ 3 - vanilla Javascript version

2. scrape page for instances of a word
OK _ 1 - change word to something else (content script)
OK - 2 - change word to something else (via background process)

3. connecting to p5 canvas in popup
OK _ - display visualization of word count in popup
- flesch index in popup
- 

3a. append canvas to page... hm

4. Replace images on page
OK _ 1 - replace image with extension-stored image
OK _ 2 - replace images with other images online
OK _ 3 - replace images with canvases


BROWSER ACTIONS: 
- permanently displayed to the right of the address bar
- good if the extension can work on any website, or if its website agnostic.

PAGE ACTIONS:
- only displayed on certain pages, icon is displayed inside the address bar
- needs permissions array to include the URL that the extension has access to.
- permissions also includes things like "tabs", "activetab", "storage" part of the chrome API.
- the page_action object contains information about the extension's UI.
{
	"permissions": [
		"http://www.example.com/",
		"https://www.example.com/"
	],
	"page_action": {
		"default_title": "Extension Name",
		"default_icon": "path/logo.jpg",
		"default_popup": "path/popup.html"
	}
}

CONTENT SCRIPTS:
- Javascript needs to be injected into the page by the browser. There needs to be one script that runs in the background that inserts the custom code into the page (programmatic injection). This file bootstraps the rest of the extension.
- Then you need the actual code used for the extension's logic to live in another file that gets injected into the page. These two scripts are executed in two different environments and have access to different stuff (tab objects, window, document, console, etc.)

1 - Background Script
- run by the browser in a background window.
- add to manifest.json: 
{
	"background": {
		"scripts": ["path/to/bootstrap.js"],
		"persistent": false
	},
}
- persistence differentiates a background page from an event page. higher performance.

		Add "persistent": false to your manifest as shown above.

		If your extension uses window.setTimeout() or window.setInterval(), switch to using the alarms API instead. DOM-based timers won't be honored if the event page shuts down.

		Similarly, other asynchronous HTML5 APIs like notifications and geolocation will not complete if the event page shuts down. Instead, use equivalent extension APIs, like notifications.

		If your extension uses, extension.getBackgroundPage, switch to runtime.getBackgroundPage instead. The newer method is asynchronous so that it can start the event page if necessary before returning it.


- this script runs in a background window and has access to all the chrome APIs, but no access to the content on the page that's currently being viewed in the tab.
- this is where you interact with the browser, telling it when to inject your code, initialize the extension, etc.
- you'll also need to add "tabs" to your permissions array in manifest.json in order to access the tabs API.


for example:

// when the extension is first installed
chrome.runtime.onInstalled.addListener(function(details) {
    chrome.storage.sync.set({clean_news_feed: true});
});

// listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(function(id, info, tab){
    if (tab.url.toLowerCase().indexOf("facebook.com") > -1){
        chrome.pageAction.show(tab.id);
    }
});


// update the icon when the user's settings change
// chrome.storage.onChanged.addListener(function(changes, areaName){
//     alert("changed settings");
//     console.log("changed settings");
//     if (localStorage["clean_news_feed"] == "true"){
//         path = "active-icon.jpeg";
//     } else {
//         path = "inactive-icon.jpeg";
//     }
//     chrome.tabs.getCurrent( function(tab){
//         chrome.pageAction.setIcon({
//             "tabId": tab.id,
//             "path": path
//         });
//     });
// });

this says that whenever a tab is updated (i.e. URL changes), show the page action icon, and inject the extension's javascript into the page. you can also add some logic in here to check the tab's URL, etc.

this background script is the only one that'll have access to the current Tab object and the chrome APIs so any interaction in the browser needs to happen in here.

Once the extension's javascript has been added to the page, that script has access to the document, window, and console of the actual page. From this script, you can interact with the DOM as you normally would - you just can't use variables or functions that were defined in the bootstrap script or on the webpage itself.

THE POPUP

The popup is a simple HTML document that we pointed to in our manifest file under page_action["default_popup"].

You can't run inline javascript in the HTML, you have to link to an external script.

THE CONTENT SCRIPT

This is the script that has access to the website the visitor is on. Its like a script embedded in the html of the actual page.

If your content script's code should always be injected, register it in the extension manifest using the content_scripts field.

If you want to inject the code only sometimes, use the permissions field instead.

Using the content_scripts field, an extension can insert multiple content scripts into a page; each of these content scripts can have multiple JavaScript and CSS files. 

Inserting code into a page programmatically is useful when your JavaScript or CSS code shouldn't be injected into every single page that matches the pattern — for example, if you want a script to run only when the user clicks a browser action's icon.

To insert code into a page, your extension must have cross-origin permissions for the page. It also must be able to use the chrome.tabs module. 

"permissions": [
  "activeTab"
  or 
  "tabs"
],

(essentially, activeTab grants the tabs permission temporarily).

https://blog.hartleybrody.com/chrome-extension/

MATCH PATTERNS: 
https://developer.chrome.com/extensions/match_patterns

WEB ACCESSIBLE RESOURCES:
https://developer.chrome.com/extensions/manifest/web_accessible_resources

