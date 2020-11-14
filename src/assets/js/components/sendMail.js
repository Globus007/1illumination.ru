function sendMail(ajax_form) {
    //    ym(68542003, 'reachGoal', ajax_form.yandex.value);
    var btnName = $(ajax_form).find("button").text()
    $.ajax({
        url: "mail.php",
        type: "POST",
        dataType: "html",
        data: $(ajax_form).serialize() + "&btn=" + btnName,
        success: function (response) {
            $(ajax_form).trigger('reset');
            $(ajax_form)
                .fadeOut(0)
                .delay(5000)
                .fadeIn(0);
            $(ajax_form).next()
                .fadeIn(0)
                .delay(5000)
                .fadeOut(0);
            $('#calculateModal')
                .delay(3000)
                .queue(function () {
                    $(this).modal('hide').dequeue();
                });;
            $('#modal-timed')
                .delay(3000)
                .queue(function () {
                    $(this).modal('hide').dequeue();
                });;
        },
        error: function (response) {
            $(ajax_form).trigger('reset');
            $(ajax_form)
                .fadeOut(0)
                .delay(5000)
                .fadeIn(0);
            $(ajax_form).next()
                .fadeIn(0)
                .delay(5000)
                .fadeOut(0);
            $('#calculateModal')
                .delay(3000)
                .queue(function () {
                    $(this).modal('hide').dequeue();
                });;
            $('#modal-timed')
                .delay(3000)
                .queue(function () {
                    $(this).modal('hide').dequeue();
                });;
        }
    });
    if ($(ajax_form).find('[name = yandex]').val() == "catalog") {
        window.open('https://1illumination.ru/Illumination.pdf', '_blank');
    }
    return false;
}
