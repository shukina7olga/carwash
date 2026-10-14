export const modalServices = () => {
    const carousel = document.querySelector('.services-carousel')
    const servicesBtn = document.querySelector('.button-services')
    const modalOverlay = document.querySelector('.modal-overlay')
    const modalCallback = document.querySelector('.modal-callback')

    //для карточек
    carousel.addEventListener('click', e => {
        const btn = e.target.closest('.fancyboxModal')
        if (btn) {
            e.preventDefault()
            modalOverlay.style.display = 'block'
            modalCallback.style.display = 'block'
        }
    })

    //.button-services
    servicesBtn.addEventListener('click', e => {
        e.preventDefault()
        modalOverlay.style.display = 'block'
        modalCallback.style.display = 'block'
    })

    document.addEventListener('click', e => {
        if (e.target.closest('.modal-overlay') || e.target.closest('.modal-close')) {
            modalOverlay.style.display = 'none'
            modalCallback.style.display = 'none'
        }
    })
}