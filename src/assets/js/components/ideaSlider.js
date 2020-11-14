var ideaSlider = $("#idea-slider");

ideaSlider.slick({
    arrows: false,
    speeed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                variableWidth: false,
            }
    },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                variableWidth: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false
            }
    }]
});

$("#idea-arrow-next").on("click", function (event) {
    event.preventDefault();
    ideaSlider.slick('slickNext');
});

$("#idea-arrow-prev").on("click", function (event) {
    event.preventDefault();
    ideaSlider.slick('slickPrev');
});

ideaSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.slick-active')
        .find('.ideas__element')
        .removeClass('center');
});

ideaSlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.slick-cloned')
        .find('.ideas__element')
        .removeClass('center');
    $('.slick-active')
        .find('.ideas__element')
        .eq(1)
        .addClass('center');
    $('.slick-active')
        .find('.ideas__element')
        .eq(2)
        .addClass('center');
});
