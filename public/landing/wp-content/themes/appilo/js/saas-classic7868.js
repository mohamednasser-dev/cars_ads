//SaaS Classic
!function(){"use strict";var a={init:function(){this.Basic.init()},Basic:{init:function(){this.SaasClassicPreloader(),this.SaasClassicBackgroundImage(),this.SaasClassicMobileMenu(),this.SaasClassicAnimation(),this.SaasClassicOnePageNav(),this.SaasClassicscrollTop(),this.SaasClassicMemberSLider()},SaasClassicPreloader:function(){jQuery(window).on("load",function(){jQuery("#saas-classic-preloader").fadeOut("slow",function(){jQuery(this).remove()})})},SaasClassicBackgroundImage:function(){$(".appilo-saas-classic [data-background]").each(function(){$(this).css("background-image","url("+$(this).attr("data-background")+")")})},SaasClassicMobileMenu:function(){$(".s2_open_mobile_menu").on("click",function(){$(".s2_mobile_menu_wrap").toggleClass("s2_mobile_menu_on")}),$(".s2_open_mobile_menu").on("click",function(){$("body").toggleClass("s2_mobile_menu_overlay_on")}),$(".s2-mobile_menu li.dropdown ul").length&&($(".s2-mobile_menu li.dropdown").append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'),$(".s2-mobile_menu li.dropdown .dropdown-btn").on("click",function(){$(this).prev("ul").slideToggle(500)}))},SaasClassicAnimation:function(){$(".wow").length&&new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0}).init()},SaasClassicMemberSLider:function(){$("#s2_team_slide").owlCarousel({margin:30,responsiveClass:!0,nav:!0,dots:!1,loop:!1,navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],autoplay:!1,smartSpeed:1e3,responsive:{0:{items:1},400:{items:1},600:{items:2},700:{items:2},1000:{items:4}}})},SaasClassicOnePageNav:function(){jQuery(window).on("scroll",function(){jQuery(window).scrollTop()>100?jQuery(".saas_two_main_header").addClass("saas_2-menu-bg-overlay "):jQuery(".saas_two_main_header").removeClass("saas_2-menu-bg-overlay ")}),$(".saas_two_main_header .navbar-nav a").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if((a=a.length?a:$('[name="DCSext.Level"'+this.hash.slice(1)+"]")).length)return $("html, body").animate({scrollTop:a.offset().top-80},1e3),!1}})},SaasClassicscrollTop:function(){$(window).on("scroll",function(){$(this).scrollTop()>200?$(".saas-classic-scrollup").fadeIn():$(".saas-classic-scrollup").fadeOut()}),$(".saas-classic-scrollup").on("click",function(){return $("html, body").animate({scrollTop:0},800),!1})}}};jQuery(document).ready(function(){a.init()})}();