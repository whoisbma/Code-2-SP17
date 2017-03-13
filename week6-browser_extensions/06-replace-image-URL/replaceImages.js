// this technique won't work on all sites, 
// especially ones that are more secure.
// try pinterest.com.

// finds all HTML elements with <img> tags on the page and returns them in an array.
var images = document.getElementsByTagName('img');

// loop through the array of images
for (var i = 0; i < images.length; i++) {
	// instead of loading a specific URL, this creates a URL specifically from the found image width and height, and constructs a URL that placekitten.com is able to give us a new image with.
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}