function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist, 
          y:cy+sin(theta) * dist}
}

function setup() {
  // set the width & height of the sketch
  createCanvas(282, 720)
  stroke(0, 0, 0)
  strokeWeight(2)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())
}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing

  // code for mapping 4 different colors to progress of the year (season)
  var seasonColors = ['orange', 'forestgreen', 'firebrick', 'cornflowerblue']
  var gradient = chroma.scale(seasonColors).mode('lab')
  function colorForProgress(pct){
    return gradient(pct).hex()
  }

  var seasonColor = colorForProgress(now.progress.year)
  background(seasonColor)

  var hrAngle = 0
  var minAngle = 135
  var secAngle = -90

  var hrHeight = 120 
  var minHeight = 160
  var secHeight = 560

  var discrete = false
  var moonLocation = minHeight * now.progress.week
  var monthLocation = map(now.progress.year, 0, 1, 0, 282)

  if (discrete) {
  var hrLocation = map(now.hour, 0, 23, 0, hrHeight)
  var minLocation = map(now.min, 0, 60, 0, minHeight)
  var secLocation = map(now.sec, 0, 60, 0, secHeight)
  }else{
  hrLocation = hrHeight * now.progress.day
  minLocation = minHeight * now.progress.hour
  secLocation = secHeight * now.progress.min  
}

  // draw a white circle in the center; this marks
  // the spot (160, 560) we'll be calculating
  // other points on the basis of
  // circle(160, 560, 10)

  // find a new point thats at 0° (i.e., to the right) 
  // of the original (starting from x=160 y=560)
  // and is 120 pixels away it
  var hrPt = pointAt(160, 560, hrAngle, hrHeight)

  // find a point that's clockwise by 135° (i.e., down and left) 
  // from the original (starting from x=160 y=560)
  // but is closer this time (only 60 pixels away)
  var minPt = pointAt(160, 560, minAngle, 225)

  // by passing a negative number for the angle we can
  // find a point that's 90° counter-clockwise
  var secPt = pointAt(160, 560, secAngle, secHeight)

  // to really mimic the sunlight 
  // var daycolors = ['black', 'dimgray', 'gray', 'white', 'dimgray', 'black']
  var daycolors = ['gray', 'white', 'gray']
  var gradient = chroma.scale(daycolors).mode('lab')
  function colorForProgress(pct){
    return gradient(pct).hex()
  }
  
  //triangle for week.progress
  var daycolor = colorForProgress(now.progress.day)

  push()
  blendMode(OVERLAY)
  fill(daycolor)
  noStroke()
  triangle(monthLocation, 0, 160-moonLocation, 560+moonLocation, hrPt.x+2, hrPt.y)
  frameRate(60)
  pop()

  // draw a line from the origin to each dot
  line(160, 560, hrPt.x, hrPt.y)
  line(160, 560, minPt.x, minPt.y)
  line(160, 560, secPt.x, secPt.y)

   // code for switching between am and pm 
   var fillColor
   if (now.am){
       fillColor = color('black')
   }else{
       fillColor = color('white')
     }

   var strokeColor
   if (now.am){
       strokeColor = color('white')
   }else{
       strokeColor = color('black')
     }

  //circle for hour
  fill(fillColor)
  stroke(strokeColor)
  circle(hrLocation+160, 560, 5)

  // circle for minute
  // inverse–circle(160+minLocation, 720-minLocation, 5)
  circle(160-minLocation, 560+minLocation, 5)
    
  // circle for seconds
  // inverse—circle(160, secLocaton+160, 5) 
  circle(160, 560-secLocation, 5)
}