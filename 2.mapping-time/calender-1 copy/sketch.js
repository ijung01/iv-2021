let angle = 0

function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist, 
          y:cy+sin(theta) * dist}
}

function setup() {
  createCanvas(1100, 300);
  angleMode(DEGREES);
  print('starting time:', clock())
}

function draw() {
  var now = clock()
  background('white');

  fill('black')
  
 

  var spacing = 80; 

  rectMode(CENTER)
  for (var i=0; i<12; i++){
    rect(110+i*spacing, height/2, 2, 80)
  }

  let angles = map(now.progress.month, 0, 1, 0, 90)
  let move = map(now.month, 0, 12, 0, 960)
  var maskwidth = map(now.month, 0, 12, 0, 960)

  fill('white')
  noStroke()
  rectMode(CORNER)
  rect(70, height/2-40, maskwidth-30, 80)

  // fill('white')
  // noStroke()
  // rectMode(CENTER)
  // rect(move-50, height/2, 80, 80)

  push()
  translate(move+30, height/2)
  fill('black')
  rectMode(CENTER)
  rotate(angles)
  rect(0, 0, 2, 80)
  pop()

  rectMode(CENTER)
  fill('black')
  _.times(now.month - 1, i => {
    rect(110 + i * spacing, height/2, 80, 2)
  })

  // rectMode(CENTER)
  // _.times(12, i => {
  //   fill(100, 56, 8, 105)
  //   rect(110 + i * spacing, height/2, 80, 10)
  // })
}