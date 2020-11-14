$(".ideas__element").click(function (event) {
    event.preventDefault()
    var src = $(this).attr("data-src")
    $('#modal-img__img').attr("src", src)
    $('#modal-img').modal('show')
})
