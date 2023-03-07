const setAccordion = (element) => {

    const accordion = element
    const toggle = accordion.querySelector('*[data-accordion-toggle]')
    const content = accordion.querySelector('*[data-accordion-content]')
    const accordionItems = accordion.querySelectorAll('*[data-accordion]')

    const setAccordionHeight = () => {

        if (accordion.dataset.accordion == 'hidden') {

            content.style.maxHeight = '0'

        } else {

            content.style.maxHeight = `${content.scrollHeight}px`

        }

    }

    setAccordionHeight()

    toggle.addEventListener('click', () => {

        if (accordion.dataset.accordion == 'hidden') {

            accordion.dataset.accordion = 'active'

            setAccordionHeight()

        } else {

            accordion.dataset.accordion = 'hidden'

            setAccordionHeight()

        }

    })

    accordionItems.forEach((element) => {

        const accordionItem = element

        if (!accordionItem) return

        const accordionItemToggle = accordionItem.querySelector('*[data-accordion-toggle]')
        const accordionItemContent = accordionItem.querySelector('*[data-accordion-content]')

        accordionItemToggle.addEventListener('click', () => {

            if (accordionItem.dataset.accordion == 'hidden') {

                content.style.maxHeight = `${content.scrollHeight + accordionItemContent.scrollHeight}px`

            } else {

                content.style.maxHeight = `${content.scrollHeight - accordionItemContent.scrollHeight}px`

            }

        })

    })

}

const accordions = document.querySelectorAll('*[data-accordion]')

accordions.forEach((element) => {

    const accordion = element

    if (!accordion) return

    setAccordion(accordion)

})