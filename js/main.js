$(document).ready(function () {

  //initialize swiper-s1
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

  var mySwiper2 = new Swiper('.swiper-container-s2', {
    // Optional parameters

    speed: 1000,
    loop: true,
    navigation: {
      nextEl: '.swiper__button-next-s2',
      prevEl: '.swiper__button-prev-s2'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    autoplay: {
      delay: 4000
    },
    effect: 'fade'
  });

  //initialize swiper-s2
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 767) {
      mySwiper2.destroy();
    }
  })


}); 