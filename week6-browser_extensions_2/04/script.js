


var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://placehold.it/350x500', true);
xhr.responseType = 'blob';

xhr.onload = function(e) {
	var newsrc = window.URL.createObjectURL(this.response);
	var images = document.getElementsByTagName('img');

	for (var i = 0; i < images.length; i++) {
		images[i].src = newsrc;
		//images[i].src = "http://placehold.it/" + images[i].width + "/" + images[i].height;
		// images[i].src = "http://placekitten.com/" + images[i].width + '/' + images[i].height;
	}

};

xhr.send();