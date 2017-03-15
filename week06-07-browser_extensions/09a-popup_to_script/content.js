// Listen for messages and run receiver() when message is received.
chrome.runtime.onMessage.addListener(receiver);


// this is a slightly simpler version than that found in 09-script_to_popup.
// it doesn't check to make sure of the message id first and just grabs the data directly.
// but its the same idea.
function receiver(request, sender, sendResponse) {
  var elements = document.getElementsByTagName('*');

  for (var i = 0; i < elements.length; i++) {
    elements[i].style['background-color'] = request.color;
    elements[i].style['font-size'] = request.size + '%';
  }
}
