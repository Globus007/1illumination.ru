var projectSlider = $("#project-slider");

projectSlider.slick({
    lazyLoad: 'progressive',
    arrows: false,
    speeed: 300,
    slidesToShow: 1
});

$("#project-arrow-next").on("click", function (event) {
    event.preventDefault();
    projectSlider.slick('slickNext');
});

$("#project-arrow-prev").on("click", function (event) {
    event.preventDefault();
    projectSlider.slick('slickPrev');
});

// set slider number
$("*[data-project]").click(function (event) {
    event.preventDefault()
    var num = $(this).attr("data-project") - 1
    projectSlider.slick('slickGoTo', num, false)
    $('#modal-projects').modal('show')
})

