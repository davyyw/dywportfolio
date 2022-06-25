jQuery(document).ready(
  function($){
    
    "use strict";
    // dropdown menu
    var mobileWidth = 992;
    var navcollapse = $('.navigation li.dropdown');

    navcollapse.hover(function () {
        if ($(window).innerWidth() >= mobileWidth) {
            $(this).children('ul').stop(true, false, true).slideToggle(300);
            $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
        }
    });

    // Add a class beside main-header for changing menu background color
    $(".navbar-toggle").on("click", function () {
        $(".main-header").toggleClass("bg-black");
    });
  
    // Skillbars Animation
    if ($(".skillbar").length) {
        $(".skillbar").appear(function () {
            $(".skillbar").skillBars({ from: 0, speed: 4000, interval: 100 });
        });
    }

    // Circle Skills Animation
    if ($.fn.circleProgress) {
      var progress = $('.circle-skill')
      if($.fn.circleProgress) {
        progress.appear(function () {
        progress.circleProgress({
          value: 0.65,
          size: 170,
          animation : { duration: 4000},
          fill: '#ffcc33',
          }).on('circle-animation-progress', function(event, progress) {
          $(this).find('b').html(Math.round(65 * progress) + '<span>%</span>');
          });
        });
      };
    };
    if ($.fn.circleProgress) {
      var progress2 = $('.circle-skill.two')
      if($.fn.circleProgress) {
        progress2.appear(function () {
        progress2.circleProgress({
          value: 0.75,
          }).on('circle-animation-progress', function(event, progress) {
          $(this).find('b').html(Math.round(75 * progress) + '<span>%</span>');
          });
        });
      };
    };
    if ($.fn.circleProgress) {
      var progress3 = $('.circle-skill.three')
      if($.fn.circleProgress) {
        progress3.appear(function () {
        progress3.circleProgress({
          value: 0.70,
          }).on('circle-animation-progress', function(event, progress) {
          $(this).find('b').html(Math.round(70 * progress) + '<span>%</span>');
          });
        });
      };
    };

//When document is resize, do

  $(window).on('resize', function () {
      var mobileWidth = 992;
      var navcollapse = $('.navigation li.dropdown');
      navcollapse.children('ul').hide();
      navcollapse.children('.megamenu').hide();
      if ($(window).innerWidth() >= mobileWidth) {
          $(".main-header").removeClass("bg-black");
      }

  });

//When document is loaded, do

  $(window).on('load', function () {
      //Hide Loading Box (Preloader)
      function handlePreloader() {
          if ($('.preloader').length) {
              $('.preloader').delay(200).fadeOut(500);
          }
      }
      handlePreloader();

  });
});


