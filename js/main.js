$(document).ready(function () {

  //initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters

    speed: 1000,
    loop: true,
    navigation: {
      nextEl: '.swiper__button-next',
      prevEl: '.swiper__button-prev'
    },
    autoplay: {
      delay: 4000
    },
    effect: 'fade'
  });

  if (window.innerWidth >= 768) {
    mySwiper.autoplay.stop();
  }

  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
      mySwiper.autoplay.stop();
    } else {
      mySwiper.autoplay.start();
    }
  })
}); 