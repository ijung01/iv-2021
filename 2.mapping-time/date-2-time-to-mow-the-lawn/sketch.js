
function setup(){
  createCanvas(650,100);
  frameRate(60) 
  background('white')
}

function draw(){

  var now = clock()
  var s = 50

  stroke('white')

  // month dividers 
  line(0, 0, width, 0);
  line(0, height, width, height);
  line(0, 0, 0, height)
  line(s, 0, s, height)
  line(s*2, 0, s*2, height)
  line(s*3, 0, s*3, height)
  line(s*4, 0, s*4, height)
  line(s*5, 0, s*5, height)
  line(s*6, 0, s*6, height)
  line(s*7, 0, s*7, height)
  line(s*8, 0, s*8, height)
  line(s*9, 0, s*9, height)
  line(s*10, 0, s*10, height)
  line(s*11, 0, s*11, height)
  line(s*12, 0, s*12, height)
  line(s*13, 0, s*13, height)

  var x = random(now.month*s, now.month*s)
  var y = randomGaussian(height/2, height/8)
  var r = random(now.day*2)
  var c = color(102, 176, 49, random(30))

  // set the color & draw the dot
  // 가로 위치, 세로 위치, 넓이, 높이
  noStroke()
  fill(c)
  ellipse(x, y, r)
}