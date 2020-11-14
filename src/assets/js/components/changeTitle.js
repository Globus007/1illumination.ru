$('#calculateModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var title = button.data('title')
    var yandexGoal = button.data('yandex')

    var modal = $(this)
    modal.find('#modal-header').text(title)
    modal.find('#modal-btn').text(title)
    modal.find('[name = yandex]').val(yandexGoal)

    if (yandexGoal == "catalog") {
        modal.find('#modal-text').text("Оставьте Ваши контактные данные, и получите доступ к каталогу!")
    }
})
