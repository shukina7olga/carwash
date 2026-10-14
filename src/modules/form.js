export const form = () => {
    const form = document.querySelector('.modal-callback form')
    const nameInput = form.querySelector('input[name="fio"]')
    const telInput = form.querySelector('input[name="tel"]')

    //кирилица в поле имя
    nameInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ\s-]/g, '')
    })

    //+ и цифры в телефон
    telInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d+]/g, '')
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        showMessage('Идёт отправка...', 'loading')

        const formData = new FormData(form)
        const data = {}

        formData.forEach((value, key) => {
            data[key] = value
        })

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (!response.ok) throw new Error('Ошибка')
            return response.json()
        }).then(result => {
            showMessage('Отправлено!', 'success')
            form.reset()
        }).catch(error => {
            showMessage('Ошибка отправки', 'error')
        })
    })

    // просмотр состояния отправки
    const showMessage = (text, type) => {
        let message = form.querySelector('.form-message')

        if (!message) {
            message = document.createElement('p')
            message.classList.add('form-message')
            form.append(message)
        }

        message.textContent = text
        message.className = 'form-message ' + type
    }
}