export const arrowUp = () => {
    const upBtn = document.querySelector('.up')
    const servicesSection = document.querySelector('.services-section')

    window.addEventListener('scroll', () => {
        const sectionTop = servicesSection.offsetTop

        if (window.scrollY >= sectionTop) {
            upBtn.classList.add('visible')
        } else {
            upBtn.classList.remove('visible')
        }
    })

    upBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })    
}