$(window).scroll(function(){
    if ($(window).scrollTop() > 300) {
        $('.fixed_menu').css({visibility:'visible'})
    }
    else {
        $('.fixed_menu').css({visibility:'hidden'})
    }
});