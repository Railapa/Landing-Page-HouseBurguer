const btn_mobile = document.querySelector('#btn_mobile')
const navbar = document.querySelector('#navbar')
const icon = document.querySelector('#btn_mobile i')

btn_mobile.addEventListener('click', () => {
    navbar.classList.toggle('show')
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
        descricao: "O equilíbrio perfeito entre a intensidade e a sofisticação. O Bacon Supreme eleva o conceito de hambúrguer de bacon a um novo patamar, combinando texturas crocantes com a cremosidade de queijos maturados, tudo abraçado por um pão brioche artesanal selado na manteiga.",
        ingredientes: ['Pão brioche premium', 'Blend Black Angus (180g)', 'Bacon em Tiras Defumado', 'Cheddar Inglês Maturado', 'Rúcula Baby Fresca', 'Cebola Roxa em Rodelas', 'Maionese de Páprica Defumada'],
        preco: 'A partir de R$ 32,00',
        combo: 'Bacon Supreme + Porção de Batata Rustica + Refrigerante (lata) ou suco 350ml. <br/> Valor: R$ 45,00'
    },

    "Double Royal": {
        calorias: '710 Kcal',
        descricao: "Uma imponente torre de sabores brasileiros e técnicas artesanais. O Double Royal destaca-se pela generosa fatia de queijo coalho grelhada na chapa, que traz uma textura firme e salgadinha, harmonizando perfeitamente com o blend de carne suculento e a base de pepperoni defumado. Tudo isso coroado por uma cascata aveludada de creme de queijos brancos.",
        ingredientes: ['Pão de Leite Artesanal', 'Blend Beef Premium (180g)', 'Queijo Coalho na Chapa', 'Pepperoni Grelhado', 'Creme de Queijos House', 'Cebola na Chapa e Rúcula', 'Tomate Cereja'],
        preco: 'A partir de R$ 40,00',
        combo: 'Double Royal + Porção de Batata Rustica + Refrigerante (lata) ou suco 350ml. <br/> Valor: R$ 55,00'
    },

    "Cheese Explosion": {
        calorias: '920 Kcal',
        descricao: "Uma verdadeira celebração para os amantes de queijo. O Cheese Explosion traz a intensidade de dois burgers suculentos selados na chapa, mergulhados em uma cascata de cheddar cremoso e finalizados com a crocância inconfundível do nosso bacon artesanal. É uma explosão de texturas e sabores em cada mordida.",
        ingredientes: ['Pão de Brioche Gold', 'Double Blend Angus (320g)', 'Double Cheddar Cream', 'Bacon Crispy', 'Aioli da Casa', 'Cebola Grelhada'],
        preco: 'A partir de: R$ 38,00',
        combo: 'Cheese Explosion + Porção de Batata Rustica + Refrigerante (lata) ou suco 350ml. <br/> Valor: R$ 50,00'
    },

    "Gorgon Prime": {
        calorias: '620 Kcal',
        descricao: "Para paladares que buscam sofisticação e contraste. O Gorgon Prime une a força do queijo gorgonzola com a doçura do mel de pimenta...",
        ingredientes: [
            'Pão Brioche de Batata',
            'Blend Black Angus (180g)',
            'Creme Blue Cheese (Gorgonzola)',
            'Bacon Strip Crocante'
        ],
        preco: 'A partir de: R$ 34,00',
        combo: 'Gorgon Prime + Porção de Batata Rustica + Refrigerante (lata) ou suco 350ml. <br/> Valor: R$ 46,00'
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

btn_mais.forEach((btn) => {
    btn.addEventListener('click', () => {
        const cardPai = btn.closest('.menu_card');
        
        const nomeDoProduto = cardPai.getAttribute('data-product')

        preencherEAbrirModal(nomeDoProduto)
    })
})

const preencherEAbrirModal = (nomeDoProduto) => {
    const dados = detalhesHamburgueres[nomeDoProduto]

    if(dados){
        modal_titulo.innerHTML = nomeDoProduto
        modal_descricao.innerHTML = dados.descricao
        modal_calorias.innerHTML = dados.calorias
        modal_preco.innerHTML = dados.preco
        modal_combos.innerHTML = dados.combo
        modal_ingredientes.innerHTML = dados.ingredientes.join(', ')
        
        const imgCard = document.querySelector(`[data-product="${nomeDoProduto}"] img`).src
        modal_img.src = imgCard

        modal_menu.classList.add('modal-overlay-active')
    }
} 

close_modal.addEventListener('click', () => {
    modal_menu.classList.remove('modal-overlay-active')
})

modal_menu.addEventListener('click', (e) => {
    if (e.target === modal_menu) {
        modal_menu.classList.remove('modal-overlay-active');
    }
})