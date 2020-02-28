$(document).ready(function () {

  //initialize swiper
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

  if (document.body.clientWidth >= 768) {
    mySwiper.autoplay.stop();
  }

  window.addEventListener('resize', function() {
    if (document.body.clientWidth >= 768) {
      mySwiper.autoplay.stop();
    } else {
      mySwiper.autoplay.start();
    }
  })

  //initialize swiper-s2

  let initializedS2 = false;
  var paginationS2 = document.querySelector('.swiper-pagination');
  
  if (document.body.clientWidth <= 767) {
    paginationS2.style.display = 'block';
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

    initializedS2 = true;
  }

  window.addEventListener('resize', function() {
    if (document.body.clientWidth >= 767) {
      if (initializedS2 === true) {
        mySwiper2.destroy();
        initializedS2 = false;
        paginationS2.style.display = 'none';
      }
    } else {
      if (initializedS2 === false) {
        paginationS2.style.display = 'block';
        mySwiper2 = new Swiper('.swiper-container-s2', {
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
    
        initializedS2 = true;
        /* document.location.href = '#projects'; */
      }
    }
  })

  //initialize swiper-s3
  var mySwiper3  = new Swiper('.swiper-container-s3', {
    // Optional parameters
    initialSlide: 1,
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: '.swiper__button-next-s3',
      prevEl: '.swiper__button-prev-s3'
    },
    pagination: {
      el: '.swiper-pagination-s3',
      type: 'bullets'
    },

    /* effect: 'fade' */
  });

  // кнопка прокрутки вверх
  $(function () {
    $('.scroll-up-button').hide();

    $(window).scroll(function () {
      if ($(this).scrollTop() > 600) {
        $('.scroll-up-button').fadeIn();
      } else {
        $('.scroll-up-button').fadeOut();
      }
    });

    $('.scroll-up-button').click(function () {
      $('html').animate({
        scrollTop: 0
      }, 500);
    });
  });

  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }


}); 