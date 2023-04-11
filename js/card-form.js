const sendingData = (event) => {

    event.preventDefault()

    const form = event.target

    const formData = new FormData(form)
    const queryString = new URLSearchParams(formData).toString()
    const requestUrl = `/local/ajax/modal/form-modal-shop.php?${queryString}`
    const submitBtn = form.querySelector('button[type="submit"]')

    submitBtn.setAttribute('disabled', 'disabled')

    $.fancybox.open({
        type: 'ajax',
        src: requestUrl,
    });

    submitBtn.removeAttribute('disabled')

}

document.addEventListener('submit', (event) => {

    if (event.target.classList.contains('-sending-form-')) sendingData(event)

})