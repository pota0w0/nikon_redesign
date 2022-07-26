//mslider
$(document).ready(function(){
    $('.mslider .flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 7000,
        controlNav: false, 
        before: function(){
            $('.mslider .flexslider .slides > li').removeClass('on');
        },
        after: function(){
            $('.mslider .flexslider .slides > li').addClass('on');
            
            var totalpage = $('.slides li').size() - 2;
            var currentindex = $('.slides li.flex-active-slide').index();

            $('.num .page').html(currentindex);
            $('.num .allpage').html(totalpage);
        },
        start: function(){
            $('.mslider .flexslider .slides > li').addClass('on');
            
            var totalpage = $('.slides li').size() - 2;
            var currentindex = $('.slides li.flex-active-slide').index();

            $('.num .page').html(currentindex);
            $('.num .allpage').html(totalpage);
        }
    });
    
    $(window).resize(function(){
        var wh = $(window).height();
        $('.mslider').height(wh);
        $('.mslider .flexslider .slides > li').height(wh);
    });
    $(window).trigger('resize');
    
});

/* imgslide */
$(document).ready(function(){
    $('.slick-list').slick({
        infinite: true,
        autoplay: true,
        pauseOnHover:true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});

/* video */
$(document).ready(function(){
    
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    
    $('.video').addClass('bg0');
    
    $('.video .swiper-slide').click(function(){
        $('.video .swiper-slide').removeClass('on');
        $(this).addClass('on');
        
        //클릭 당한 div data-index 값을 담을 변수
        var index = $(this).attr('data-index');
        
        for(var i=0; i<=5; i++){
            $('.video').removeClass('bg'+i);
        }
        $('.video').addClass('bg'+index);
    });
});

/* news text */
$(document).ready(function(){
        $('.newstext p').ellipsis({ lines: 4 });
});
