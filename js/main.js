$(document).ready(function() {
  $(document).ready(function(){
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 50) { 
        $(".nav-default").css("background-color", "#f8f8f8");
        $(".nav-default .navbar-nav > li > a").css("color", "#444");
      } else {
        $(".nav-default").css("background-color", "transparent");
        $(".nav-default .navbar-nav > li > a").css("color", "#f8f8f8");
        $(".navbar-brand img").css("height", "35px");
        $(".navbar-brand img").css("padding-top", "0");
        $(".navbar-nav > li > a").css("padding-top", "15px");
      }
    });
  });
});

// BX Slider
$(document).ready(function (){
  $('.bxslider').bxSlider({
    slideWidth: 292.5,
    auto: true,
    minSlides: 1,
    maxSlides: 3,
    slideMargin: 50
  })
});

// Counter  
$(document).ready(function($) {
  $('.counter-num').counterUp({
      delay: 10,
      time: 1000
  });
});

// Add Animation
$(document).ready(function (){
  'use strict';
  new WOW().init();
})