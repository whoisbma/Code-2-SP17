document.body.innerHTML = document.body.innerHTML.replace(new RegExp("\w+", "gi"), "AAAAA");

function getTextNodes() {
	var elements = document.querySelectorAll("body, body *");
	var results = [];

	for (var i = 0; i < elements.length; i++) {
		for (var j = 0; j < elements[i].childNodes.length; j++) {
			var child = elements[i].childNodes[0];
			if (elements[i].hasChildNodes() && child.nodeType == 3) {
				results.push(child);
			}
		}
	}

	return results;	
}

var textNodes = getTextNodes();
for (var i = 0; i < textNodes.length; i++) {
	var text = textNodes[i].nodeValue;
	textNodes[i].nodeValue = text.replace(/bryan/gi, "AAAAAHHH");
}

//g - global
//i - capitalization