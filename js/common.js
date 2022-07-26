//popup
$(document).ready(function(){
    function setCookie(name, value, expiredays) {  
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    };

    $('.popup a').click(function(){
        var chk = $('#chkBox').prop('checked');

        if(chk){
            setCookie('maindiv','done',1);
        }
        $('.popup').fadeOut('fast');
        $('.blackbg').fadeOut('fast');
    });

    cookiedata = document.cookie;
    if(cookiedata. indexOf('maindiv=done') < 0 ){   
        $('.popup').css('display','block');  
        $('.blackbg').css('display','block');  
    }else{                                  
        $('.popup').css('display','none');   
        $('.blackbg').css('display','none');   
    }
});

//hside
$(document).ready(function(){
    //login
    $('.tnav .login').colorbox({
        iframe: true, 
        width: 500, 
        height: 550, 
        scrolling: false, 
        onOpen: function(){ 
            $('html').css('overflow','hidden');
        },
        onClosed: function(){
            $('html').css('overflow','visible');
        }
    });
});

//toTop
$(document).ready(function(){
    $().UItoTop({ easingType: 'easeOutQuart' });
});

//gnb
$(document).ready(function(){
    var subbg = $('<div class="subbg"></div>'); 
    $('header').append(subbg);
    
    $('.subnav, .subbg').slideUp(0);
    
    $('.gnb').hover(function(){
        $('.subnav, .subbg').stop().slideDown('fast');
    },function(){
        $('.subnav, .subbg').stop().slideUp('fast');
    });
    
    $('.gnb').hover(function(){
        $('header').addClass('headerbg');
    },function(){
        $('header').removeClass('headerbg');
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        
        if(top > 900){
            $('header').addClass('on');
        }else{
            $('header').removeClass('on');
        }
    });
});

//Family site
$(document).ready(function(){

    var cnt = 0; 

    $('.family ul').fadeOut(0);
    
    $('.family button').click(function(){

        if(cnt == 0){
            $(this).next().fadeIn(0);
            $(this).next().stop().animate({
                top: 0
            },'fast');
            
            cnt = 1;
        }else{
            $(this).next().stop().animate({
                top: 100
            },'fast');
            $(this).next().fadeOut(0);
            
            cnt = 0;
        }

        $(this).children('.fadd').toggleClass('on');
        $(this).toggleClass('on');
    });
    $('.family li a').last().blur(function(){

        $('.family button').trigger('click');
    });
});

