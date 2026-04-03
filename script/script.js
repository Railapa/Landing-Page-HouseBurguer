const btn_mobile = document.querySelector('#btn_mobile')
const navbar = document.querySelector('#navbar')

btn_mobile.addEventListener('click', () => {
    navbar.classList.toggle('show')
})

 const swiper = new Swiper('.meuCarrossel', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    pagination: {
        el: '.paginacao-carrossel',
        clickable: true,
    },

    grabCursor: true,
})