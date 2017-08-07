'use strict';

$(document).ready(function () {

    addBackground();

    scrollSlow();

    showLogo();
    
//    neon();
    
    sliderReady();
    
    hoverTrigger();

});


//PASEK NAWIGACJI


$(window).scroll(function () {
    addBackground();
//    neon();
    hoverTrigger();
})

function addBackground() {

    if ($(window).scrollTop() >= 300) {

        $('#navigation').addClass('view');

    } else {
        $('#navigation').removeClass('view');

    }
};

function hoverTrigger() {
        if ($(window).scrollTop() >= 350) {

        $('.hover').addClass('hovered');

    }   else {
        $('.hover').removeClass('hovered');

    }
};

//NEON

//function neon() {
//
//    if ($(window).scrollTop() >= 20) {
//
//        $('.neon1').addClass('neon');
//
//    } else {
//        $('.neon1').removeClass('neon');
//
//    }
//
//    if ($(window).scrollTop() >= 50) {
//
//        $('.neon2').addClass('neon');
//
//    } else {
//        $('.neon2').removeClass('neon');
//
//    }
//};

//POKAŻ LOGO

function showLogo() {

    if ($(window).scrollTop() >= 300) {

        $('a.navbar-brand').addClass('showlogo');

    } else {
        $('a.navbar-brand').removeClass('showlogo');

    }
};

//FUNKCJA SCLOWSCROLL

function scrollSlow() {

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        console.log(this.hash);
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 500,
                //                              function(){
                //   
                //        // Add hash (#) to URL when done scrolling (default click behavior)
                //        window.location.hash = hash;
                //      }
            );
        } // End if
    });
};

function sliderReady() {

var slider = $('#slider');

var slideShow = $('.slide-show'); 

var slideCount = slideShow.children().length;

var slideWidth = 100/slideCount;

var slideIndex = 0;

    
//        Ustawianie szerokosci kontenera
    slideShow.css('width' , slideCount* 100 + '%');
    
//        Ustawianie marginesow i szerokosci pojedynczych slideow
    slideShow.find('.single-slide').each(function(index) {
        var leftPercent = (slideWidth * index) + '%';
        $(this).css('margin-left', leftPercent);
        $(this).css('width', slideWidth + '%');
    });
    
//        Wywolanie funkcji slide na click
    $('.prev-slide').click(function(event) {
        event.preventDefault();
        slide(slideIndex -1);
    });
    
    $('.next-slide').click(function(event) {
        event.preventDefault();
        slide(slideIndex +1);
    });
    
//        Definicja funkcji Slide
    function slide(newSlideIndex) {
//        Sprawdzamy czy pierwszy i ostatni zeby nie robil nic
        if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
            return;
        }
        
//        elementy slide caption i przypisanie do zmiennej
        var slideCaption = slider.find('.slider-caption').eq(newSlideIndex);
        
        
//        Zmienna trzymajaca margines lewy do przesuwania kontenera
        var marginLeft = ((newSlideIndex * (-100)) + '%');
        
//        Animacja na slideshow
        slideShow.animate({'margin-left': marginLeft}, 800, function() {
//            Przypisz do slideIndex nowy index Slidu
            slideIndex = newSlideIndex;
            
//            pokaz napis przez fadeIn
            slideCaption.fadeIn('slow');
        });
        
    };
    
}