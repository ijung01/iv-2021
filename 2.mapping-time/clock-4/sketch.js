// ARGUMENTS
// cx: the x coordinate of the origin point
// cy: the y coordinate of the origin point
// angle: direction of the step we'll be taking away 
//        from the origin point. 0° means 'to the right'
//        and the angles run clockwise from there
// dist: number of pixels our calculated point will be 
//       away from the origin (in the direction specified
//       by the `angle` argument)
function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist, 
          y:cy+sin(theta) * dist}
}

function setup() {
  // set the width & height of the sketch
  createCanvas(1100, 300);
  rectMode(CENTER);
  

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())
}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()
  var mooncolors = ['darkslateblue', 'palevioletred', 'moccasin']
  var gradient = chroma.scale(mooncolors).mode('lab')
  function colorForProgress(pct){
    return gradient(pct).hex()
  }
  
  var mooncolor = colorForProgress(now.moon)
  background('black')

  // for(initialize; test; update){
  //   ... loop body (i.e., the steps to be repeated)
  // }
   // rect(x, y, width, height)

  var discrete = false
  var spacing = 80
  var end = 880
  var moon = 70

  // fill('black')
  // translate(145, 0)
  // for (var y=0; y<6; y++){
  //   circle(y*spacing, 150, 60)
  // }

  if (discrete){
    var moonLocation = map(now.progress.moon, 0, 1, 0, end)
  }else{
    moonLocation = end * now.progress.moon
  }

  if (discrete){
    var moonBrightness = map(now.moon, 0, 1, 0, moon)
  }else{
    moonBrightness = moon * now.moon + 10
  }

  noFill()
  stroke(mooncolor)
  strokeWeight(2)
  // fill(mooncolor)
  circle(moonLocation+110, 150, moonBrightness) 
  //circle(880, 150, 30)

  fill(mooncolor)
  translate(110, 0)
  for (var i=0; i<12; i++){
    rect(i*spacing, 150, 3, 80)
  }

  // var hrAngle = 0
  // var minAngle = 135
  // var secAngle = -90

  // var hrHeight = 120 
  // var minHeight = 160
  // var secHeight = 400

//   var discrete = false

//   if (discrete) {
//   var hrLocation = map(now.hour, 0, 23, 0, hrHeight)
//   var minLocation = map(now.min, 0, 60, 0, minHeight)
//   var secLocation = map(now.sec, 0, 60, 0, secHeight)
//   }else{
//   hrLocation = hrHeight * now.progress.day
//   minLocation = minHeight * now.progress.hour
//   secLocation = secHeight * now.progress.min  
// }

//   // draw a white circle in the center; this marks
//   // the spot (160, 560) we'll be calculating
//   // other points on the basis of
//   // circle(160, 560, 10)

//   // find a new point thats at 0° (i.e., to the right) 
//   // of the original (starting from x=160 y=560)
//   // and is 120 pixels away it
//   var hrPt = pointAt(160, 560, hrAngle, hrHeight)

//   // find a point that's clockwise by 135° (i.e., down and left) 
//   // from the original (starting from x=160 y=560)
//   // but is closer this time (only 60 pixels away)
//   var minPt = pointAt(160, 560, minAngle, 225)

//   // by passing a negative number for the angle we can
//   // find a point that's 90° counter-clockwise
//   var secPt = pointAt(160, 560, secAngle, secHeight)

  // var speed = map(now.weekday, 1, 7, 0, 16)
  // frameRate(speed)

  // fill (daycolor)
  // triangle(160, 160, 160, 560, hrPt.x, hrPt.y)

  // frameRate(60)

  // draw a red circle at the first calculated point
  // fill('black')
  // circle(hrLocation+160, 560, 5)

  // // draw a red circle at the first calculated point
  // // inverse–circle(160+minLocation, 720-minLocation, 5)
  // fill('black')
  // circle(160-minLocation, 560+minLocation, 5)
    
  // // draw a red circle at the first calculated point
  // // inverse—circle(160, secLocaton+160, 5) 
  // fill('black')
  // circle(160, 560-secLocation, 5)
  
  // // draw a line from the origin to each dot
  // line(160, 560, hrPt.x, hrPt.y)
  // line(160, 560, minPt.x, minPt.y)
  // line(160, 560, secPt.x, secPt.y)
}