
// simplest way to do it but not complete
// document.body.innerHTML = document.body.innerHTML.replace(/designer/gi, 'navel-gazer');

// here is a more complete way: 
var regex = /\w+/gi;
var newText = "hello";

getTextNodes(function(textNodes) {
	console.log('searching DOM tree');
	for (var i = 0; i < textNodes.length; i++) {
  	var text = textNodes[i].nodeValue;
  	textNodes[i].nodeValue = text.replace(regex, newText);
	}
});

function getTextNodes(callback) {
	var elements = document.querySelectorAll("body, body *");
	var results = [];

	for (var i = 0; i < elements.length; i++) {	
		if (elements[i].hasChildNodes()) { 
			for (var j = 0; j < elements[i].childNodes.length; j++) {
				if (elements[i].childNodes[j].nodeType == 3) {
					results.push(elements[i].childNodes[j]);
				}
			}
		}
	}

	callback(results);
}

