document.addEventListener("DOMContentLoaded", function () {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000); // Cambia la imagen cada 5 segundos (ajusta según tus preferencias)
    }
});


// Agrega esto a tu archivo main.js
jQuery(document).ready(function(){
    $('.services-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">&lsaquo;</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">&rsaquo;</button>',
    });
});
