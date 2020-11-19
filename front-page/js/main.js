jQuery(document).ready(function () {
    // jQuery(".slider-preview").slick({
    //     arrows: true,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000
    // });
    jQuery(".slider-playroom").slick({
        arrows: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
    jQuery(".slider-product-present").slick({
        arrows: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
    jQuery(".slider-purchase").slick({
        arrows: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1500
    });
    jQuery(".slider-furn-day").slick({
        arrows: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1500
    });
})

let preview_sl = new Swiper(".preview-slider", {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 1500,
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