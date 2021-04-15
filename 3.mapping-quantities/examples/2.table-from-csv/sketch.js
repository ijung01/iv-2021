var totals
var atmospheric
var underground

function preload(){
  totals = loadTable('data/totals.csv', 'csv', 'header')
  atmospheric = loadTable('data/atmospheric.csv', 'csv', 'header')
  underground = loadTable('data/underground.csv', 'csv', 'header')

  comparison = loadTable('data/comparison.csv', 'csv', 'header')
  summits = loadTable('data/summits.csv', 'csv', 'header')
}

function setup(){
  createCanvas(2800, 600)
  background(230)

  // pick one of the three data files to work with and call it 'table'
  var table = summits
  var tablelayered = comparison 

  // log the whole dataset to the console so we can poke around in it
  print(table)

  // set up typography
  textFont("Rokkitt")
  textSize(16)
  fill(30)
  noStroke()

  var x = 200
  var y = 100
  var rowHeight = 60
  var colWidth = 40

  // draw country name labels on the left edge of the table
  textStyle(BOLD)
  textAlign(RIGHT)
  for (var c=1; c<table.getColumnCount(); c++){
    text(table.columns[c], x-colWidth, y)
    y += rowHeight
  }


  // draw year labels in the header row
  x = 214
  y = 100
  textStyle(NORMAL)
  textAlign(BOLD)
  for (var r=0; r<table.getRowCount(); r++){
    var year = table.getString(r, 0)
    text(year, x, y-rowHeight)
    x += colWidth
  }

  fill('rgba(0, 255, 20,.25)')

  // print out the total for each country, one column at a time
  x = 200
  for (var r=0; r<table.getRowCount(); r++){
    y = 100
    for (var c=1; c<table.getColumnCount(); c++){
      var value = table.getNum(r, c)
      // text(value, x, y)
      circle(x, y-4, value*18)
      y += rowHeight
    }
    x += colWidth
  }

  // var hrLocation = map(now.hour, 0, 23, 0, hrHeight)

  fill('rgba(255, 50, 0,.25)')

  x = 200
  for (var r=0; r<tablelayered.getRowCount(); r++){
    y = 100
    for (var c=1; c<tablelayered.getColumnCount(); c++){
      var value = tablelayered.getNum(r, c)
      // text(value, x, y)
      circle(x, y-4, value)
      y += rowHeight
    }
    x += colWidth
  }




}