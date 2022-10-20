const accordions = document.querySelectorAll('*[data-accordion]')

accordions.forEach((item) => {

    const accordion = item
    const accordionItem = item.querySelectorAll('*[data-child]')
    const toggle = accordion.querySelector('*[data-toggle]')
    const content = accordion.querySelector('*[data-content]')

    if (accordion.dataset.accordion == 'hidden') content.style.height = '0'

    if (accordion.dataset.accordion == 'active') content.style.height = `${content.scrollHeight}px`

    toggle.addEventListener('click', () => {

        if (accordion.dataset.accordion == 'hidden') {

            accordion.dataset.accordion = 'active'
            content.style.height = `${content.scrollHeight}px`

        } else {

            accordion.dataset.accordion = 'hidden'
            content.style.height = '0'

        }

    })

    accordionItem.forEach(el => {

        const childToggle = el.querySelector('*[data-child-toggle]')
        const childContent = el.querySelector('*[data-child-content]')

        if (el.dataset.child == 'hidden') {

            childContent.style.height = '0'
            content.style.height = `auto`

            if (accordion.dataset.accordion == 'hidden') content.style.height = '0'

        }

        if (el.dataset.child == 'active') {

            childContent.style.height = `${childContent.scrollHeight}px`
            content.style.height = `${content.scrollHeight + childContent.scrollHeight}px`

            if (accordion.dataset.accordion == 'active') content.style.height = 'auto'
            
        }

        childToggle.addEventListener('click', () => {

            if (el.dataset.child == 'hidden') {

                el.dataset.child = 'active'
                childContent.style.height = `${childContent.scrollHeight}px`
                content.style.height = `${content.scrollHeight + childContent.scrollHeight}px`
            } else {

                el.dataset.child = 'hidden'
                childContent.style.height = '0'
                content.style.height = `${content.scrollHeight - childContent.scrollHeight}px`

            }

        })

    })

})