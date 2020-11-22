jQuery(document).ready(function ($) {
    // jQuery(".slider-preview").slick({
    //     arrows: true,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000
    // });
    // jQuery(".slider-playroom").slick({
    //     arrows: true,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000
    // });
    // jQuery(".slider-product-present").slick({
    //     arrows: true,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000
    // });
    // jQuery(".slider-purchase").slick({
    //     arrows: true,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1500
    // });
    // jQuery(".slider-furn-day").slick({
    //     arrows: true,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1500
    // });

    $(".tags__button-open").click(function () {
        $(".tags__elements").toggleClass("open")
        $(".tags__elements").append(this)

        if ($(".tags__elements").hasClass("open")) {
            $(".tags__button-open").text("Скрыть тэги")
        } else {
            $(".tags__button-open").text("Показать еще тэги")
        }
    });

    $(".filtrs__button-open").click(function () {
        $(".filtrs__elements").toggleClass("open")
        $(".filtrs__elements").append(this)

        if ($(".filtrs__elements").hasClass("open")) {
            $(".filtrs__button-open").text("Скрыть тэги")
        } else {
            $(".filtrs__button-open").text("Показать еще тэги")
        }
    });

    $(".filtrs__element-name").click(function () {
        if ($(this).next().hasClass("open")) {
            $(this).next().removeClass("open")
        } else {
            $(".filtrs__element-drop").removeClass("open")
            $(this).next().addClass("open")
        }
    })
})
jQuery(document).ready(function () {
    // jQuery(".slider-preview").slick({
    //     arrows: true,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000
    // });
    // jQuery(".slider-playroom").slick({
    //     arrows: true,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000
    // });
    // jQuery(".slider-product-present").slick({
    //     arrows: true,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000
    // });
    // jQuery(".slider-purchase").slick({
    //     arrows: true,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1500
    // });
    // jQuery(".slider-furn-day").slick({
    //     arrows: true,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1500
    // });
})
///----------------------

let preview_sl = new Swiper(".preview-slider", {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    speed: 600,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }
});

let sliderBlock = document.querySelector(".preview-slider");

sliderBlock.addEventListener("mouseenter", function (e) {
    preview_sl.autoplay.stop();
});
sliderBlock.addEventListener("mouseleave", function (e) {
    preview_sl.autoplay.start();
});
//------------slider-product-present--------------------------------------------------

let product_pr = new Swiper(".slider-product-present", {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    speed: 700,
    autoplay: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    touchRatio: 1,
});
for (let i = 0; i < product_pr.length; i++) {
    if (i % 2 == 0) {
        product_pr[i].params.autoplay.delay = 1000;
    }
    else {
        product_pr[i].params.autoplay.delay = 1200;
    }
}

let sliderBlock_Pr_pr = document.querySelectorAll(".slider-product-present");
for (let i = 0; i < sliderBlock_Pr_pr.length; i++) {
    sliderBlock_Pr_pr[i].addEventListener("mouseenter", function (e) {
        product_pr[i].autoplay.stop();
    });
    sliderBlock_Pr_pr[i].addEventListener("mouseleave", function (e) {
        product_pr[i].autoplay.start();
    });
};


//----slider-purchase----------------------------

let preview_purc = new Swiper(".slider-purchase", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        disableOnInteraction: false,
    },
    speed: 600,
    effect: "flip",
    flipEffect: {
        slideShadows: true,
        limitRotation: true
    }
});

for (let i = 0; i < preview_purc.length; i++) {
    if (i % 2 == 0) {
        console.log(preview_purc[i]);
        preview_purc[i].params.autoplay.delay = 2000;
    } else {
        preview_purc[i].params.autoplay.delay = 2500;
    }
}

console.log(preview_purc);

let sliderBlock_pur = document.querySelectorAll(".slider-purchase");
for (let i = 0; i < sliderBlock_pur.length; i++) {
    sliderBlock_pur[i].addEventListener("mouseenter", function (e) {
        preview_purc[i].autoplay.stop();
    });
    sliderBlock_pur[i].addEventListener("mouseleave", function (e) {
        preview_purc[i].autoplay.start();
    });
}

// let sliderBlock_pur = document.querySelectorAll(".slider-purchase");
// console.log(sliderBlock_pur.length);
// let preview_purc = new Array;
// for (let i = 0; i < sliderBlock_pur.length; i++) {
//     preview_purc[i] = new Swiper(".sl-pur-" + i + "", {
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },
//         loop: true,
//         autoplay: {
//             delay: 1500,
//             disableOnInteraction: false,
//         }
//     });
// }

// for (let i = 0; i < sliderBlock_pur.length; i++) {
//     sliderBlock_pur[i].addEventListener("mouseenter", function (e) {
//         preview_purc[i].autoplay.stop();
//     });
//     sliderBlock_pur[i].addEventListener("mouseleave", function (e) {
//         preview_purc[i].autoplay.start();
//     });

// }

let furn_day = new Swiper(".slider-furn-day", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        disableOnInteraction: false,
    },
    speed: 600,
    effect: "flip",
    flipEffect: {
        slideShadows: true,
        limitRotation: true
    }
});

for (let i = 0; i < furn_day.length; i++) {
    if (i % 3 == 0) {
        furn_day[i].params.autoplay.delay = 2100;
    }
    else {
        if (i % 3 == 1) {
            furn_day[i].params.autoplay.delay = 2200;
        }
        else {
            furn_day[i].params.autoplay.delay = 2300;
        }
    }
}


let sliderBlock_furn_d = document.querySelectorAll(".slider-furn-day");
for (let i = 0; i < sliderBlock_furn_d.length; i++) {
    sliderBlock_furn_d[i].addEventListener("mouseenter", function (e) {
        furn_day[i].autoplay.stop();
    });
    sliderBlock_furn_d[i].addEventListener("mouseleave", function (e) {
        furn_day[i].autoplay.start();
    });
}

//-------slider-cards-----------------------

let sl_cards = new Swiper(".slider-cards", {

    navigation: {
        nextEl: ".sl-cd-nxt",
        prevEl: ".sl-cd-pr",
    },
    loop: true,
    speed: 600,
    autoplay: {
        delay: 3200,
        disableOnInteraction: false,
    },
    nested: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    slideToClickedSlide: false,
    spaceBetween: 60,
});

let sliderBlock_sl_c = document.querySelector(".slider-cards");

sliderBlock_sl_c.addEventListener("mouseenter", function (e) {
    sl_cards.autoplay.stop();
});
sliderBlock_sl_c.addEventListener("mouseleave", function (e) {
    sl_cards.autoplay.start();
});


