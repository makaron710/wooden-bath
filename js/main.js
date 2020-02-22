$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    navigation: {
      nextEl: '.swiper__button-next',
      prevEl: '.swiper__button-prev'
    }
  });
}); 