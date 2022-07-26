// header
$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        
        if(top > 80){
            $('header').slideUp('fast');
        }else{
            $('header').slideDown('fast');
        }
    });
});

//panel
$(document).ready(function(){
    $('.subnav').slideUp(0);
    
    var w = $('.panel').width(); 
    $('.panel').css('right', -w);
    
    $('.blackbg').fadeOut(0);
    
    $('.panelicon').click(function(){
        $('.blackbg').stop().fadeIn(100);
        
        $('.panel').stop().animate({
            right: 0
        },'fast',function(){
            $('html, body').css({
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                position: 'fixed' 
            });
        });
    });
    
    $('.blackbg').click(function(){
        w = $('.panel').width(); 
        $('.panel').stop().animate({
            right: -w
        },'fast',function(){
            $('.blackbg').stop().fadeOut(100);
            $('html, body').css({
                height: 'auto',
                overflow: 'auto',
                position: 'static'
            });
            $('.subnav').slideUp(0);
            $('.topnav').removeClass('on');
        });
    });
    
    $('.close').click(function(){
        w = $('.panel').width(); 
        $('.panel').stop().animate({
            right: -w
        },'fast',function(){
            $('.blackbg').stop().fadeOut(100);
            $('html, body').css({
                height: 'auto',
                overflow: 'auto',
                position: 'static'
            });
            $('.subnav').slideUp(0);
            $('.topnav').removeClass('on');
        });
    });
    
    $('.topnav').click(function(){
    
        var is = $(this).next().is(':hidden');
        
        if(is){
            $('.subnav').slideUp(0);
            $(this).next().stop().slideDown('fast');
            
            $('.topnav').removeClass('on');
            $(this).addClass('on');
        }else{
            $('.subnav').slideUp(0);
            $('.topnav').removeClass('on');
        }
    });
    
    /*$(window).resize(function(){
        $('.blackbg').trigger('click');
    });*/
});