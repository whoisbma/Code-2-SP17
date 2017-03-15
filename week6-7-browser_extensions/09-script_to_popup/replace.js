
// this code waits to hear from the popup script 
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

function getAllWords() {
    var allText = document.body.innerText;
	var allWords = allText.split(/\s+/);
	var numWords = allWords.length;

	return numWords;
}