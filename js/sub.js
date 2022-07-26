/* sub */
$(document).ready(function(){
    $('.invigator .activeinvi').fadeOut(0);
    
    $('.maininvi .h3text button').click(function(){
        $(this).remove();
        $('.maininvi .h3text a').addClass('on');
        $('.invigator .activeinvi').fadeIn(100);
    });
});
