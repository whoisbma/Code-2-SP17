// Called when the browser action itself is clicked
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(
		null, 
		{file: "injection.js"});
});