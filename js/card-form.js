const sendingData = (event) => {

    event.preventDefault()

    const form = event.target

    const formData = new FormData(form)
    const queryString = new URLSearchParams(formData).toString()
    const requestUrl = `/modal/form-modal.html?${queryString}`
    const submitBtn = form.querySelector('button[type="submit"]')

    submitBtn.setAttribute('disabled', 'disabled')

    $.fancybox.open({
        type: 'ajax',
        src: requestUrl,
    });

    form.reset()
    submitBtn.removeAttribute('disabled')

}

document.addEventListener('submit', (event) => {

    if (event.target.classList.contains('-sending-form-')) sendingData(event)

})