$(function () {

   $(".feedback__slider").slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      // fade: true,
      cssEase: 'linear'
   });


   // * --------------------------------------------------------


   $(".cuisine__item").addClass("wow flipInX");

   $(".report__item").addClass("wow zoomIn");

   $(".header-content__inner-btn").addClass("wow fadeInUp");

   $(".header-content__inner-text").addClass("wow fadeInDown");

   $(".app__img").addClass("wow fadeInLeft").attr("data-wow-offset", "200");

   $(".app__article").addClass("wow fadeInRight").attr("data-wow-offset", "200");

   $(".header-top__logo").addClass("wow rotateIn");

   $(".menu__btn").addClass("wow rotateIn");

   $(".header-content__inner-title").addClass("wow slideInDown");


   new WOW().init();

});