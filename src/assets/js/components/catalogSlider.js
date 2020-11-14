var catalogSlider = $("#catalog-slider");

catalogSlider.slick({
    arrows: false,
    speeed: 300,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
    },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
        }
    }
  ]
});

$("#catalog-arrow-next").on("click", function (event) {
    event.preventDefault();
    catalogSlider.slick('slickNext');
});

$("#catalog-arrow-prev").on("click", function (event) {
    event.preventDefault();
    catalogSlider.slick('slickPrev');
});
