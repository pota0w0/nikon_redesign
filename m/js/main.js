/* main & gallery */
$(document).ready(function(){
    $('main .flexslider').flexslider({
        slideshowSpeed: 5000,
        directionNav: false
    });
    $('.gallery .flexslider').flexslider({
        slideshowSpeed: 5000,
        directionNav: false
    });
});

/* banner & video */
$(document).ready(function(){
    var swiper01 = new Swiper('.banner .swiper-container', {
        pagination: {
            el: '.banner .swiper-pagination',
        },
        loop: true,
        autoplay: {
            delay: 5000,
        },
    });
    
    var swiper02 = new Swiper('.video .swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      centeredSlides: true,
    });
});
