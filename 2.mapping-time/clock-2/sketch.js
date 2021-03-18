
function setup() {
  // set the width & height of the sketch
  createCanvas(600, 600)
  // rectMode(CENTER);
  ellipseMode(CENTER);
  strokeWeight(0);

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())
}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()
  // background('white')

  // code for switching between am and pm 
  var hourColor
  if (now.am){
    // is true, background color will be white
      hourColor = color('white')
  }else{
    // if false, background color will be black
      hourColor = color('black')
    }

  background(hourColor)

  // code for changing the opacity of the shapes, mapping the value of the alpha chanel to seconds. 
  var discrete = false
  if (discrete){
    var secsAlpha = map(now.sec,  0,60, 0,255) // from secs (0–60) to % opacity (0–255)
  }else{
    secsAlpha = 255 * now.progress.min
  }

  // testing with circle
  // ellipse(x1, y1, width, height)
  // var x = width/2 
  // fill(255, 0, 0, secsAlpha);
  // ellipse(x, x, 400, 400);

  // fill(255, 0, 0, secsAlpha);
  // ellipse(x, x, 400, 400);

  if (discrete){
    var hourWidth = map(now.min, 0, 12, 0, 400) 
  }else{
    hourWidth = 400 * now.progress.hour
  }

  // testing colored rectangle 
  // 12am to 1am
  // var zero = color(254, 254, 51)
  // var one = color(134, 0, 175, secsAlpha)
  // fill(zero)
  // rect(100, 100, 400-hourWidth, 400)

  // fill(one)
  // rect(500-hourWidth, 100, hourWidth, 400)

  // 1am to 2am
  var one = color(134, 0, 175)
  var two = color(250, 188, 2, secsAlpha)
  fill(one)
  rect(100, 100, 400-hourWidth, 400)

  fill(two)
  rect(500-hourWidth, 100, hourWidth, 400)

// colors for each hour
// var zero = color(254, 254, 51)
// var one = color(134, 0, 175)
// var two = color(250, 188, 2)
// var three = color(61, 2, 164)
// var four = color(251, 153, 2)
// var five = color(2, 70, 254)
// var six = color(253, 83, 10)
// var seven = color(2, 146, 206)
// var eight = color(254, 39, 18)
// var nine = color(102, 176, 49)
// var ten = color(208, 0, 43)
// var eleven = color(80, 213, 138)


}
