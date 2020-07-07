$(document).ready(function(){

    $('#btn-top').click(function (){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $('.menu-lista li a').click(function (e){
        e.preventDefault();
        let id = $(this).attr('href')
        let posTop = $(id).offset().top
        let altMenu = $('#menu').height()
        
        $('html, body').animate({
            scrollTop: posTop - altMenu
        }, 500);
    });

    $(window).scroll(function (){
        let scrollTop = $(window).scrollTop()
        let altBanner = $('#banner').height()
        
        if (scrollTop > altBanner) {
            $('body').addClass('menu-fixo')
        } else {
            $('body').removeClass('menu-fixo')
        }
    })

});