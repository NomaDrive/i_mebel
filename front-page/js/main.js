jQuery(document).ready(function ($) {
    jQuery(".slider-preview").slick({
        arrows: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
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

    $(".tags__button-open").click(function(){
        $(".tags__elements").toggleClass("open")
        $(".tags__elements").append(this)

        if($(".tags__elements").hasClass("open")){
            $(".tags__button-open").text("Скрыть тэги")
        }else{
            $(".tags__button-open").text("Показать еще тэги")
        }
    });

    $(".filtrs__button-open").click(function(){
        $(".filtrs__elements").toggleClass("open")
        $(".filtrs__elements").append(this)

        if($(".filtrs__elements").hasClass("open")){
            $(".filtrs__button-open").text("Скрыть тэги")
        }else{
            $(".filtrs__button-open").text("Показать еще тэги")
        }
    });
})