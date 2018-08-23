$(document).ready(function () {



  $('#dropDownList').on('click', function () {
    $('#dropDownList').toggleClass('open');
    if ($("#dropDownList").hasClass("open")) {

      $('#list').css({
        "display": "none"
      });
    } else {
      $('#list').css({
        "display": "block"
      });

    }
  });


});
