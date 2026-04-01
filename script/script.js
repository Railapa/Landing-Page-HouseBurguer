const btn_mobile = document.querySelector('#btn_mobile')
const navbar = document.querySelector('#navbar')

btn_mobile.addEventListener('click', () => {
    navbar.classList.toggle('show')
})