$(document).ready(function() {
  //All code goes here
console.log('It works');

$('.tweet-compose').on('focus', function() {
  $('#tweet-controls').css('visibility', 'visible');
  $('.tweet-compose').css('height', '5em');
});

$('.tweet-compose').on('blur', function() {
  if ($('.tweet-compose').val() === "") {
    $('#tweet-controls').css('visibility', 'hidden');
    $('.tweet-compose').css('height', '2.5em');
  };
});

$('.tweet-compose').keyup(function() {
  var newCount = 140 - ($('.tweet-compose').val().length);
  $('#char-count').text(newCount.toString());

  if (newCount <= 10) {
    $('#char-count').css('color', 'red');
  } else {
    $('#char-count').css('color', '#999');
  };

  if (newCount < 0) {
    $('#tweet-submit').prop('disabled', true);
  } else {
    $('#tweet-submit').prop('disabled', false);
  };
});

$('#tweet-submit').on('click', function() {
  var tweetLength = $('.tweet-compose').val().length;
  if (tweetLength > 0) {
    var tweetCopy = $('.tweet').html();
    $('.tweet').prepend(tweetCopy);
  }
})










  //End of doc ready function. Do not code below
})
