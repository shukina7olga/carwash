export const accordeon = () => {
    const accordeon = document.querySelector('.accordeon')
    const titles = accordeon.querySelectorAll('.title')

    titles.forEach(title => {
        title.addEventListener('click', () => {
            const currentElement = title.closest('.element')
            const isActive = currentElement.classList.contains('active')

            accordeon.querySelectorAll('.element').forEach(el => {
                el.classList.remove('active')
            })

            if (!isActive) {
                currentElement.classList.add('active')
            }
        })
    })
}