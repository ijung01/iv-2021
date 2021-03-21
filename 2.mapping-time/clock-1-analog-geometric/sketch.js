var lineLength = 200 

function setup() {
  // set the width & height of the sketch
  createCanvas(1100, 300)
  ellipseMode(CENTER)
  stroke('black')
  strokeWeight(2)
  print('starting time:', clock())
  textSize(32)
}

function draw() {
  var now = clock()

  background('white')
  fill('black')

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

  // text(now.hours, column1+space, base/2)
	// text(now.min, column2, base/2)
	// text(now.sec, column3, base/2)

  push()
  noFill()
  //HOUR - zero placeholders 
  ellipse(column1+paddingl, base+5, 10, 10);
  ellipse(260, base+space/6, 10, 10);
  //MINUTES - zero placeholders 
  ellipse(column2+paddingl, base+5, 10, 10);
  ellipse(560, base+space/6, 10, 10);
  //SECONDS - zero placeholders 
  ellipse(column3+paddingl, base+5, 10, 10);
  ellipse(860, base+space/6, 10, 10);
  pop()

  //HOUR TENS
  if (now.hours >= 10) {
    ellipse(column1+paddingl, base+5, 10, 10);
  }  
  if (now.hours >= 20) {
    ellipse(column1+paddingl+space, base+5, 10, 10);
  }


  //HOUR ONES
  if (now.hours > 0 && now.hours < 10){
    ellipse(260, base+space/6, 10, 10)}
  else if (now.hours > 10 && now.hours < 20){
    ellipse(260, base+space/6, 10, 10)}
  else if (now.hours > 20 && now.hours < 24){
    ellipse(260, base+space/6, 10, 10)}

  if (now.hours > 1 && now.hours < 10){
    ellipse(260+space, base+space/6, 10, 10)}
  else if (now.hours > 11 && now.hours < 20){
    ellipse(260+space, base+space/6, 10, 10)}
  else if (now.hours > 21 && now.hours < 24){
    ellipse(260+space, base+space/6, 10, 10)}

  if (now.hours > 2 && now.hours < 10){
    ellipse(260+2*space, base+space/6, 10, 10)}
  else if (now.hours > 12 && now.hours < 20){
    ellipse(260+2*space, base+space/6, 10, 10)}
  else if (now.hours > 22 && now.hours < 24){
    ellipse(260+2*space, base+space/6, 10, 10)}  
  
  if (now.hours > 3 && now.hours < 10){
    ellipse(260+3*space, base+space/6, 10, 10)}
  else if (now.hours > 13 && now.hours < 20){
    ellipse(260+3*space, base+space/6, 10, 10)}

  if (now.hours > 4 && now.hours < 10){
    rect(255, base, 100, 10)}
  else if (now.hours > 14 && now.hours < 20){
    rect(255, base, 100, 10)}

  if (now.hours > 5 && now.hours < 10){
    ellipse(260, base-space/3, 10, 10)}
  else if (now.hours > 15 && now.hours < 20){
    ellipse(260, base-space/3, 10, 10)}

  if (now.hours > 6 && now.hours < 10){
    ellipse(260+space, base-space/3, 10, 10)}
  else if (now.hours > 16 && now.hours < 20){
    ellipse(260+space, base-space/3, 10, 10)}

  if (now.hours > 7 && now.hours < 10){
    ellipse(260+2*space, base-space/3, 10, 10)}
  else if (now.hours > 17 && now.hours < 20){
    ellipse(260+2*space, base-space/3, 10, 10)}

  if (now.hours > 8 && now.hours < 10){
    ellipse(260+3*space, base-space/3, 10, 10)}
  else if (now.hours > 18 && now.hours < 20){
    ellipse(260+3*space, base-space/3, 10, 10)}


  //MINUTE TENS
  if (now.min >= 10) {
    ellipse(column2+paddingl, base+5, 10, 10);
  }  

  if (now.min >= 20) {
    ellipse(column2+paddingl+space, base+5, 10, 10);
  }

  if (now.min >= 30) {
    ellipse(column2+paddingl+2*space, base+5, 10, 10);
  }

  if (now.min >= 40) {
    ellipse(column2+paddingl+3*space, base+5, 10, 10);
  }

  if (now.min >= 50) {
    rect(column2+padding, base, 100, 10);
  }

  //MINUTES ONES
  if (now.min > 0 && now.min < 10){
    ellipse(560, base+space/6, 10, 10)}
  else if (now.min > 10 && now.min < 20){
    ellipse(560, base+space/6, 10, 10)}
  else if (now.min > 20 && now.min < 30){
    ellipse(560, base+space/6, 10, 10)}
  else if (now.min > 30 && now.min < 40){
    ellipse(560, base+space/6, 10, 10)}
  else if (now.min > 40 && now.min < 50){
    ellipse(560, base+space/6, 10, 10)}
  else if (now.min > 50 && now.min < 60){
    ellipse(560, base+space/6, 10, 10)}

  if (now.min > 1 && now.min < 10){
    ellipse(560+space, base+space/6, 10, 10)}
  else if (now.min > 11 && now.min < 20){
    ellipse(560+space, base+space/6, 10, 10)}
  else if (now.min > 21 && now.min < 30){
    ellipse(560+space, base+space/6, 10, 10)}
  else if (now.min > 31 && now.min < 40){
    ellipse(560+space, base+space/6, 10, 10)}
  else if (now.min > 41 && now.min < 50){
    ellipse(560+space, base+space/6, 10, 10)}
  else if (now.min > 51 && now.min < 60){
    ellipse(560+space, base+space/6, 10, 10)}

  if (now.min > 2 && now.min < 10){
    ellipse(560+2*space, base+space/6, 10, 10)}
  else if (now.min > 12 && now.min < 20){
    ellipse(560+2*space, base+space/6, 10, 10)}
  else if (now.min > 22 && now.min < 30){
    ellipse(560+2*space, base+space/6, 10, 10)}
  else if (now.min > 32 && now.min < 40){
    ellipse(560+2*space, base+space/6, 10, 10)}
  else if (now.min > 42 && now.min < 50){
    ellipse(560+2*space, base+space/6, 10, 10)}
  else if (now.min > 52 && now.min < 60){
    ellipse(560+2*space, base+space/6, 10, 10)}

  if (now.min > 3 && now.min < 10){
    ellipse(560+3*space, base+space/6, 10, 10)}
  else if (now.min > 13 && now.min < 20){
    ellipse(560+3*space, base+space/6, 10, 10)}
  else if (now.min > 23 && now.min < 30){
    ellipse(560+3*space, base+space/6, 10, 10)}
  else if (now.min > 33 && now.min < 40){
    ellipse(560+3*space, base+space/6, 10, 10)}
  else if (now.min > 43 && now.min < 50){
    ellipse(560+3*space, base+space/6, 10, 10)}
  else if (now.min > 53 && now.min < 60){
    ellipse(560+3*space, base+space/6, 10, 10)}

  if (now.min > 4 && now.min < 10){
    rect(555, base, 100, 10)}
  else if (now.min > 14 && now.min < 20){
    rect(555, base, 100, 10)}
  else if (now.min > 24 && now.min < 30){
    rect(555, base, 100, 10)}
  else if (now.min > 34 && now.min < 40){
    rect(555, base, 100, 10)}
  else if (now.min > 44 && now.min < 50){
    rect(555, base, 100, 10)}
  else if (now.min > 54 && now.min < 60){
    rect(555, base, 100, 10)}

  if (now.min > 5 && now.min < 10){
    ellipse(560, base-space/3, 10, 10)}
  else if (now.min > 15 && now.min < 20){
    ellipse(560, base-space/3, 10, 10)}
  else if (now.min > 25 && now.min < 30){
    ellipse(560, base-space/3, 10, 10)}
  else if (now.min > 35 && now.min < 40){
    ellipse(560, base-space/3, 10, 10)}
  else if (now.min > 45 && now.min < 50){
    ellipse(560, base-space/3, 10, 10)}
  else if (now.min > 55 && now.min < 60){
    ellipse(560, base-space/3, 10, 10)}

  if (now.min > 6 && now.min < 10){
    ellipse(560+space, base-space/3, 10, 10)}
  else if (now.min > 16 && now.min < 20){
    ellipse(560+space, base-space/3, 10, 10)}
  else if (now.min > 26 && now.min < 30){
    ellipse(560+space, base-space/3, 10, 10)}
  else if (now.min > 36 && now.min < 40){
    ellipse(560+space, base-space/3, 10, 10)}
  else if (now.min > 46 && now.min < 50){
    ellipse(560+space, base-space/3, 10, 10)}
  else if (now.min > 56 && now.min < 60){
    ellipse(560+space, base-space/3, 10, 10)}

  if (now.min > 7 && now.min < 10){
    ellipse(560+2*space, base-space/3, 10, 10)}
  else if (now.min > 17 && now.min < 20){
    ellipse(560+2*space, base-space/3, 10, 10)}
  else if (now.min > 27 && now.min < 30){
    ellipse(560+2*space, base-space/3, 10, 10)}
  else if (now.min > 37 && now.min < 40){
    ellipse(560+2*space, base-space/3, 10, 10)}
  else if (now.min > 47 && now.min < 50){
    ellipse(560+2*space, base-space/3, 10, 10)}
  else if (now.min > 57 && now.min < 60){
    ellipse(560+2*space, base-space/3, 10, 10)}

  if (now.min > 8 && now.min < 10){
    ellipse(560+3*space, base-space/3, 10, 10)}
  else if (now.min > 18 && now.min < 20){
    ellipse(560+3*space, base-space/3, 10, 10)}
  else if (now.min > 28 && now.min < 30){
    ellipse(560+3*space, base-space/3, 10, 10)}
  else if (now.min > 38 && now.min < 40){
    ellipse(560+3*space, base-space/3, 10, 10)}
  else if (now.min > 48 && now.min < 50){
    ellipse(560+3*space, base-space/3, 10, 10)}
  else if (now.min > 58 && now.min < 60){
    ellipse(560+3*space, base-space/3, 10, 10)}

  //SECONDS TENS
  if (now.sec >= 10) {
    ellipse(column3+paddingl, base+5, 10, 10);
  }  

  if (now.sec >= 20) {
    ellipse(column3+paddingl+space, base+5, 10, 10);
  }

  if (now.sec >= 30) {
    ellipse(column3+paddingl+2*space, base+5, 10, 10);
  }

  if (now.sec >= 40) {
    ellipse(column3+paddingl+3*space, base+5, 10, 10);
  }

  if (now.sec >= 50) {
    rect(column3+padding, base, 100, 10);
  }

  //SECONDS ONES
  if (now.sec > 0 && now.sec < 10){
    ellipse(860, base+space/6, 10, 10)}
  else if (now.sec > 10 && now.sec < 20){
    ellipse(860, base+space/6, 10, 10)}
  else if (now.sec > 20 && now.sec < 30){
    ellipse(860, base+space/6, 10, 10)}
  else if (now.sec > 30 && now.sec < 40){
    ellipse(860, base+space/6, 10, 10)}
  else if (now.sec > 40 && now.sec < 50){
    ellipse(860, base+space/6, 10, 10)}
  else if (now.sec > 50 && now.sec < 60){
    ellipse(860, base+space/6, 10, 10)}

  if (now.sec > 1 && now.sec < 10){
    ellipse(860+space, base+space/6, 10, 10)}
  else if (now.sec > 11 && now.sec < 20){
    ellipse(860+space, base+space/6, 10, 10)}
  else if (now.sec > 21 && now.sec < 30){
    ellipse(860+space, base+space/6, 10, 10)}
  else if (now.sec > 31 && now.sec < 40){
    ellipse(860+space, base+space/6, 10, 10)}
  else if (now.sec > 41 && now.sec < 50){
    ellipse(860+space, base+space/6, 10, 10)}
  else if (now.sec > 51 && now.sec < 60){
    ellipse(860+space, base+space/6, 10, 10)}

  if (now.sec > 2 && now.sec < 10){
    ellipse(860+2*space, base+space/6, 10, 10)}
  else if (now.sec > 12 && now.sec < 20){
    ellipse(860+2*space, base+space/6, 10, 10)}
  else if (now.sec > 22 && now.sec < 30){
    ellipse(860+2*space, base+space/6, 10, 10)}
  else if (now.sec > 32 && now.sec < 40){
    ellipse(860+2*space, base+space/6, 10, 10)}
  else if (now.sec > 42 && now.sec < 50){
    ellipse(860+2*space, base+space/6, 10, 10)}
  else if (now.sec > 52 && now.sec < 60){
    ellipse(860+2*space, base+space/6, 10, 10)}

  if (now.sec > 3 && now.sec < 10){
    ellipse(860+3*space, base+space/6, 10, 10)}
  else if (now.sec > 13 && now.sec < 20){
    ellipse(860+3*space, base+space/6, 10, 10)}
  else if (now.sec > 23 && now.sec < 30){
    ellipse(860+3*space, base+space/6, 10, 10)}
  else if (now.sec > 33 && now.sec < 40){
    ellipse(860+3*space, base+space/6, 10, 10)}
  else if (now.sec > 43 && now.sec < 50){
    ellipse(860+3*space, base+space/6, 10, 10)}
  else if (now.sec > 53 && now.sec < 60){
    ellipse(860+3*space, base+space/6, 10, 10)}

  if (now.sec > 4 && now.sec < 10){
    rect(855, base, 100, 10)}
  else if (now.sec > 14 && now.sec < 20){
    rect(855, base, 100, 10)}
  else if (now.sec > 24 && now.sec < 30){
    rect(855, base, 100, 10)}
  else if (now.sec > 34 && now.sec < 40){
    rect(855, base, 100, 10)}
  else if (now.sec > 44 && now.sec < 50){
    rect(855, base, 100, 10)}
  else if (now.sec > 54 && now.sec < 60){
    rect(855, base, 100, 10)}

  if (now.sec > 5 && now.sec < 10){
    ellipse(860, base-space/3, 10, 10)}
  else if (now.sec > 15 && now.sec < 20){
    ellipse(860, base-space/3, 10, 10)}
  else if (now.sec > 25 && now.sec < 30){
    ellipse(860, base-space/3, 10, 10)}
  else if (now.sec > 35 && now.sec < 40){
    ellipse(860, base-space/3, 10, 10)}
  else if (now.sec > 45 && now.sec < 50){
    ellipse(860, base-space/3, 10, 10)}
  else if (now.sec > 55 && now.sec < 60){
    ellipse(860, base-space/3, 10, 10)}

  if (now.sec > 6 && now.sec < 10){
    ellipse(860+space, base-space/3, 10, 10)}
  else if (now.sec > 16 && now.sec < 20){
    ellipse(860+space, base-space/3, 10, 10)}
  else if (now.sec > 26 && now.sec < 30){
    ellipse(860+space, base-space/3, 10, 10)}
  else if (now.sec > 36 && now.sec < 40){
    ellipse(860+space, base-space/3, 10, 10)}
  else if (now.sec > 46 && now.sec < 50){
    ellipse(860+space, base-space/3, 10, 10)}
  else if (now.sec > 56 && now.sec < 60){
    ellipse(860+space, base-space/3, 10, 10)}

  if (now.sec > 7 && now.sec < 10){
    ellipse(860+2*space, base-space/3, 10, 10)}
  else if (now.sec > 17 && now.sec < 20){
    ellipse(860+2*space, base-space/3, 10, 10)}
  else if (now.sec > 27 && now.sec < 30){
    ellipse(860+2*space, base-space/3, 10, 10)}
  else if (now.sec > 37 && now.sec < 40){
    ellipse(860+2*space, base-space/3, 10, 10)}
  else if (now.sec > 47 && now.sec < 50){
    ellipse(860+2*space, base-space/3, 10, 10)}
  else if (now.sec > 57 && now.sec < 60){
    ellipse(860+2*space, base-space/3, 10, 10)}

  if (now.sec > 8 && now.sec < 10){
    ellipse(860+3*space, base-space/3, 10, 10)}
  else if (now.sec > 18 && now.sec < 20){
    ellipse(860+3*space, base-space/3, 10, 10)}
  else if (now.sec > 28 && now.sec < 30){
    ellipse(860+3*space, base-space/3, 10, 10)}
  else if (now.sec > 38 && now.sec < 40){
    ellipse(860+3*space, base-space/3, 10, 10)}
  else if (now.sec > 48 && now.sec < 50){
    ellipse(860+3*space, base-space/3, 10, 10)}
  else if (now.sec > 58 && now.sec < 60){
    ellipse(860+3*space, base-space/3, 10, 10)}
}