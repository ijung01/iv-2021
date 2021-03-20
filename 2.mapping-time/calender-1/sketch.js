let angle = 0

function setup() {
  createCanvas(1100, 300);
  angleMode(DEGREES);
  print('starting time:', clock())
}

function draw() {
  var now = clock()
  var mooncolors = ['darkslateblue', 'palevioletred', 'moccasin']
  var gradient = chroma.scale(mooncolors).mode('lab')
  function colorForProgress(pct){
    return gradient(pct).hex()
  }
  
  var mooncolor = colorForProgress(now.moon)
  background('black')

  var discrete = false
  var spacing = 80
  var end = 880
  var moon = 70

  rectMode(CENTER)
  for (var i=0; i<12; i++){
    noStroke()
    rect(110+i*spacing, height/2, 2, 80)
    fill(mooncolor)
  }

  let angles = map(now.progress.month, 0, 1, 0, 90)
  let move = map(now.month, 0, 12, 0, 960)
  var maskwidth = map(now.month, 0, 12, 0, 960)

  fill('black')
  noStroke()
  rectMode(CORNER)
  rect(70, height/2-40, maskwidth-30, 90)

  push()
  translate(move+30, height/2)
  fill(mooncolor)
  rectMode(CENTER)
  rotate(angles)
  rect(0, 0, 2, 80)
  pop()

  rectMode(CENTER)
  fill(mooncolor)
  _.times(now.month - 1, i => {
    rect(110 + i * spacing, height/2, 80, 2)
  })

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
  circle(moonLocation+110, 150, moonBrightness) 
}