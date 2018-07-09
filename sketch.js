var y = (new Date()).getFullYear();
var leapYear;
function setup () {
  createCanvas(screen.width, screen.height);
  console.log(y);
}

function draw () {
  if (y % 4 != 0) {
    leapYear = false;
  }
  else if (y % 100 != 0) {
    leapYear = true;
  }
  else if (y % 400 != 0) {
    leapYear = false;
  }
  else {
    leapYear = true;
  }
  textSize(20);

  if (leapYear) {
    background("red");
    text("The year we are in now: " + y.toString() + " is a leap year.", width/2, height/2);
  }
  else {
    background("green");
    text("The year we are in now: " + y.toString() + " is not a leap year.", width/2, height/2)
  }
}
