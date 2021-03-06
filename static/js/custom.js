/*========================================================================
EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Template Name   : Lucro
========================================================================*/
  

(function($){
    "use strict"

    var LUC = {};

    /*--------------------
      * Pre Load
    ----------------------*/
    LUC.WebLoad = function(){
      document.getElementById("loading").style.display = "none"; 
    }

    /*--------------------
        * Header Class
    ----------------------*/
    LUC.HeaderSticky = function(){
        $(".navbar-toggler").on("click", function(a) {
            a.preventDefault(), 
            $(".navbar").addClass("fixed-header")
        });
    }

    /*--------------------
        * Menu Close
    ----------------------*/
    LUC.MenuClose = function(){
      $('.navbar-nav .nav-link').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }


    /*--------------------
        * Smooth Scroll
    ----------------------*/
    LUC.HeaderScroll = function(){
        $('header a[href*="#"]:not([href="#"])').on('click', function() {
          var PathName = location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname;
            if (PathName) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 65,
                      }, 1000);
                      return false;
                  }
            }
        });
    }

    /*--------------------
        * Header Fixed
    ----------------------*/
    LUC.HeaderFixed = function(){
      var varHeaderFix = $(window).scrollTop() >= 60;
        if (varHeaderFix) {
           $('.navbar').addClass('fixed-header');
        }
        else {
           $('.navbar').removeClass('fixed-header');
        }
    }    


    /*--------------------
    * owl Slider
    ----------------------*/

    LUC.ClientSlider = function(){
      var testimonials_slider = $('#client-slider-single');
        testimonials_slider.owlCarousel({
            loop: true,
            margin: 40,
            nav:false,
            dots:true,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 1
              },
              768: {
                items: 2
              },
              991: {
                items: 3
              },
              1140: {
                items: 3
              }
            }
        });
    }

    LUC.WorkSlider = function(){
      var work_slider = $('.brand-slider');
        work_slider.owlCarousel({
            loop: true,
            margin: 0,
            nav:false,
            dots:true,
            responsive: {
              0: {
                items: 2
              },
              600: {
                items: 3
              },
              768: {
                items: 3
              },
              991: {
                items: 4
              },
              1140: {
                items: 7
              }
            }
        });
    }

    LUC.PopupVideo = function(){
      $('.popup-video').magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false
        });
    }

    LUC.LightboxGallery = function(){
      $('.portfolio-col').magnificPopup({
          delegate: '.lightbox-gallery',
          type: 'image',
          tLoading: '#%curr%',
          mainClass: 'mfp-fade',
          fixedContentPos: true,
          closeBtnInside: true,
          gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
          }
      });
    }
    

    /*--------------------
        * Progress Bar 
    ----------------------*/
    LUC.ProgressBar = function(){
        $(".progress .progress-bar").each(function () {
          var bottom_object = $(this).offset().top + $(this).outerHeight();
          var bottom_window = $(window).scrollTop() + $(window).height();
          var progressWidth = $(this).attr('aria-valuenow') + '%';
          if(bottom_window > bottom_object) {
            $(this).css({
              width : progressWidth
            });
          }
        });
    }

    /*--------------------
    * Counter JS
    ----------------------*/
    var a = 0;
    LUC.Counter = function(){
      var oTop = $('.counter-box').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
          a = 1;
        }
    }

    // Window on Load
    $(window).on("load", function(){
      LUC.WebLoad();
    });

    $(document).on("ready", function(){
        LUC.WorkSlider(),
        LUC.PopupVideo(),
        LUC.ClientSlider(),
        LUC.LightboxGallery(),
        LUC.MenuClose(),
        LUC.HeaderScroll(),
        LUC.Counter(),
        LUC.ProgressBar(),
        LUC.HeaderSticky();
    });

    $(window).on("scroll", function(){
        LUC.Counter(),
        LUC.ProgressBar(),
        LUC.HeaderFixed();
    });

})(jQuery);
