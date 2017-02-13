function setup() {
  noCanvas();

  // assign a reference to the other paragraph element already created in the index.html file
  var editableP = select('#editme');

  // register an anonymous callback to that element, that does the same thing as above
  editableP.input(function() {
    console.log(editableP.html());
  });

  // create a paragraph element and assign a reference to it at editableP
  var dynEditableP = createP('you can edit this dynamically created paragraph element too');
  
  // change the HTML element attribute 'contenteditable' to 'true' of editableP
  dynEditableP.attribute('contenteditable', 'true');
  dynEditableP.style('background-color', 'lightgreen');

  // register an anonymous callback to the input() event of editableP, printing out its HTML value to console.
  dynEditableP.input(function() {
    console.log(dynEditableP.html());
  });


}