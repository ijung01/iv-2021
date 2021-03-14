
function setup() {
  // set the width & height of the sketch
  createCanvas(600, 600)
  ellipseMode(CENTER);
  strokeWeight(0);

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())
}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  // var now = clock()
  background('white')

  var x = width/2 

  fill(100, 100, 100);
  // ellipse(x1, y1, width, height)
  ellipse (x, x, 400, 400);
}
