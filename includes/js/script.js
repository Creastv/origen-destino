//==========================================================================
// Parallex
//========================================================================== 
// jQuery('.my-paroller').paroller();
//==========================================================================
// Preloader
//========================================================================== 
$(document).ready(function($) {
    $(window).load(function() {
        $('.img-fade').addClass('img-fade-out');
        $('#preloader').fadeOut('slow', function() { 
          $(this).remove(); 
        });
    });
});
//==========================================================================
// Animation fade
//========================================================================== 
AOS.init();
//==========================================================================
// scroll to top
//========================================================================== 
$(document).ready(function() {
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});
//==========================================================================
// Smooth scrolling when clicking an anchor link
//========================================================================== 
$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 60
    }, 500);
});
//==========================================================================
// Sticky header nav
//========================================================================== 
// if( $(window).width() > 700 ) {
//     var stickySidebar = $('.slider-nav').offset().top;
//     $(window).scroll(function() {
//         if ($(window).scrollTop() > stickySidebar) {
//             $('.slider-nav').addClass('affix-home');
//         } else {
//             $('.slider-nav').removeClass('affix-home');
//         }
//     });
// }



    //Hide Show Header on Scroll
    // var didScroll;
    // var lastScrollTop = 0;
    // var delta = 5;
    // var navbarHeight = jQuery('.navbar').outerHeight();

    // jQuery(window).scroll(function(event) {
    //     didScroll = true;
    // });

    // setInterval(function() {
    //     if (didScroll) {
    //         hasScrolled();
    //         didScroll = false;
    //     }
    // }, 250);

    // function hasScrolled() {
    //     var st = jQuery(this).scrollTop();

    //     // Make sure they scroll more than delta
    //     if (Math.abs(lastScrollTop - st) <= delta)
    //         return;

    //     // If they scrolled down and are past the navbar, add class .nav-up.
    //     // This is necessary so you never see what is "behind" the navbar.
    //     if (st > lastScrollTop && st > navbarHeight) {
    //         // Scroll Down
    //         jQuery('.navbar').removeClass('nav-down').addClass('nav-up');
    //     } else {
    //         // Scroll Up
    //         if (st + jQuery(window).height() < jQuery(document).height()) {
    //             jQuery('.navbar').removeClass('nav-up').addClass('nav-down');
    //         }
    //     }

    //     lastScrollTop = st;
    // }


// Sticky navbar
// var body = document.querySelector('body');
var navbar = document.getElementById("navigation");
var sticky = navbar.offsetTop + 10;
var logoMobile = document.querySelector('.logo-scroll');
var navbarToggler = document.querySelector('.navbar-toggler');
var collapse = document.querySelector('.collapse');
var scrollTop = document.querySelector('.ScrollTop');

document.addEventListener('scroll',  function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
        
          // body.style.paddingTop = navbar.offsetHeight + 'px';
          // logoMobile.style.display = 'block';
          // navbarToggler.style.margin = '0';
          // collapse.classList.remove('justify-content-md-center');
          // collapse.classList.add('justify-content-md-end');
          // scrollTop.classList.add('ScrollTopActive');
        } else {
          navbar.classList.remove("sticky");
          // body.style.paddingTop = '0px';
          // logoMobile.style.display = 'none';
          // navbarToggler.style.margin = '0 auto';
          // collapse.classList.add('justify-content-md-center');
          // collapse.classList.remove('justify-content-md-end');
          // scrollTop.classList.remove('ScrollTopActive');
        };
});
