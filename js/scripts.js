// target your button and assign an ask function that outputs a random image to your page
var answers = Array(
  'magic8ball_1.png',
  'magic8ball_2.png',
  'magic8ball_3.png',
  'magic8ball_4.png',
  'magic8ball_5.png',
  'magic8ball_6.png',
  'magic8ball_7.png',
  'magic8ball_8.png',
  'magic8ball_9.png',
  'magic8ball_10.png',
  'magic8ball_11.png',
  'magic8ball_12.png',
  'magic8ball_13.png',
  'magic8ball_14.png',
  'magic8ball_15.png',
  'magic8ball_16.png',
  'magic8ball_17.png',
  'magic8ball_18.png',
  'magic8ball_19.png',
  'magic8ball_20.png',
  'magic8ball_empty.png'
)


var answers = Math.floor(Math.random() * 21);
switch (Math.floor(Math.random() * 21)) {
  case 1:
    answers =
    document.body.style.backgroundImage = "url('../img/magic8ball_1.png')";
  break;
  case 2:
    answers =
    document.body.style.backgroundImage = "url('../img/magic8ball_2.png')";
}

document.getElementById('answerButton');
