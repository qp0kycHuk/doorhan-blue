window.addEventListener("DOMContentLoaded", function() {

    function mask(event) {
        var matrix = "7 (___) ___ - __ - __",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = event.target.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        event.target.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });

        event.target.addEventListener('blur', () => {
            if (event.target.value.length == 1){
                event.target.value = "";
            }
        });
    };

    document.addEventListener('input',(event)=>{
        if(event.target.classList.contains('-validate-phone-')){
            mask(event);
            if(event.target.value.length == 21){
                event.target.nextElementSibling.style.opacity = "0";
            }
        }
        event.target.addEventListener('blur', () => {
            event.target.nextElementSibling.style.opacity = "0";
        });
    });
});

function validateForm(event){
    event.preventDefault();
    let errName = event.target.querySelector('.error-name');
    let errTel = event.target.querySelector('.error-tel');
    let nameInput = event.target.querySelector('.input__name');
    let telInput = event.target.querySelector('.input__tel');
    if(nameInput.value == null || nameInput.value == ""|| nameInput.value.length == 1){
        nameInput.focus();
        errName.style.opacity = "1";
        return false;
    }else if(telInput.value == null || telInput.value == ""){
        telInput.focus();
        errTel.innerHTML = "Пожалуйста, введите Ваш телефон!";
        errTel.style.opacity = "1";
        return false;
    }else if(telInput.value.length < 21){
        telInput.focus();
        errTel.innerHTML = "Введите корректный номер телефона!";
        errTel.style.opacity = "1";
        return false;
    }else{
        let formData = new FormData(event.target);
        const button = event.target.querySelector('[type="submit"]')
        const buttonHtml = button.innerHTML
        button.disabled = true
        button.style.opacity = '0.6'
        button.style.pointerEvents = 'none'
        button.innerHTML = '<div class="progress progress-circle"></div>'


        let promise = fetch('/local/ajax/php/form.php', {
            method: 'POST',
            body: formData
        }).then((response) => response.json())
        .then((result) => {
            if(result.result == true){
                $.fancybox.open({
                    type: 'ajax',
                    src: '/local/ajax/modal/form-modal-success.php?target=' + result.target + '&targetUrl=' + result.targetUrl,
                });
            }else{
                $.fancybox.open({
                    type: 'ajax',
                    src: '/local/ajax/modal/form-modal-false.php?target=' + result.target + '&targetUrl=' + result.targetUrl,
                });
            }
            button.disabled = false
            button.style.opacity = ''
            button.style.pointerEvents = ''
            button.innerHTML = buttonHtml

            //console.log(result);
            ym(51320992, 'reachGoal', 'webmens_order', {[result.targetUrl]: {target: result.target}});
	    // yaCounter51320992.reachGoal('webmens_order', {[result.targetUrl]: {target: result.target}});
            errName.style.opacity = "0";
            errTel.style.opacity = "0";
            event.target.reset();
        });
        return true;
    }
}

document.addEventListener('input', (event) =>  {
    if(event.target.classList.contains('-validate-name-')){
        let alphaExp = /[0-9.,!@#$%^&*()-=_+`~{}/?<>|'"]/;
        if(event.target.value.match(alphaExp)){
            event.target.value = event.target.value.replace(alphaExp, "")
        }
        if(event.target.value.length > 1){
            event.target.nextElementSibling.style.opacity = "0";
        }
        event.target.addEventListener('blur', () => {
            event.target.nextElementSibling.style.opacity = "0";
        });
    }
})

document.addEventListener('submit', (event)=>{
    if(event.target.classList.contains('-validate-form-')){
        validateForm(event);
    }
});