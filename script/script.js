const btn_mobile = document.querySelector('#btn_mobile')
const navbar = document.querySelector('#navbar')
const icon = document.querySelector('#btn_mobile i')

btn_mobile.addEventListener('click', () => {
    navbar.classList.toggle('show')
    icon.classList.toggle('fa-times')
    icon.classList.toggle('fa-bars')
})

const swiper = new Swiper('.meuCarrossel', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.paginacao-carrossel',
        clickable: true,
    },

    breakpoints: {

        1024: {
            enabled: false, 
        }
    }
})

const detalhesHamburgueres = {
    "Classic Bacon": {
        calorias: '670 Kcal',
        ingredientes: ['Pão brioche premium', 'Blend Black Angus (180g)', 'Bacon em Tiras Defumado', 'Cheddar Inglês Maturado', 'Rúcula Baby Fresca', 'Cebola Roxa em Rodelas', 'Maionese de Páprica Defumada'],
        descricao: "O equilíbrio perfeito entre a intensidade e a sofisticação. O Bacon Supreme eleva o conceito de hambúrguer de bacon a um novo patamar, combinando texturas crocantes com a cremosidade de queijos maturados, tudo abraçado por um pão brioche artesanal selado na manteiga.",
        preco: 'A partir de: R$ 32,00',
        combo: 'Combo Disponivel: Bacon Supreme + Porção de Batata Rustica + Refrigerante (lata) ou suco 350ml. Valor: R$ 43,00'
    },
    
    "Double Smash":{

    },

    "Cheese Explosion": {
        calorias: '670 Kcal',
        ingredientes: ['Pão de Brioche Gold', 'Double Blend Angus (320g)', 'Double Cheddar Cream', 'Bacon Crispy', 'Aioli da Casa', 'Cebola Grelhada'],
        descricao: "Uma verdadeira celebração para os amantes de queijo. O Cheese Explosion traz a intensidade de dois burgers suculentos selados na chapa, mergulhados em uma cascata de cheddar cremoso e finalizados com a crocância inconfundível do nosso bacon artesanal. É uma explosão de texturas e sabores em cada mordida.",
        preco: 'A partir de: R$ 32,00',
        combo: 'Combo Disponivel: Bacon Supreme + Porção de Batata Rustica + Refrigerante (lata) ou suco 350ml. Valor: R$ 43,00'
    },

    "Premium Gorgonzola": {

    }
}

const modal_descricao = document.querySelector('#modal_descricao')
const modal_calorias = document.querySelector('#modal_calorias')
const modal_ingredientes = document.querySelector('#modal_ingredientes')
const modal_preco = document.querySelector('#modal_preco')
const modal_combos = document.querySelector('#modal_combos')
const modal_titulo = document.querySelector('#modal_titulo')
const modal_img = document.querySelector('#modal_img')
const modal_menu = document.querySelector('#modal_menu')
const close_modal = document.querySelector('#close-modal')
const menu_card = [...document.querySelectorAll('#menu_card')]
const btn_mais = [...document.querySelectorAll('#btn_mais')]

