$(document).ready(function() {
  $("body").hide();
  $("body").fadeIn(2000);

  $('#submitDiv').mouseenter(function() {
    $('#submitDiv').css("background-image", 'url("img/enter-button-hover.png")');
  });

  $('#submitDiv').mouseleave(function() {
    $('#submitDiv').css("background-image", 'url("img/enter-button.png")');
  });

  $( "#submitDiv" ).click(function() {
    var e = document.getElementById("passwordInput");
    var len = e.value.length;
    if (len && len < 25) {
      $( "#password" ).submit();
    }
  });
});