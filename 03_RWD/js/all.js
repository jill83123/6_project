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

  $('.Top-scroll').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');//讀取href的值
    var targetPos = $(target).offset().top;//取得當前元素的位置
    console.log(target);
    console.log(target, targetPos);
    $('html, body').animate({ scrollTop: targetPos }, 1000);
  });

  $('.arrow-up').click(function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  });
});