$(document).ready(function() {
  $('.tp_case-study__slick').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      arrows: false,
      focusOnSelect: true,
      mobileFirst: true,
      adaptiveHeight: true,
      responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 4
      }
    },
    {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    }
  ]
  });

  $('.tp_image-carousel__slick').slick({
      lazyLoad: 'ondemand',
      slidesToScroll: 1,
      slidesToShow: 3,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 3000,
      variableWidth: true,
      nextArrow: $('a.tp_image-carousel__arrow'),
      prevArrow: "",
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
        $(".tp_header").addClass("scrolled");
    } else {
        $(".tp_header").removeClass("scrolled");
    }
});

$(".tp_nav-menu__bars").click(function() {
    $(".tp_header").addClass("menu-active");
});

$(".tp_nav-menu__close").click(function() {
    $(".tp_header").removeClass("menu-active");
});

$(".tp_card--solution").click(function() {
    if ( $(this).hasClass("shift") ) {
        $(this).removeClass("shift");
    } else {
        $(this).addClass("shift");
    }

});

});
