// show modal after 60 sec
var delay_popup = 60000;
setTimeout(showModalTimed, delay_popup);

function showModalTimed() {
    $('#modal-timed').modal('show');
}

$(document).mouseleave(function (e) {
    if (e.clientY < 10) {
        $('#modal-timed').modal('show');
    }
});
