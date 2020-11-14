// The speed of the scroll in milliseconds
const speed = 800;
const offset = -70;

// Add smooth scrolling to all links
$('a[href*="#"]').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $(this.hash).offset().top + offset
    }, speed);
});
