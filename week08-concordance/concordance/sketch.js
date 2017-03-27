var button;
var textArea;

function setup() {
  noCanvas();
  
  button = select('#enter-text');
  textArea = select('#input');

  textArea.value("In Data Poetics, we build upon our skills developed in Code 1 by moving beyond the image. We will take a closer look at the capacity of computers to process, interpret, visualize, and generate information, while studying everything from avant garde computational literature to the sociocultural implications of contemporary big data. Through our study of the applications of regular expressions, Markov chains, web scraping, data visualization, and semantic networks, we’ll write client and server-side Javascript, creating browser extensions, Twitter bots, and our own custom APIs, drawing from speculative and critical design to investigate the connections between culture, technology, and information.");

  button.mousePressed(createConcordance);
}

function createConcordance() {
  var concordance = {};

  data = textArea.value();

  var tokens = data.split(/\W+/);

  var keys = [];
  for (var i = 0; i < tokens.length; i++) {
    var word = tokens[i].toLowerCase();
    if (concordance[word] === undefined) {
      concordance[word] = 1;
      keys.push(word); //if we have a new word, add it to the array.
    } else {
      concordance[word]++;
    }
  }
  
  keys.sort(function(a, b) {
    return (concordance[b] - concordance[a]);
  });

  //next, now that we have sorted keys, we can iterate over the concordance.  

  // this loop will just print to console.
  for (var i = 0; i < keys.length; i++) {
    console.log(keys[i] + ': ' + concordance[keys[i]]);
  }

  // this loop will create a list in HTML.
  var ul = select('#concordance');
  for (var i = 0; i < keys.length; i++) {
    var li = createElement('li', keys[i] + ': ' + concordance[keys[i]]);
    li.parent(ul);
  }

}

function draw() {

}