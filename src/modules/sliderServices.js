export const sliderServices = () => {
    const carousel = document.querySelector('.services-carousel')
    const arrowLeft = document.querySelector('.arrow-left')
    const arrowRight = document.querySelector('.arrow-right')
    const cards = Array.from(carousel.children)

    let start = 0

    const show = () => {
        carousel.innerHTML = ''

        for (let i = 0; i < 3; i++) {
            carousel.append(cards[(start + i) % cards.length].cloneNode(true))
        }
    }

    arrowRight.addEventListener('click', () => {
        start = (start + 1) % cards.length
        show()
    })

    arrowLeft.addEventListener('click', () => {
        start = (start - 1 + cards.length) % cards.length
        show()
    })

    show()
}