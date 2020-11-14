var workSlider = $("#work-slider");

workSlider.slick({
    dots: true,
    focusOnSelect: true,
    arrows: false,
    speeed: 300,
    slidesToShow: 1
});

$("#work-arrow-next").on("click", function (event) {
    event.preventDefault();
    workSlider.slick('slickNext');
});

$("#work-arrow-prev").on("click", function (event) {
    event.preventDefault();
    workSlider.slick('slickPrev');
});
