$(document).ready(function () {
  $('.ham-menu').on('click', function (e) {
    e.preventDefault();
    $('.nav').toggleClass('menu-show');
  });

  $('.sort').on('click', function (e) {
    e.preventDefault();
    $('.content-l').toggleClass('sort-show');
  });

  $('.heart').on('click', function (e) {
    e.preventDefault();
    $('.heart i').toggleClass('fa-solid red');
    $(this).parent().siblings().find('.heart i').removeClass('fa-solid red');
  });


});