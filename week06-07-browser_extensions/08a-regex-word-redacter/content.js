// This is the content script for the extension
// Note there is also a content.css file

// Grab the entire document body - this returns an array even though it's likely just one thing
var body = document.getElementsByTagName("body");
console.log('word redactor extension running');

for (var i = 0; i < body.length; i++) {
  // Look at the full content
  var txt = body[i].innerHTML;

  // This is a way of splitting up by tags.
  var tokens = txt.split(/(<.*?>)/);

  for (var j = 0; j < tokens.length; j++) {
    // Ignore anything that is a tag
    if (tokens[j].charAt(0) !== '<') {
      // Now replace the word "the" with "the" spanned with the class "redact"
      tokens[j] = tokens[j].replace(/\bthe\b/gi,'<span class="redact">the</span>');
    }
  }
  // Put everything back in
  body[i].innerHTML = tokens.join('');
}
