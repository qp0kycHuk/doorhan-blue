const price = document.querySelector('.-price-')
const priceInput = document.querySelector('.-price-input-')
let currentPrice = Number(price.textContent)

const quantityIncrease = (event) => {

    const block = event.target.parentElement
    const quantity = block.querySelector('.-quantity-')
    let quantityValue = Number(quantity.value)

    ++quantityValue
    quantity.value = String(quantityValue)

    price.innerText = String(currentPrice * quantityValue)
    priceInput.value = String(currentPrice * quantityValue)

}

const quantityDecrease = (event) => {

    const block = event.target.parentElement
    const quantity = block.querySelector('.-quantity-')
    let quantityValue = Number(quantity.value)

    --quantityValue
    quantity.value = String(quantityValue)
    price.innerText = String(currentPrice * quantityValue)
    priceInput.value = String(currentPrice * quantityValue)

    if (quantityValue < 1) {

        quantity.value = '1'
        price.innerText = currentPrice
        priceInput.value = currentPrice
    }

}

document.addEventListener('click', (event) => {

    if (event.target.classList.contains('-increase-')) quantityIncrease(event)

    if (event.target.classList.contains('-decrease-')) quantityDecrease(event)

})