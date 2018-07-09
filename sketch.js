var y = (new Date()).getFullYear(); // This line of code gets the cuurent year and stores it in a variable called y.

var leapYear; // This variable will be used later on in the code as a boolean to state wheher or not the current year is a leap year.

function setup () {
  createCanvas(screen.width, screen.height); // This is the interface on which the user of the weppage will see the result of whether the current year is a loop year or not.
}

function draw () {
  // The chunk of code below checks to see if the current year is not
  // divisible by the numbers 4, 100, and 400 and the outcome of those
  // operations determines whether or not the year is a leap year.

  if (y % 4 != 0) {
    leapYear = false; // this makes the variable called leapYear false which means that the year is not a leap year.
  }
  else if (y % 100 != 0) {
    leapYear = true; // this makes the variable called leapYear true which means that the year is a leap year.
  }
  else if (y % 400 != 0) {
    leapYear = false;
  }
  else {
    leapYear = true;
  }
  textSize(20);

  if (leapYear) {
    background("red"); // this makes the background color of the canvas/drawing board red.
    text("The year we are in now: " + y.toString() + " is a leap year.", width/2, height/2); // this makes the text in the parentheses as well as the current year appear as text in the middle of the canvas.
  }
  else {
    background("green");  // this makes the background color of the canvas/drawing board green.
    text("The year we are in now: " + y.toString() + " is not a leap year.", width/2, height/2)
  }
}
