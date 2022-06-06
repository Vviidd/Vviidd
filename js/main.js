$(function () {

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="">',
    asNavFor: '.slider-dots__head'
  });

  $('.slider-dots__head').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    responsive: [
      {
        breakpoint: 961,
        settings: "unslick"
      },
    ]
  });

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt=""></img>',
    asNavFor: '.slider-map',
    responsive: [
      {
        breakpoint: 1385,
        settings: {
          slidesToShow: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 961,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1103,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 961,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.holder__slider, .shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="">',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg"></div><div class="quantity-button quantity-down"><img src="img/minus.svg"></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  $('.quantity-button').on('click', function () {
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('₽' + summ);
  });

  let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
  $('.summ').html('₽' + summ);


  $('.surfboard-box__circle').on('click', function () {
    $(this).toggleClass('active')
  });

  $('.menu-btn').on('click', function () {
    $('.menu').toggleClass('active');
  });

  new WOW().init();

  $('a').on('click', function () {

    let href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, {
      duration: 400,
      easing: "linear" // по умолчанию «swing»
    });

    // return false;

  });

  //   $document.getElementById('dateFolder').innerHTML = day + "." + month + "." + year;
  //   temp_date = new Date();
  //   day = temp_date.getDate();
  //   month = temp_date.getMonth() + 1;
  //   year = temp_date.getYear();
  //   if (day < 10) {
  //     day = "0" + day;
  //   }
  //   if (month < 10) {
  //     month = "0" + month;
  //   }

});

// $(function () {
//   $('.load-more').click(function () {
//       $('.none').toggleClass('active');
//
// })