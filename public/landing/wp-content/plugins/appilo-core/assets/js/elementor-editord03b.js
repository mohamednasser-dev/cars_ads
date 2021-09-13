/*
Template Name: Appilo
Author: themexriver
Version: 2.9
*/

(function($){
    'use strict';

    /*----- ELEMENTOR LOAD FUNCTION CALL ---*/

    $( window ).on( 'elementor/frontend/init', function() {

//App Showcase
           var ASCservices = function (){
               if($('body.rtl').length) {
                   var LangRtl = true;
               }else {
                   var LangRtl = false;
               }
            if($('.ei-service-slide').length){
                var customPagerSlider = $(".ei-service-slide").bxSlider({
                    adaptiveHeight: true,
                    controls: true,
                    rtl: LangRtl,
                    pause: 5000,
                    speed: 1000,
                    nextText: '<span class="control-icon fa fa-angle-right"></span>',
                    prevText: '<span class="control-icon fa fa-angle-left"></span>',
                    pagerCustom: '#banner-pager',
                });
            }
        }

        var ASCscreenslider = function (){
            if ($('.ei-appScreenshotCarousel-container').length) {
                if ($('.ei-appScreenshotCarousel-container').length) {
                    var swiper = new Swiper('.ei-appScreenshotCarousel-container', {
                        effect: 'coverflow',
                        loop: true,
                        centeredSlides: true,
                        slidesPerView: 4,
                        initialSlide: 4,
                        keyboardControl: true,
                        mousewheelControl: false,
                        lazyLoading: true,
                        preventClicks: false,
                        preventClicksPropagation: false,
                        lazyLoadingInPrevNext: true,
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',
                        coverflow: {
                            rotate: 0,
                            stretch: 0,
                            depth: 250,
                            modifier: .5,
                            slideShadows: false,
                        },
                        breakpoints: {
                            1199: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            991: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            575: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            }
                        }
                    });

                }
            }
        }

        var ASCteam = function (){
            if($('body.rtl').length) {
                var LangRtl = true;
            }else {
                var LangRtl = false;
            }
            $('#ei-team-slide').owlCarousel({
                margin:0,
                responsiveClass:true,
                nav: true,
                dots: false,
                loop:true,
                rtl: LangRtl,
                center:true,
                autoplay: false,
                navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
                smartSpeed: 1000,
                responsive:{
                    0:{
                        items:1,
                    },
                    400:{
                        items:1,
                    },
                    600:{
                        items:2,
                    },
                    700:{
                        items:2,
                    },
                    1000:{
                        items:3,

                    }
                },
            })
        }

       var ASCpartner = function (){
           if($('body.rtl').length) {
               var LangRtl = true;
           }else {
               var LangRtl = false;
           }
            $('#ei-partner-slide').owlCarousel({
                margin: 105,
                autoplay: true,
                loop: true,
                rtl: LangRtl,
                responsiveClass:true,
                nav: false,
                dots: false,
                slideTransition:'linear',
                autoplayTimeout: 10,
                autoplayHoverPause:false,
                autoplaySpeed:4500,
                responsive:{
                    0:{
                        items:2,
                    },
                    400:{
                        items:3,
                    },
                    600:{
                        items:4,
                    },
                    700:{
                        items:4,
                    },
                    1000:{
                        items:4,

                    }
                },
            })
        }
        var ASCtestimonial = function (){
            if($('body.rtl').length) {
                var LangRtl = true;
            }else {
                var LangRtl = false;
            }
            $('#testimonial-scroller').owlCarousel({
                margin: 105,
                responsiveClass:true,
                nav: false,
                dots: true,
                rtl: LangRtl,
                autoplay: false,
                smartSpeed: 1000,
                responsive:{
                    0:{
                        items:1,
                    },
                    400:{
                        items:1,
                    },
                    600:{
                        items:1,
                    },
                    700:{
                        items:1,
                    },
                    1000:{
                        items:2,

                    }
                },
            })
        }
        var ASCcounter = function (){
                if ($(".odometer").length) {
                    $('.odometer').appear();
                    $(document.body).on('appear', '.odometer', function(e) {
                        var odo = $(".odometer");
                        odo.each(function() {
                            var countNumber = $(this).attr("data-count");
                            $(this).html(countNumber);
                        });
                        window.odometerOptions = {
                            format: 'd',
                        };
                    });
                }
            }

            var ASCscroller = function () {
                    $("#how-workscrollbar").mCustomScrollbar({
                        autoHideScrollbar:true,
                    });
                }
                //End
        //Appilo
        var APfeature = function (){
            if ($('.app-features-carousel').length) {
                $('.app-features-carousel').owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: true,
                    center: true,
                    navText: [
                        '<i class="fa fa-angle-left"></i>',
                        '<i class="fa fa-angle-right"></i>'
                    ],
                    dots: false,
                    autoWidth: false,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        480: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        768: {
                            items: 2
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
            }}
            //Blog
            var APblog = function (){
            if ($('.blog-carousel').length) {
                $('.blog-carousel').owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: true,
                    center: true,
                    navText: [
                        '<i class="fa fa-angle-left"></i>',
                        '<i class="fa fa-angle-right"></i>'
                    ],
                    dots: false,
                    autoWidth: false,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        480: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        768: {
                            items: 2
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
            }
        }
        // Testimonial
        var APtestimonial = function () {
            if ($('.appilo-main .testimonials-slider .slider').length) {
                $('.testimonials-slider .slider').bxSlider({
                    // adaptiveHeight: true,
                    auto:false,
                    controls: true,
                    nextText: '<i class="fas fa-long-arrow-alt-right"></i>',
                    prevText: '<i class="fas fa-long-arrow-alt-left"></i>',
                    mode: 'fade',
                    pause: 3000,
                    speed: 500,
                    pager: true,
                    pagerCustom: '#testimonials-slider-pager'
                });
            }
        }
        //Pricing
        var APpricing = function () {

            var toggleSwitch = $('#switch-toggle-tab label.switch');
            var TabTitle = $('#switch-toggle-tab li');
            var monthTabTitle = $('#switch-toggle-tab li.month');
            var yearTabTitle = $('#switch-toggle-tab li.year');
            var monthTabContent = $('#month');
            var yearTabContent = $('#year');
            // hidden show deafult;
            monthTabContent.fadeIn();
            yearTabContent.fadeOut();
            function toggleHandle() {
                if(toggleSwitch.hasClass('on')) {
                    yearTabContent.fadeOut();
                    monthTabContent.fadeIn();
                    monthTabTitle.addClass('active');
                    yearTabTitle.removeClass('active');
                }else {
                    monthTabContent.fadeOut();
                    yearTabContent.fadeIn();
                    yearTabTitle.addClass('active');
                    monthTabTitle.removeClass('active');
                }
            };
            monthTabTitle.on('click', function () {
                toggleSwitch.addClass('on').removeClass('off');
                toggleHandle();
                return false;
            });
            yearTabTitle.on('click', function () {
                toggleSwitch.addClass('off').removeClass('on');
                toggleHandle();
                return false;
            });
            toggleSwitch.on('click', function () {
                toggleSwitch.toggleClass('on off');
                toggleHandle();
            });

        }
        var APvideo = function() {
            if ($('.appilo-main .video-popup').length) {
                $('.video-popup').magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: true,

                    fixedContentPos: false
                });
            };
        }
        //End
        //Topapp
            var TPteam = function(){
                // Team Carousel
                if ($('.topapp-team-carousel').length) {
                    $('.topapp-team-carousel').owlCarousel({
                        loop:true,
                        margin:0,
                        nav:true,
                        center:true,
                        smartSpeed: 500,
                        autoplay: 4000,
                        navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
                        responsive:{
                            0:{
                                items:1
                            },
                            480:{
                                items:1
                            },
                            600:{
                                items:2
                            },
                            800:{
                                items:3
                            },
                            1024:{
                                items:3
                            }
                        }
                    });
                }

            }
        //Pricing
        var TPpricing = function(){
            if($('.tabs-box').length){
                $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
                    e.preventDefault();
                    var target = $($(this).attr('data-tab'));

                    if ($(target).is(':visible')){
                        return false;
                    }else{
                        target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                        $(this).addClass('active-btn');
                        target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                        target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                        $(target).fadeIn(300);
                        $(target).addClass('active-tab');
                    }
                });
            }
        }
        var TPbanner = function () {
            if($('.topapp-main .banner-slider').length){
                var customPagerSlider = $(".topapp-main .banner-slider").bxSlider({
                    adaptiveHeight: true,
                    //auto:false,
                    controls: true,
                    pause: 5000,
                    speed: 1000,
                    nextText: '<span class="control-icon fas fa-angle-right"></span>',
                    prevText: '<span class="control-icon fas fa-angle-left"></span>',
                    pagerCustom: '#banner-pager',
                });
            }
            //Banner Mobile Pager
            $('.topapp-main .banner-section .carousel-column .inner-column .pager-box .pager.two').on('click', function() {
                $('.mobile-small-image').addClass('visible');
            });

            $(' .banner-section .carousel-column .inner-column .pager-box .pager.one').on('click', function() {
                $('.mobile-small-image').removeClass('visible');
            });

            $('.banner-section .carousel-column .inner-column .pager-box .pager.three').on('click', function() {
                $('.mobile-small-image').removeClass('visible');
            });

            $('.banner-section .carousel-column .inner-column .pager-box .pager.three').on('click', function() {
                $('.heart-image-icon').addClass('visible-heart');
            });

            $('.banner-section .carousel-column .inner-column .pager-box .pager.one').on('click', function() {
                $('.heart-image-icon').removeClass('visible-heart');
            });
            $('.banner-section .carousel-column .inner-column .pager-box .pager.two').on('click', function() {
                $('.heart-image-icon').removeClass('visible-heart');
            });

            $('.topapp-main .banner-section .carousel-column .inner-column .pager-box .pager.three').on('click', function() {
                $('.plus-small-image').addClass('visible-plus');
            });

            $('.topapp-main .banner-section .carousel-column .inner-column .pager-box .pager.one').on('click', function() {
                $('.plus-small-image').removeClass('visible-plus');
            });
            $('.banner-section .carousel-column .inner-column .pager-box .pager.two').on('click', function() {
                $('.plus-small-image').removeClass('visible-plus');
            });
        }
        //Galaxy
        //Testimonial1
        var GYtestimonial1 = function () {
            if ($(".app-landing-testimonials-slider").length) {
                $(".app-landing-testimonials-slider").owlCarousel({
                    //autoplay:true,
                    mouseDrag: false,
                    margin: 30,
                    smartSpeed:300,
                    loop:true,
                    nav: true,
                    navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
                    responsive: {
                        0 : {
                            items: 1
                        },

                        992 : {
                            items: 2
                        }
                    }
                });
            }
        }
        //Testimonial2
        var GYtestimonial2 = function () {
            if ($(".agency-testimonial-slider").length) {
                $(".agency-testimonial-slider").owlCarousel({
                    items: 1,
                    mouseDrag: false,
                    smartSpeed:300,
                    loop:true,
                    nav: true,
                    navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],

                });
            }
        }
        //Project Slider
        var GYprojectslider = function () {
            if ($(".agnecy-projects-slider").length) {
                $(".agnecy-projects-slider").owlCarousel({
                    mouseDrag: false,
                    margin: 25,
                    smartSpeed:300,
                    loop:true,
                    center: true,
                    nav: true,
                    navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
                    responsive: {
                        0 : {
                            items: 1
                        },

                        500 : {
                            items: 2,
                            center: false
                        },

                        768 : {
                            items: 3
                        },

                        1500 : {
                            items: 3
                        },

                        1700 : {
                            items: 5
                        }
                    }
                });
            }

        }
        var GYscreenshotslider = function () {
            if ($(".app-screenshot-slider").length) {
                $(".app-screenshot-slider").owlCarousel({
                    loop:true,
                    margin:50,
                    items: 1,
                    smartSpeed: 700,
                    autoplay: false,
                    nav: false,
                });
                $('.app-screenshot-slider .owl-nav').addClass('d-none');
            }
        }
        var GYpricingtable = function () {
            if ($(".switcher-wrapper").length) {
                var switcher = $(".switcher-wrapper .switch");
                var pricingTab = $(".pricing-tab");
                var tablist = $(".switcher-wrapper .tablist");


                switcher.on("click", function() {
                    var $this = $(this);
                    $this.find(".slider").toggleClass("slide-off");
                    pricingTab.children(".app-pricing-grids").toggleClass("active-grids");
                    tablist.children("span").toggleClass("active");
                })
            }
        }
        var GYblog = function () {
            if ($(".agency-blog-slider").length) {
                $(".agency-blog-slider").owlCarousel({
                    mouseDrag: false,
                    margin: 25,
                    smartSpeed:300,
                    loop:true,
                    nav: true,
                    navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
                    responsive: {
                        0 : {
                            items: 1
                        },

                        600 : {
                            items: 2,
                            center: false
                        },

                        992 : {
                            items: 3
                        }
                    }
                });
            }

        }
        //SaaS Classic
        var SCteam = function (){
            $('#s2_team_slide').owlCarousel({
                margin:30,
                responsiveClass:true,
                nav: true,
                dots: false,
                loop:false,
                navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
                autoplay: false,
                smartSpeed: 1000,
                responsive:{
                    0:{
                        items:1,
                    },
                    400:{
                        items:1,
                    },
                    600:{
                        items:2,
                    },
                    700:{
                        items:2,
                    },
                    1000:{
                        items:4,

                    }
                },
            })
        }
        //Appilo SEO
        //Testimonial
        var AStestimonial = function (){
            $('#appseo-testimonial-id').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '#testimonial-appseo-name'
            });
            $('#testimonial-appseo-name').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '#appseo-testimonial-id',
                dots: true,
                centerMode: true,
                focusOnSelect: true
            });
        }
        // App Startup
        //Slider
        var STRslider = function (){
            if ($('#str-banner-slide').length) {
                $('#str-banner-slide').owlCarousel({
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    loop:true,
                    margin:0,
                    nav: true,
                    autoHeight: true,
                    navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
                    smartSpeed: 500,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:1
                        },
                        800:{
                            items:1
                        },
                        1024:{
                            items:1
                        },
                        1200:{
                            items:1
                        }
                    }
                });
            }
        }
        //Feature
        var STRfeature = function (){
            $('#str-slide').owlCarousel({
                margin: 30,
                responsiveClass:true,
                nav: true,
                dots: false,
                loop:true,
                autoplay: false,
                navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
                smartSpeed: 1000,
                responsive:{
                    0:{
                        items:1,
                    },
                    400:{
                        items:1,
                    },
                    600:{
                        items:2,
                    },
                    700:{
                        items:3,
                    },
                    1000:{
                        items:4,

                    }
                },
            })
        }
        var STRblog = function (){
            $('#str-blog-slide').owlCarousel({
                margin:30,
                responsiveClass:true,
                nav: false,
                dots: true,
                autoplay: false,
                smartSpeed: 1000,
                responsive:{
                    0:{
                        items:1,
                    },
                    400:{
                        items:1,
                    },
                    600:{
                        items:1,
                    },
                    700:{
                        items:2,
                    },
                    1000:{
                        items:3,
                    }
                },
            })
        }
        var STRportfolio = function (){
            $('#str-protfolio-slide').owlCarousel({
                margin:30,
                responsiveClass:true,
                nav: true,
                dots: false,
                loop:true,
                center: true,
                autoplay: false,
                navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
                smartSpeed: 1000,
                responsive:{
                    0:{
                        items:1,
                    },
                    400:{
                        items:1,
                    },
                    600:{
                        items:1,
                    },
                    700:{
                        items:1,
                    },
                    1000:{
                        items:2,

                    }
                },
            })
        }
        var STRteam = function (){
            $('#str-team-slide').owlCarousel({
                margin: 30,
                responsiveClass:true,
                nav: true,
                dots: false,
                loop:true,
                autoplay: false,
                navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
                smartSpeed: 1000,
                responsive:{
                    0:{
                        items:1,
                    },
                    400:{
                        items:1,
                    },
                    600:{
                        items:2,
                    },
                    700:{
                        items:3,
                    },
                    1000:{
                        items:4,

                    }
                },
            })
        }
        //Progress
        var STRpro = function (){
            $('#progress1').barfiller({ duration: 3000 });
            $('#progress2').barfiller({ duration: 3000 });
            $('#progress3').barfiller({ duration: 3000 });
            if ($(".fill").length) {
                var $progress_bar = $('.fill');
                $progress_bar.appear();
                $(document.body).on('appear', '.fill', function() {
                    var current_item = $(this);
                    if (!current_item.hasClass('appeared')) {
                        var percent = current_item.data('percent');

                    }

                });
            };

        }

        //Digital Agency

        //Counter
       var DiaCounterUp = function (){
            if ($(".odometer").length) {
                $('.odometer').appear();
                $(document.body).on('appear', '.odometer', function(e) {
                    var odo = $(".odometer");
                    odo.each(function() {
                        var countNumber = $(this).attr("data-count");
                        $(this).html(countNumber);
                    });
                    window.odometerOptions = {
                        format: 'd',
                    };
                });
            }
        }

        //Portfolio
       var DiaPortSlider = function (){
           if($('body.rtl').length) {
               var LangRtl = true;
           }else {
               var LangRtl = false;
           }
            $('#dia-portfolio-slider').owlCarousel({
                margin: 20,
                responsiveClass:true,
                nav: true,
                dots: false,
                loop:true,
                rtl: LangRtl,
                autoplay: false,
                navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
                smartSpeed: 1000,
                responsive:{
                    0:{
                        items:1,
                    },
                    400:{
                        items:1,
                    },
                    600:{
                        items:2,
                    },
                    700:{
                        items:2,
                    },
                    1000:{
                        items:3,

                    },
                    1300:{
                        items:4,

                    },
                    1600:{
                        items:5,

                    },
                },
            })
        }

        // Skill Bar

        var SkillProgress = function (){
            if ($(".progress-bar").length) {
                var $progress_bar = $('.progress-bar');
                $progress_bar.appear();
                $(document.body).on('appear', '.progress-bar', function() {
                    var current_item = $(this);
                    if (!current_item.hasClass('appeared')) {
                        var percent = current_item.data('percent');
                        current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
                    }

                });
            };
        }

        // Appilo Landing
        // Demo Showcase

        var FilterDemoShowcase = function (){
            jQuery(window).on('load', function(){
                var FilterUniqueId = $('.filtr-container').attr('id');
                var FilterIdIni = ('#'+FilterUniqueId);
                var FilterAddClass = FilterIdIni+' .filtr-container';

                $(FilterAddClass).imagesLoaded ( function(){});
                var filterizd = $(FilterAddClass);

                if(filterizd.length) {
                    filterizd.filterizr({

                    });
                    $('.filtr-button').on('click', function() {
                        $('.filtr-button.filtr-active').removeClass('filtr-active');
                        $(this).addClass('filtr-active');
                    });
                }
            });
            }


       // Initial

        var AplAnimation = function (){
            $('[data-background]').each(function() {
                $(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
            });
            AOS.init({
                once:true,
                duration:1000,
            });
            if($('.wow').length){
                var wow = new WOW(
                    {
                        boxClass:     'wow',
                        animateClass: 'animated',
                        offset:       0,
                        mobile:       true,
                        live:         true
                    }
                );
                wow.init();
            }

        }
       //Testimonial
       var AplReviewSlide = function (){
            $('#ln-review-slide').owlCarousel({
                margin: 30,
                responsiveClass:true,
                nav: false,
                dots: true,
                autoplay: false,
                smartSpeed: 500,
                responsive:{
                    0:{
                        items:1,
                    },
                    400:{
                        items:1,
                    },
                    600:{
                        items:2,
                    },
                    700:{
                        items:2,
                    },
                    1000:{
                        items:3,

                    }
                },
            })
        }
        //SaaS
        //Feature
       var SaasFeature = function (){
               $("#featured_scroll").mCustomScrollbar({
                   axis:"x",
                   mouseWheel: {enable: false},
                   advanced:{autoExpandHorizontalScroll:true}
               });
           $("#featured_scroll").removeClass("mCustomScrollbar");
        }
        //App Showcase
        //Service
        elementorFrontend.hooks.addAction( 'frontend/element_ready/app-showcase-service.default', function($scope, $){
            ASCservices();
        } );

        //ScreenSlider
        elementorFrontend.hooks.addAction( 'frontend/element_ready/app-showcase-screenshots-slider.default', function($scope, $){
            AScscreenslider();
        } );

        //Team
        elementorFrontend.hooks.addAction( 'frontend/element_ready/app-showcase-team-members.default', function($scope, $){
            ASCteam();
        } );
        //Team
        elementorFrontend.hooks.addAction( 'frontend/element_ready/app-showcase-partner.default', function($scope, $){
            ASCpartner();
        } );
        //Testimonial
        elementorFrontend.hooks.addAction( 'frontend/element_ready/app-showcase-testimonial.default', function($scope, $){
            ASCtestimonial();
        } );
        //Counter
        elementorFrontend.hooks.addAction( 'frontend/element_ready/app-showcase-counter.default', function($scope, $){
            ASCcounter();
        } );
        //Scroller
        elementorFrontend.hooks.addAction( 'frontend/element_ready/app-showcase-scroller.default', function($scope, $){
            ASCscroller();
        } );

        //Appilo
            //Features
            elementorFrontend.hooks.addAction( 'frontend/element_ready/appilo-app-features.default', function($scope, $){
                APfeature();
            } );
            //Blog
            elementorFrontend.hooks.addAction( 'frontend/element_ready/appilo-blog-style.default', function($scope, $){
                APblog();
            } );
            //Pricing
            elementorFrontend.hooks.addAction( 'frontend/element_ready/appilo-pricing-table.default', function($scope, $){
                APpricing();
            } );
            //Testimonial
            elementorFrontend.hooks.addAction( 'frontend/element_ready/appilo-testimonial.default', function($scope, $){
                APtestimonial();
            } );
            //Video Play
            elementorFrontend.hooks.addAction( 'frontend/element_ready/appilo-video-play.default', function($scope, $){
                APvideo();
            } );

        //Topapp
        //Team
        elementorFrontend.hooks.addAction( 'frontend/element_ready/topapp-team.default', function($scope, $){
            TPteam();
        } );
        //Pricing
        elementorFrontend.hooks.addAction( 'frontend/element_ready/topapp-pricing-table.default', function($scope, $){
            TPpricing();
        } );
        //Banner
        elementorFrontend.hooks.addAction( 'frontend/element_ready/topapp-banner-slider.default', function($scope, $){
            TPbanner();
        } );
        //Galaxy
            //Testimonial 1
            elementorFrontend.hooks.addAction( 'frontend/element_ready/galaxy-testimonial-one.default', function($scope, $){
                GYtestimonial1();
            } );
            //Testimonial 2
            elementorFrontend.hooks.addAction( 'frontend/element_ready/galaxy-testimonial-two.default', function($scope, $){
                GYtestimonial2();
            } );
            //Project Slider
            elementorFrontend.hooks.addAction( 'frontend/element_ready/galaxy-projects-slider.default', function($scope, $){
                GYprojectslider();
            } );
            //Screenshots Slider
            elementorFrontend.hooks.addAction( 'frontend/element_ready/galaxy-screenshots-slider.default', function($scope, $){
                GYscreenshotslider();
            } );
            //Pricing Table
            elementorFrontend.hooks.addAction( 'frontend/element_ready/galaxy-pricing-table.default', function($scope, $){
                GYpricingtable();
            } );
            //Galaxy Blog
            elementorFrontend.hooks.addAction( 'frontend/element_ready/galaxy-blog.default', function($scope, $){
                GYblog();
            } );
        //SaaS Classic
        //Team
        elementorFrontend.hooks.addAction( 'frontend/element_ready/saas-classic-team-members.default', function($scope, $){
            SCteam();
        } );

        //Appilo SEO
        //Testimonial
        elementorFrontend.hooks.addAction( 'frontend/element_ready/appilo-seo-testimonial.default', function($scope, $){
            AStestimonial();
        } );

    //App Startup
    //Slider
    elementorFrontend.hooks.addAction( 'frontend/element_ready/app-startup-slider.default', function($scope, $){
        STRslider();
    } );
    //Feature
    elementorFrontend.hooks.addAction( 'frontend/element_ready/app-startup-feature.default', function($scope, $){
        STRfeature();
    } );
    //Blog
    elementorFrontend.hooks.addAction( 'frontend/element_ready/app-startup-blog.default', function($scope, $){
        STRblog();
    } );
    //Portfolio
    elementorFrontend.hooks.addAction( 'frontend/element_ready/app-startup-portfolio.default', function($scope, $){
        STRportfolio();
    } );
    //Team
    elementorFrontend.hooks.addAction( 'frontend/element_ready/app-startup-team.default', function($scope, $){
        STRteam();
    } );
    //About Progress
    elementorFrontend.hooks.addAction( 'frontend/element_ready/app-startup-about.default', function($scope, $){
        STRpro();
    } );

    //Digital Agency
    //Counter
    elementorFrontend.hooks.addAction( 'frontend/element_ready/dia-fun-facts.default', function($scope, $){
        DiaCounterUp();
    } );
    //Portfolio
    elementorFrontend.hooks.addAction( 'frontend/element_ready/dia-portfolio.default', function($scope, $){
        DiaPortSlider();
    } );
    //Skill Bar
    elementorFrontend.hooks.addAction( 'frontend/element_ready/dia-experience.default', function($scope, $){
        SkillProgress();
    } );

    //Appilo Landing
    //Filter Demo Showcase
    elementorFrontend.hooks.addAction( 'frontend/element_ready/demo-filter-showcase.default', function($scope, $){
        FilterDemoShowcase();
    } );
    //Initial
    elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function($scope, $){
        AplAnimation();
    } );
    //Testimonial
    elementorFrontend.hooks.addAction( 'frontend/element_ready/appl-testimonial.default', function($scope, $){
        AplReviewSlide();
    } );

    // SaaS
    elementorFrontend.hooks.addAction( 'frontend/element_ready/saas-features.default', function($scope, $){
        SaasFeature();
    } );

 } );
})(jQuery);