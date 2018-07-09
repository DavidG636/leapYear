var y = (new Date()).getFullYear(); // This line of code gets the cuurent year and stores it in a variable called y.

var leapYear; // This variable will be used later on in the code as a boolean to state wheher or not the current year is a leap year.

function setup () {
  createCanvas(screen.width, screen.height); // This is the interface on which the user of the weppage will see the result of whether the current year is a loop year or not.
}

function draw () {
  // The chunk of code below checks to see if the current year is not
  // divisible by 4 and if that is true then it is not a leap year.

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
