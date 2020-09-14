// FULTER
$(".filter_1").click(function () {
    $(".label").removeClass("filter__toggle2");
    $(".label").removeClass("filter__toggle3");
    $(".label").not(".filter__toggle").toggleClass("filter__toggle1");
    $(".filter_item_1").removeClass("filter__toggle1");
});

$(".filter_2").click(function () {
    $(".label").removeClass("filter__toggle1");
    $(".label").removeClass("filter__toggle3");
    $(".label").not(".filter__toggle").toggleClass("filter__toggle2");
    $(".filter_item_2").removeClass("filter__toggle2");
});

$(".filter_3").click(function () {
    $(".label").removeClass("filter__toggle1");
    $(".label").removeClass("filter__toggle2");
    $(".label").not(".filter__toggle").toggleClass("filter__toggle3");
    $(".filter_item_3").removeClass("filter__toggle3");
});
// FULTER


$(".filter__item").click(function () {
    $(".filter__item").not($(this)).removeClass("filter__item-toggle");
    $(this).toggleClass("filter__item-toggle");
    $(this).removeClass("label__toggle");

    if ($(".filter__item").hasClass("filter__item-toggle")) {
        $(".filter__item").not($(".filter__item-toggle")).addClass("label__toggle");
    } else {
        $(".filter__item").removeClass("label__toggle");
    }
});

// DROPDOWN

$(".dropdown__togle").click(function (e) {
    $(this).find(".dropdown__content").fadeToggle("fast", "swing");
    e.stopPropagation();
});

$(".dropdown__content").click(function (e) {
    e.stopPropagation();
});

$(document).click(function () {
    $(".dropdown__content").hide();
});

// DROPDOWN


// ACCORDEON
$(document).ready(function () {
    $('.accordeon__head').click(function () {
        if ($(window).width() < 768) {
            $(this).parent().siblings().not($(this)).find(".accordeon__body").slideUp(600);
            $(this).parent().find(".accordeon__body").slideToggle(600);
        }
    });
});
// ACCORDEON


// TABS
$(".tab__body").not(":first-child").hide();
$(".tab__head").click(function () {
    $(this).siblings().removeClass("tab__active").removeAttr('disabled');
    $(this).addClass("tab__active").attr('disabled', 'disabled');
    $(this).closest('.tabs').find('.tab__body').hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("tab__active").attr('disabled', 'disabled');
// TABS


// GOTOP
var gotop = $('.gotop');
gotop.on('click', function (e) {
    e.preventDefault();
    $(window).scrollTop(0);
});
// GOTOP


// IBG
// function ibg() {
//     $(".ibg").each(function () {
//         if ($(this).find('source') && $(this).find('source').attr('srcset') != null) {
//             $(this).css('background-image', 'url(' + $(this).find('source').attr('srcset') + ')');
//         } else if ($(this).find('.ibg__img') && $(this).find('.ibg__img').attr('src') != null) {
//             $(this).css('background-image', 'url(' + $(this).find('.ibg__img').attr('src') + ')');
//         }
//     });
//     $(".ibg__img").remove();
// }
// $('document').ready(function () {
//     ibg();
// });



function ibg() {
    $(".ibg").each(function () {
        var elem = document.createElement('canvas');

        if (!!(elem.getContext && elem.getContext('2d'))) {
            if ($(this).find('source') && $(this).find('source').attr('srcset') != null) {
                $(this).css('background-image', 'url(' + $(this).find('source').attr('srcset') + ')');
            }
        } else if ($(this).find('.ibg__img') && $(this).find('.ibg__img').attr('src') != null) {
            $(this).css('background-image', 'url(' + $(this).find('.ibg__img').attr('src') + ')');
        }
    });
    $(".ibg__img").remove();
}
$('document').ready(function () {
    ibg();
});

// function canUseWebP() {
//     var elem = document.createElement('canvas');


//     if (!!(elem.getContext && elem.getContext('2d'))) {
//         // was able or not to get WebP representation
//         return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
//     }



//     // very old browser like IE 8, canvas not supported
//     return false;
// }
// IBG