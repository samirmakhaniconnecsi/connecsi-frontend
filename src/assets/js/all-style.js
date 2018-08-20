$(document).ready(function () {

  $('#test').on('click', function () {
    if (screen.width > 1023) {
      $('#sidebar').toggleClass('active');
      if ($("#sidebar").hasClass("active")) {

        $('.tag').css({
          "display": "none"
        });
      } else {
        $('.tag').css({
          "display": "inline-block"
        });

      }

    }
  });
  $('#togelMenu').on('click', function () {
    $('#subMenulist').toggleClass('active');
    if ($("#subMenulist").hasClass("active")) {

        $('#subMenulist').css({
          "display": "none"
        });
      } else {
        $('#subMenulist').css({
          "display": "block"
        });

      }
  });
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
  $(".dropdown-menu").on('click', 'li a', function () {
    var selText = $(this).html();
    $(this).parent('li').siblings().removeClass('active');
    $(this).parents('.btn-group').find('.selection').html(selText);
    $(this).parents('li').addClass("active");
  });
  
});
