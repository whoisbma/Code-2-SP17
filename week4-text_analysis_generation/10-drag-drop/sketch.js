var dropzone;
// var canvas;
var img;
var theText;

function setup() {
  // canvas = createCanvas(400,400);
  background(255);
  
  // the index.html file has a div with an ID of 'dropzone'.
  // use select() to assign a reference to it in the variable dropzone
  dropzone = select('#dropzone');

  // register callback for the dropzone on drop() event
  // this callback could also be anonymously declared
  dropzone.drop(gotFile);
}

function gotFile(file) {
  createP(file.name + ", " + file.type + ", " + file.size + " bytes");
  
  //check what kind of file it is, then do something based on if its an image or text
  if (file.type == 'image') {
    createP(file.data);
    img = createImg(file.data);

    // you could also draw the image to the canvas if you like
    // make sure to uncomment the canvas creation in setup()
    // canvas.size(img.width, img.height);
    // image(img,0,0,width,height); 
  }
  if (file.type == 'text') {
    theText = file.data;
    createP(file.data);
  }
}