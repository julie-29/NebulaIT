/***************************************************
==================== JS INDEX ======================
****************************************************
****************************************************/

(function ($) {
  "use strict";

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $("#header").removeClass("sticky-menu");
      $(".header-topbar").show();
      $(".header-img").show();

    } else {
      $("#header").addClass("sticky-menu");
      $(".header-topbar").hide();
      $(".header-img").hide();

    }
  });


  // Back - To - Top
  $(window).scroll(function () {
      $(this).scrollTop() > 100 ? $("#backTop").fadeIn() : $("#backTop").fadeOut();
    }),
    $("#backTop").click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, "slow")
    });


})(jQuery);