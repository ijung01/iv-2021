var lineLength = 200 

function setup() {
  // set the width & height of the sketch
  createCanvas(1100, 300)
  ellipseMode(CENTER)
  stroke(0, 0, 0)
  strokeWeight(2)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())
}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  // var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')

  var sp = 400;
  var y = 120; 
  var vert = 60;
  var horz = 300; 

  // hour, minute, second divider
  // x1. y1, x2, y2 
  line(sp, y, sp, y+vert);
  line(sp+horz, y, sp+horz, y+vert);

  var column1 = 100; 
  var column2 = 400; 
  var column3 = 700; 
  var padding = 45;
  var paddingl = 50;
  var space = 30;
  var base = 160; 

  fill(0, 0, 0);
  // Shape-Hours—Tens-5 
  // rect(x, y, width, height)
  rect(column1+padding, base, 100, 10);

  fill(0, 100, 100);
  // Shape-Hours—Tens-0 to 4 
  // ellipse(x1, y1, width, height)
  ellipse(column1+paddingl, base+5, 10, 10);
  ellipse(column1+paddingl+space, base+5, 10, 10);
  ellipse(column1+paddingl+2*space, base+5, 10, 10);
  ellipse(column1+paddingl+3*space, base+5, 10, 10);

  fill(0, 0, 0);
  // Shape-Hours—Ones-5 
  // rect(x, y, width, height)
  rect(255, base, 100, 10);

  fill(0, 100, 100);
  // Shape-Hours—Ones-0 to 4 
  // ellipse(x1, y1, width, height)
  ellipse(260, base+space/6, 10, 10);
  ellipse(260+space, base+space/6, 10, 10);
  ellipse(260+2*space, base+space/6, 10, 10);
  ellipse(260+3*space, base+space/6, 10, 10);

  // Shape-Hours—Ones-6 to 9 
  // ellipse(x1, y1, width, height)
  ellipse(260, base-space/3, 10, 10);
  ellipse(260+space, base-space/3, 10, 10);
  ellipse(260+2*space, base-space/3, 10, 10);
  ellipse(260+3*space, base-space/3, 10, 10);

  fill(0, 0, 0);
  // Shape-Minutes—Tens-5 
  // rect(x, y, width, height)
  rect(column2+padding, base, 100, 10);

  fill(0, 100, 100);
  // Shape-Minutes—Tens-0 to 4 
  // ellipse(x1, y1, width, height)
  ellipse(column2+paddingl, base+5, 10, 10);
  ellipse(column2+paddingl+space, base+5, 10, 10);
  ellipse(column2+paddingl+2*space, base+5, 10, 10);
  ellipse(column2+paddingl+3*space, base+5, 10, 10);

  fill(0, 0, 0);
  // Shape-Minutes—Ones-5 
  // rect(x, y, width, height)
  rect(555, base, 100, 10);

  fill(0, 100, 100);
  // Shape-Minutes—Ones-0 to 4 
  // ellipse(x1, y1, width, height)
  ellipse(560, base+space/6, 10, 10);
  ellipse(560+space, base+space/6, 10, 10);
  ellipse(560+2*space, base+space/6, 10, 10);
  ellipse(560+3*space, base+space/6, 10, 10);

  // Shape-Minutes—Ones-6 to 9 
  // ellipse(x1, y1, width, height)
  ellipse(560, base-space/3, 10, 10);
  ellipse(560+space, base-space/3, 10, 10);
  ellipse(560+2*space, base-space/3, 10, 10);
  ellipse(560+3*space, base-space/3, 10, 10);

  fill(0, 0, 0);
  // Shape-Seconds—Tens-5 
  // rect(x, y, width, height)
  rect(column3+padding, base, 100, 10);

  fill(0, 100, 100);
  // Shape-Seconds—Tens-0 to 4 
  // ellipse(x1, y1, width, height)
  ellipse(column3+paddingl, base+5, 10, 10);
  ellipse(column3+paddingl+space, base+5, 10, 10);
  ellipse(column3+paddingl+2*space, base+5, 10, 10);
  ellipse(column3+paddingl+3*space, base+5, 10, 10);

  fill(0, 0, 0);
  // Shape-Seconds—Ones-5 
  // rect(x, y, width, height)
  rect(855, base, 100, 10);

  fill(0, 100, 100);
  // Shape-Seconds—Ones-0 to 4 
  // ellipse(x1, y1, width, height)
  ellipse(860, base+space/6, 10, 10);
  ellipse(860+space, base+space/6, 10, 10);
  ellipse(860+2*space, base+space/6, 10, 10);
  ellipse(860+3*space, base+space/6, 10, 10);

  // Shape-Seconds—Ones-6 to 9 
  // ellipse(x1, y1, width, height)
  ellipse(860, base-space/3, 10, 10);
  ellipse(860+space, base-space/3, 10, 10);
  ellipse(860+2*space, base-space/3, 10, 10);
  ellipse(860+3*space, base-space/3, 10, 10);
  
//   // set up typography & drawing-color
//   textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
//   textSize(42) // make it big
  
// //   // draw the time string to the canvas
// //   text(now.text.date, 30, 50)
// //   text(now.text.time, 30, 100)
}