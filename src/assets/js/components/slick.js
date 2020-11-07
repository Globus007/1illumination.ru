var catalogSlider = $("#catalog");
var workSlider = $("#work");
var ideaSlider = $("#idea");

// catalog slider //
catalogSlider.slick({
    arrows: false,
    speeed: 300,
    slidesToShow: 4
});

$("#catalog-arrow-next").on("click", function () {
    catalogSlider.slick('slickNext');
});

$("#catalog-arrow-prev").on("click", function () {
    catalogSlider.slick('slickPrev');
});

// work slider //
workSlider.slick({
    dots: true,
    focusOnSelect: true,
    arrows: false,
    speeed: 300,
    slidesToShow: 1
});

$("#work-arrow-next").on("click", function () {
    workSlider.slick('slickNext');
});

$("#work-arrow-prev").on("click", function () {
    workSlider.slick('slickPrev');
});


// idea slider //
ideaSlider.slick({
    arrows: false,
    speeed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '50px'
});

$("#idea-arrow-next").on("click", function () {
    ideaSlider.slick('slickNext');
});

$("#idea-arrow-prev").on("click", function () {
    ideaSlider.slick('slickPrev');
});
