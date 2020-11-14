var url = $("#youtube-video").attr('data-src');

$("#youtubeModal").on('hide.bs.modal', function () {
    $("#youtube-video").attr('src', '');
});

$("#youtubeModal").on('show.bs.modal', function () {
    $("#youtube-video").attr('src', url);
});
