(function() {
  //initialize variables
  var startButton = $('#start');
  var seconds = $('#seconds');
  var minutes = $('#minutes');
  var breakButton = $('#break');
  var timerInterval;
  // main functionality
  startButton.on('click', startTimer);

  //function definitions
  function startTimer(){
    if(!timerInterval){
        timerInterval = setInterval(countdown, 1000);
    }
  }
  function countdown(){
    var secondsText = seconds.text();
    var secondsTextAsNumber = parseInt(secondsText);
    var minutesText = minutes.text();
    var minutesTextAsNumber = parseInt(minutesText);
    // console.log(typeof secondsText);
    // console.log(typeof secondsTextAsNumber);
    if(minutesTextAsNumber === 0 && secondsTextAsNumber === 0){
      //stop!
      clearInterval(timerInterval); //this will stop the timer
      //disable the start button
      startButton.attr('disabled', true);
      // unhide the break button
      breakButton.show();
      return;
    }
    if(secondsTextAsNumber === 0) {
      if(minutesTextAsNumber !== 0){
        var decreasedMinutesAsNumberByOne = minutesTextAsNumber - 1;
        var padMinutesTextAsNumber = pad(decreasedMinutesAsNumberByOne);
        minutes.text(padMinutesTextAsNumber);
      }
      seconds.text("59");
      //then change seconds text to 59
    } else {
      var decreasedSecondsAsNumberByOne = secondsTextAsNumber - 1;
      var padSecondsTextAsNumber = pad(decreasedSecondsAsNumberByOne);
      seconds.text(padSecondsTextAsNumber); //this writes inside of the html
    }

    // var secondsValue = parseInt(seconds.text());
    //
    // seconds.text(pad(secondsValue - 1));
  }

  function pad(num){
    if(num < 10){
      //spit out the number with a leading zero
      return "0" + num;
    } else {
      // spit out the original number
      return num;
    }
  }
}());
