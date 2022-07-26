/* main */
$(document).ready(function(){
    $('.main > p').each(function(index){
        var top = $(this).offset().top; 
        $(this).children().html(function(index, text){
            return text + ' : ' + top;
        });
    });
    $('.main > p').fadeOut();
    
    $(window).scroll(function(){
        var st = $(window).scrollTop(); 

        $('.main > p').each(function(index){
            var divTop = $(this).offset().top;

            if(divTop -800 < st){
                $(this).fadeIn(1000);
            }
        });
    });
});

/* contents */
/* img */
$(document).ready(function(){
    $('.contents > img').each(function(index){
        var top = $(this).offset().top; 
        $(this).children().html(function(index, text){
            return text + ' : ' + top;
        });
    });
    
    $('.contents > .contents01 img, .contents03 img').css('left', -590);
    
    $('.contents > .contents02 img').css('right', -590);
    
    $(window).scroll(function(){
        var st = $(window).scrollTop(); 

        $('.contents > .contents01 img, .contents > .contents03 img').each(function(index){
            var divTop = $(this).offset().top;

            if(divTop -900 < st){
                $(this).animate({ left: 0 },1000);
            }
        });
        $('.contents > .contents02 img').each(function(index){
            var divTop = $(this).offset().top;

            if(divTop -900 < st){
                $(this).animate({ right: 0 },1000);
            }
        });
    });
});

/* text */
$(document).ready(function(){
    $('.contents > .text').each(function(index){
        var top = $(this).offset().top; 
        $(this).children().html(function(index, text){
            return text + ' : ' + top;
        });
    });
    
    $(window).scroll(function(){
        var st = $(window).scrollTop(); 

        $('.contents > .contents01 .text, .contents02 .text, .contents03 .text').each(function(index){
            var divTop = $(this).offset().top;

            if(divTop -800 < st){
                $(this).addClass('on');
            }
        });
    });
});

/* business */

$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
    });
});