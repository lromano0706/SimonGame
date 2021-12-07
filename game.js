// variable for default stored colors
var buttonColours = ['red', 'blue', 'green', 'yellow'];
//variable to hold random pattern and to hold user clicked pattern
var gamePattern = [];
var userClickedPattern = [];

// level variable to hold what level you are on
var level = 0;

// variable that holds status of game if its started or not
var started = false;

// handler to start game only if started variable is false
$(document).keypress(function () {
  if (started === false) {
    $('#level-title').text('Level ' + level);
    nextSequence();
    started = true;
  }
});
// handler when clicking on to a box

$('.btn').click(function () {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  nextSequence();
  console.log(gamePattern);
  console.log(userClickedPattern);
});

// game functions
function nextSequence() {
  level++;
  $('#level-title').text(`Level ${level}`);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  $('#' + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
}

function playSound(name) {
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

function animatePress(currentColour) {
  $('#' + currentColour).addClass('pressed');
  setTimeout(function () {
    $('#' + currentColour).removeClass('pressed');
  }, 100);
}
