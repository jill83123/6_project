$(document).ready(function() {
    
  $('.list > li > a').click(function(event) {
    event.preventDefault();

    $(this).toggleClass('active');
    $(this).parent().siblings().find('a').removeClass('active');
    
    $(this).parent().find('ul').slideToggle();
    $(this).parent().siblings().find('ul').slideUp();
  });

  $('.Top-arrow-Icon').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 500);
   });

  //swiper
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',

    autoplay: {
      delay: 2000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  });

  //lightbox
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': false,
    'disableScrolling':true,
  })

});