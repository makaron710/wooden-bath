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

  // Кнопка прокрутки вверх
  $(function () {
    $('.scroll-up-button').hide();

    if ($(window).scrollTop() > 600) {
      $('.scroll-up-button').fadeIn();
    } else {
      $('.scroll-up-button').fadeOut();
    }


    $(window).scroll(function () {
      if ($(this).scrollTop() > 600) {
        $('.scroll-up-button').fadeIn();
      } else {
        $('.scroll-up-button').fadeOut();
      }
    });

    // Если доскролили нижней секции, кнопка отодвигается на 15px + торчащий кусок этой секции
    $(window).scroll(function () {
      if ($(this).scrollTop() > ($(document).height() - $('.footer').outerHeight() - $(window).outerHeight())) {
        $('.scroll-up-button').css("bottom", - $(document).height() + $(this).scrollTop() + $(window).outerHeight() + $('.footer').outerHeight() + 15);
      } else {
        $('.scroll-up-button').css("bottom", 15);
      }
    });

/*     $(window).scroll(function () {
      console.log(- $(document).height() + $(this).scrollTop() + $(window).outerHeight() + $('.footer').outerHeight()
      );
    }); */

    $('.scroll-up-button').click(function () {
      $('html').animate({
        scrollTop: 0
      }, 500);
    });
  });

  // Плавный переход по якорям
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

  // СОБЫТИЯ МОДАЛЬНОГО ОКНА
  const modalCloseBtn = document.querySelector('.close-btn');
  const modal = document.querySelector('.modal');
  const recCons = document.getElementById('receiveConsultation');
  const modalForm = document.getElementById('modalForm');

  // Закрытие модального окна по кнопке .close-btn
  modalCloseBtn.addEventListener('click', function() {
    modal.classList.remove('modal--visible');
    document.body.style.overflow = 'auto';
  });

  // Закрытие модального окна по кнопке ESC
  document.addEventListener('keyup', function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      modal.classList.remove('modal--visible');
      document.body.style.overflow = 'auto';
    }
  });

  // Закрытие модального окна по клику по темной области
  document.addEventListener('click', function() {
    if ((event.target.classList.contains('modal--visible')) && !event.target.classList.contains('form-container')) {
      modal.classList.remove('modal--visible');
      document.body.style.overflow = 'auto';
    }
  });

  // Открытие modal-form
  recCons.addEventListener('click', function() {
    modalForm.classList.add('modal--visible');
    document.body.style.overflow = 'hidden';
  });

  // ФОРМА
  // Маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00');

  // Валидация формы
  $('.form').each(function validateForm() {
    $(this).validate({
      // Класс, который будет присваиваться для элементов (полей) с ошибкой
      errorClass: "invalid",

      // Правила
      rules: {
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userPhone: {
          required: true,
          minlength: 17
        }
      },
      // сообщения
      messages: {
        userName: {
          required: "Введите свое имя",
          minlength: "Должно быть не менее 2 символов",
          maxlength: "Должно быть не более 15 символов"
        },
        userPhone: "Введите 10-значный номер телефона"
      }
    });
  });

}); 