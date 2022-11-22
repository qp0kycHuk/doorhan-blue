const price = document.querySelector('.-price-')
const priceInput = document.querySelector('.-price-input-')
let currentPrice = Number(price.textContent)
priceInput.value = currentPrice

const priceOld = document.querySelector('.-price-old-')
const priceInputOld = document.querySelector('.-price-input-old-')
let currentPriceOld

if (priceOld) {

    currentPriceOld = Number(priceOld.textContent)
    priceInputOld.value = currentPriceOld

}


const quantityIncrease = (event) => {

    const block = event.target.parentElement
    const quantity = block.querySelector('.-quantity-')
    let quantityValue = Number(quantity.value)

    ++quantityValue
    quantity.value = String(quantityValue)
    // new Intl.NumberFormat('ru').format(currentPrice)
    price.innerText = new Intl.NumberFormat('ru').format(String(currentPrice * quantityValue))
    priceInput.value = String(currentPrice * quantityValue)

    if (priceOld) {

        priceOld.innerHTML = new Intl.NumberFormat('ru').format(String(currentPriceOld * quantityValue))
        priceInputOld.value = String(currentPriceOld * quantityValue)

    }

}

const quantityDecrease = (event) => {

    const block = event.target.parentElement
    const quantity = block.querySelector('.-quantity-')
    let quantityValue = Number(quantity.value)

    --quantityValue
    quantity.value = String(quantityValue)

    price.innerText = new Intl.NumberFormat('ru').format(String(currentPrice * quantityValue))
    priceInput.value = String(currentPrice * quantityValue)

    if (priceOld) {

        priceOld.innerHTML = new Intl.NumberFormat('ru').format(String(currentPriceOld * quantityValue))
        priceInputOld.value = String(currentPriceOld * quantityValue)

    }

    if (quantityValue < 1) {

        quantity.value = '1'

        price.innerText = new Intl.NumberFormat('ru').format(currentPrice)
        priceInput.value = currentPrice

        if (priceOld) {

            priceOld.innerHTML = new Intl.NumberFormat('ru').format(currentPriceOld)
            priceInputOld.value = currentPriceOld

        }
    }

}

document.addEventListener('click', (event) => {

    if (event.target.classList.contains('-increase-')) quantityIncrease(event)

    if (event.target.classList.contains('-decrease-')) quantityDecrease(event)

})