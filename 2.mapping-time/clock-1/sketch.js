var lineLength = 200 

function setup() {
  // set the width & height of the sketch
  createCanvas(400, 800)
  stroke(100);
  strokeWeight(4);

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())
}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')

  var x = 100;
  var y = 60; 
  var space = 20;

  line(x, y, width/2, y);
  line(x, y+2*space, width/3, y+2*space);
  line(x, y+4*space, width/4, y+4*space);

  // set up typography & drawing-color
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(100, 50, 50)

//   // draw the time string to the canvas
//   text(now.text.date, 30, 50)
//   text(now.text.time, 30, 100)
}