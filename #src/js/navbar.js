// NAVBAR
$(document).ready(function (e) {
    $('.navbar__open').click(function (e) {

        $('.navbar__hum').toggleClass('hum__toggle');
        $('.navbar__menu').toggleClass("nav__toggle");

        $("body").toggleClass("body__toggle");
        e.stopPropagation();
    })

    $(".navbar__menu").click(function (e) {
        e.stopPropagation();
    });

    $(document).click(function () {
        $(".navbar__menu").removeClass("nav__toggle");
        $('.navbar__hum').removeClass('hum__toggle');
    });

    $(document).on('keydown', function (e) {
        if (e.keyCode === 27) { // ESC
            $('.navbar__menu').removeClass("nav__toggle");
            $('.navbar__hum').removeClass('hum__toggle');
        }
    });
})
// NAVBAR


//  NAVBAR SCROLL 
function scroll() {
    var scrollTop = $(window).scrollTop();
    $('.navbar').toggleClass('navbar__scroll', scrollTop > 0);
    $('.gotop__wrap').toggleClass('gotop_toggle', scrollTop > 0)
    $('.logo-nav__img img').toggleClass('logo-nav__toggle', scrollTop > 0)

}

$(document).ready(function () {
    scroll()
});

$(window).on('scroll', function () {
    scroll()
});
//  NAVBAR SCROLL 