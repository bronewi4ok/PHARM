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
// IBG;
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
//  NAVBAR SCROLL ;
// HEADER SLIDER
$(document).ready(function () {
    $('.header__slider').slick({
        pauseOnHover: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000,
        dots: false,
    });
});
// HEADER SLIDER;
// RIPPLE
(function (window) {
    'use strict';

    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);

    // Find exact position of element
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function offset(elem) {
        var docElem, win,
            box = {
                top: 0,
                left: 0
            },
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(obj) {
        var style = '';

        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += (a + ':' + obj[a] + ';');
            }
        }

        return style;
    }

    var Effect = {

        // Effect delay
        duration: 500,

        show: function (e, element) {

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            var el = element || this;

            // Create ripple
            var ripple = document.createElement('div');
            ripple.className = 'waves-ripple';
            el.appendChild(ripple);

            // Get click coordinate and element witdh
            var pos = offset(el);
            var relativeY = (e.pageY - pos.top);
            var relativeX = (e.pageX - pos.left);
            var scale = 'scale(' + ((el.clientWidth / 100) * 80) + ')';

            // Support for touch devices
            if ('touches' in e) {
                relativeY = (e.touches[0].pageY - pos.top);
                relativeX = (e.touches[0].pageX - pos.left);
            }

            // Attach data to element
            ripple.setAttribute('data-hold', Date.now());
            ripple.setAttribute('data-scale', scale);
            ripple.setAttribute('data-x', relativeX);
            ripple.setAttribute('data-y', relativeY);

            // Set ripple position
            var rippleStyle = {
                'top': relativeY + 'px',
                'left': relativeX + 'px'
            };

            ripple.className = ripple.className + ' waves-notransition';
            ripple.setAttribute('style', convertStyle(rippleStyle));
            ripple.className = ripple.className.replace('waves-notransition', '');

            // Scale the ripple
            rippleStyle['-webkit-transform'] = scale;
            rippleStyle['-moz-transform'] = scale;
            rippleStyle['-ms-transform'] = scale;
            rippleStyle['-o-transform'] = scale;
            rippleStyle.transform = scale;
            rippleStyle.opacity = '1';

            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-moz-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-o-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['transition-duration'] = Effect.duration + 'ms';

            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

            ripple.setAttribute('style', convertStyle(rippleStyle));
        },

        hide: function (e) {
            TouchHandler.touchup(e);

            var el = this;
            var width = el.clientWidth * 1.4;

            // Get first ripple
            var ripple = null;
            var ripples = el.getElementsByClassName('waves-ripple');
            if (ripples.length > 0) {
                ripple = ripples[ripples.length - 1];
            } else {
                return false;
            }

            var relativeX = ripple.getAttribute('data-x');
            var relativeY = ripple.getAttribute('data-y');
            var scale = ripple.getAttribute('data-scale');

            // Get delay beetween mousedown and mouse leave
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
            var delay = 350 - diff;

            if (delay < 0) {
                delay = 0;
            }

            // Fade out ripple after delay
            setTimeout(function () {
                var style = {
                    'top': relativeY + 'px',
                    'left': relativeX + 'px',
                    'opacity': '0',

                    // Duration
                    '-webkit-transition-duration': Effect.duration + 'ms',
                    '-moz-transition-duration': Effect.duration + 'ms',
                    '-o-transition-duration': Effect.duration + 'ms',
                    'transition-duration': Effect.duration + 'ms',
                    '-webkit-transform': scale,
                    '-moz-transform': scale,
                    '-ms-transform': scale,
                    '-o-transform': scale,
                    'transform': scale,
                };

                ripple.setAttribute('style', convertStyle(style));

                setTimeout(function () {
                    try {
                        el.removeChild(ripple);
                    } catch (e) {
                        return false;
                    }
                }, Effect.duration);
            }, delay);
        },

        // Little hack to make <input> can perform waves effect
        wrapInput: function (elements) {
            for (var a = 0; a < elements.length; a++) {
                var el = elements[a];

                if (el.tagName.toLowerCase() === 'input') {
                    var parent = el.parentNode;

                    // If input already have parent just pass through
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('ripple') !== -1) {
                        continue;
                    }

                    // Put element class and style to the specified parent
                    var wrapper = document.createElement('i');
                    wrapper.className = el.className + ' waves-input-wrapper';

                    var elementStyle = el.getAttribute('style');

                    if (!elementStyle) {
                        elementStyle = '';
                    }

                    wrapper.setAttribute('style', elementStyle);

                    el.className = 'waves-button-input';
                    el.removeAttribute('style');

                    // Put element as child
                    parent.replaceChild(wrapper, el);
                    wrapper.appendChild(el);
                }
            }
        }
    };


    /**
     * Disable mousedown event for 500ms during and after touch
     */
    var TouchHandler = {
        /* uses an integer rather than bool so there's no issues with
         * needing to clear timeouts if another touch event occurred
         * within the 500ms. Cannot mouseup between touchstart and
         * touchend, nor in the 500ms after touchend. */
        touches: 0,
        allowEvent: function (e) {
            var allow = true;

            if (e.type === 'touchstart') {
                TouchHandler.touches += 1; //push
            } else if (e.type === 'touchend' || e.type === 'touchcancel') {
                setTimeout(function () {
                    if (TouchHandler.touches > 0) {
                        TouchHandler.touches -= 1; //pop after 500ms
                    }
                }, 500);
            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
                allow = false;
            }

            return allow;
        },
        touchup: function (e) {
            TouchHandler.allowEvent(e);
        }
    };


    /**
     * Delegated click handler for .ripple element.
     * returns null when .ripple element not in "click tree"
     */
    function getWavesEffectElement(e) {
        if (TouchHandler.allowEvent(e) === false) {
            return null;
        }

        var element = null;
        var target = e.target || e.srcElement;

        while (target.parentElement !== null) {
            if (!(target instanceof SVGElement) && target.className.indexOf('ripple') !== -1) {
                element = target;
                break;
            } else if (target.classList.contains('ripple')) {
                element = target;
                break;
            }
            target = target.parentElement;
        }

        return element;
    }

    /**
     * Bubble the click and show effect if .ripple elem was found
     */
    function showEffect(e) {
        var element = getWavesEffectElement(e);

        if (element !== null) {
            Effect.show(e, element);

            if ('ontouchstart' in window) {
                element.addEventListener('touchend', Effect.hide, false);
                element.addEventListener('touchcancel', Effect.hide, false);
            }

            element.addEventListener('mouseup', Effect.hide, false);
            element.addEventListener('mouseleave', Effect.hide, false);
        }
    }

    Waves.displayEffect = function (options) {
        options = options || {};

        if ('duration' in options) {
            Effect.duration = options.duration;
        }

        //Wrap input inside <i> tag
        Effect.wrapInput($$('.ripple'));

        if ('ontouchstart' in window) {
            document.body.addEventListener('touchstart', showEffect, false);
        }

        document.body.addEventListener('mousedown', showEffect, false);
    };

    /**
     * Attach Waves to an input element (or any element which doesn't
     * bubble mouseup/mousedown events).
     *   Intended to be used with dynamically loaded forms/inputs, or
     * where the user doesn't want a delegated click handler.
     */
    Waves.attach = function (element) {
        //FUTURE: automatically add waves classes and allow users
        // to specify them with an options param? Eg. light/classic/button
        if (element.tagName.toLowerCase() === 'input') {
            Effect.wrapInput([element]);
            element = element.parentElement;
        }

        if ('ontouchstart' in window) {
            element.addEventListener('touchstart', showEffect, false);
        }

        element.addEventListener('mousedown', showEffect, false);
    };

    window.Waves = Waves;

    document.addEventListener('DOMContentLoaded', function () {
        Waves.displayEffect();
    }, false);

})(window);
// RIPPLE;


