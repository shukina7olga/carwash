export const modal = () => {
    const callbackBtns = document.querySelectorAll('.callback-btn') //на десктопе и на мобилке (2 кнопки)

    const modalOverlay = document.querySelector('.modal-overlay')
    const modalCallback = document.querySelector('.modal-callback')

    callbackBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modalOverlay.style.display = 'block'
            modalCallback.style.display = 'block'
        })
    })

    document.addEventListener('click', e => {
        if (e.target.closest('.modal-overlay') || e.target.closest('.modal-close')) {
            modalOverlay.style.display = 'none'
            modalCallback.style.display = 'none'
        }
    })

}