(function ($) {
    'use strict';

    // Index of jQuery Active Code

    // :: 1.0 Welcome Slider Active Code
    // :: 2.0 Testimonials Slider Active Code
    // :: 3.0 App Screenshots Slider Active Code
    // :: 4.0 Meanmenu Active Code
    // :: 5.0 Onepage Nav Active Code
    // :: 6.0 Video Active Code
    // :: 7.0 ScrollUp Active Code
    // :: 8.0 MatchHeight Active Code
    // :: 9.0 YouTube Video Active Code
    // :: 10.0 wow active code
    // :: 11.0 PreventDefault a Click
    // :: 12.0 Hover Effect Active Code
    // :: 13.0 counterup active code
    // :: 14.0 Sticky Active Code
    // :: 15.0 Preloader active code

    var $window = $(window);

    // Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // Welcome Slider Active Code
    if ($.fn.owlCarousel) {
        var wel_slides = $('.welcome_slides');
        wel_slides.owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            dotsSpeed: 1000,
            autoplay: true,
            smartSpeed: 1000,
            autoplayHoverPause: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        wel_slides.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        wel_slides.on('translated.owl.carousel', function () {
            var layer = wel_slides.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        var dot = $('.welcome_slides .owl-dot');
        dot.each(function () {
            var index = $(this).index() + 1;
            if (index < 10) {
                $(this).html('0').append(index);
            } else {
                $(this).html(index);
            }
        });

        // Testimonials Active Code
        $(".testimonials").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
            dots: true,
            autoplay: false,
            smartSpeed: 800
        });

        // App Screenshots Active Code
        $(".app_screenshots").owlCarousel({
            items: 5,
            margin: 30,
            loop: true,
            nav: false,
            center: true,
            dots: false,
            center: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }

    // ScrollDown Active Code

    var downloadbtn = $("#downloadAppbtn");
    var contactbtn = $("#contactbtn");

    downloadbtn.click(function () {
        $('html, body').animate({
            scrollTop: $("#download").offset().top
        }, 1500);
    });
    contactbtn.click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1500);
    });

    // Onepage Nav Active Code
    if ($.fn.onePageNav) {
        $('#corenav').onePageNav({
            currentClass: 'current_page_item',
            easing: 'easeInOutQuart',
            scrollSpeed: 1440
        });
    }

    // niceScroll Active Code
    if ($.fn.niceScroll) {
        $("body, textarea").niceScroll({
            cursorcolor: "#1a1a1a",
            cursorwidth: "5px",
            background: "transparent",
            cursorborder: "none",
            cursorborderradius: 0,
            zindex: "5000"
        });
    }

    // Video Active Code
    if ($.fn.magnificPopup) {
        $('.video_btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            easingType: 'easeInOutQuart',
            scrollText: ['<i class="ti-angle-up"></i>'],
            scrollImg: false
        });
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    // Hover Effect Active Code
    $('.single_benifits').on('mouseenter', function () {
        $('.single_benifits').removeClass('active');
        $(this).addClass('active');
    });

    // counterup active code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });
    }

    // Color Picker Active Code
    $(".select_opt").on('click', function () {
        var getId = $(this).attr('value');
        $('body').removeClass('green purple red pink deepPurple naval cyan blue deepRose').addClass(getId);
    });
    $(".color_picker_switcher").on('click', function () {
        $(".color_picker_area").toggleClass('on');
    })

    // Demo Preview Active Code
    $(".onepage_demo_switcher").on('click', function () {
        $(".onepage_demo_area").toggleClass('on');
    })

    // Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 150) {
            $('.main_header_area').addClass('sticky slideInDown');
        } else {
            $('.main_header_area').removeClass('sticky slideInDown');
        }
    });

    // wow active code
    if ($window.width() > 767) {
        new WOW().init();
    }
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }
    
})(jQuery);