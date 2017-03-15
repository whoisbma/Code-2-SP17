var col;
var slider;

function setup() {
  noCanvas();

  // Look for a text field and slider in the DOM
  col = select('#color');
  col.input(sendMessage);
  slider = select('#size');
  slider.input(sendMessage);
}

// Whenever those interface elements change, a message is sent to the content script
function sendMessage() {
  // Messages are just objects.
  // You can create them any way you want and give them any fields you want.
  var msg = {
    from: 'popup',
    color: col.value(),
    size: slider.value()
  };

  // A tab has be selected for the message to be sent
  var params = {
    active: true,
    currentWindow: true
  };

  // This searches for the active tabs in the current window, then sending the message that we created.
  chrome.tabs.query(params, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, msg);
  });
}