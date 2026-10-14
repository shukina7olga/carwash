export const slider = () => {
    const slides = document.querySelectorAll('.top-slider .item')
    const timeInterval = 3000

    let currentSlide = 0

    const nextSlide = () => {
        slides[currentSlide].classList.remove('item-active')

        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        slides[currentSlide].classList.add('item-active')
    }

    setInterval(nextSlide, timeInterval)
}