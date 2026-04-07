const btn_mobile = document.querySelector('#btn_mobile')
const navbar = document.querySelector('#navbar')
const icon = document.querySelector('#btn_mobile i')

if (btn_mobile && navbar) {
    btn_mobile.addEventListener('click', () => {
        navbar.classList.toggle('show')
    })
}

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
    },

    "Green Velvet": {
        calorias: '590 Kcal',
        descricao: "A prova de que a simplicidade, quando feita com perfeição, é insuperável. O Green Velvet traz o nosso blend Black Angus de 180g selado na brasa, coberto por uma camada generosa de queijo prato derretido e finalizado com o icônico molho verde secreto da House — uma emulsão de ervas finas que traz frescor a cada mordida.",
        ingredientes: ['Pão de Brioche Tostado na Manteiga', 'Blend Black Angus (180g)', 'Queijo Prato Artesanal', 'Molho Verde de Ervas da Casa', 'Picles de Pepino Agridoce'],
        preco: 'A partir de R$ 29,00',
        combo: 'Green Velvet + Porção de Batata Rustica + Refrigerante (lata) ou suco 350ml. <br/> Valor: R$ 41,00'
    },

    "Outback Soul": {
        calorias: '780 Kcal',
        descricao: "Uma jornada de sabores intensos e contrastantes. O Outback Soul é montado em nosso exclusivo pão australiano artesanal, que traz notas de mel e cacau. O blend de 180g é coberto por cheddar inglês derretido, fatias de bacon crocante e uma generosa porção de cebolas caramelizadas no açúcar mascavo, criando uma harmonia perfeita entre o doce e o defumado.",
        ingredientes: ['Pão Australiano Artesanal', 'Blend Black Angus (180g)', 'Cheddar Inglês', 'Cebola Caramelizada', 'Bacon em Tiras', 'Maionese de Alho Assado'],
        preco: 'A partir de R$ 36,00',
        combo: 'Outback Soul + Porção de Batata Rustica + Refrigerante (lata) ou suco 350ml. <br/> Valor: R$ 48,00'
    },

    "Crispy Empire": {
        calorias: '840 Kcal',
        descricao: "Um monumento ao sabor e à crocância. O Crispy Empire é construído com um blend suculento de 180g, coberto por uma camada generosa de cheddar cremoso e coroado com uma montanha de cebolas crispy artesanais, preparadas diariamente na casa. Para finalizar, adicionamos pedaços de bacon caramelizado que criam um contraste inesquecível.",
        ingredientes: ['Pão Brioche Tostado', 'Blend Black Angus (180g)', 'Cheddar Melt', 'Cebola Crispy da Casa', 'Bacon Bits Caramelizados', 'Molho Barbecue Artesanal'],
        preco: 'A partir de R$ 39,00',
        combo: 'Crispy Empire + Porção de Batata Rustica + Refrigerante (lata) ou suco 350ml. <br/> Valor: R$ 51,00'
    },

    "Garden Fresh": {
        calorias: '550 Kcal',
        descricao: "O equilíbrio perfeito entre o frescor e a indulgência. O Garden Fresh combina nosso suculento blend Angus de 180g com uma seleção rigorosa de vegetais frescos. O queijo derretido se une ao picles artesanal e à cebola roxa para criar uma explosão de texturas, tudo finalizado com um toque especial de molho da casa em um pão brioche macio.",
        ingredientes: ['Pão Brioche Selado', 'Blend Black Angus (180g)', 'Queijo Prato Derretido', 'Alface Americana Crocante', 'Tomate Italiano', 'Cebola Roxa', 'Picles Artesanal', 'Maionese House'],
        preco: 'A partir de R$ 28,00',
        combo: 'Garden Fresh + Porção de Batata Rustica + Refrigerante (lata) ou suco 350ml. <br/> Valor: R$ 40,00'
    },

    "Pure Nature": {
        calorias: '420 Kcal',
        descricao: "Uma explosão de texturas e nutrientes sem abrir mão do sabor gourmet. O Pure Nature é servido em um exclusivo pão multigrãos artesanal, tostado na medida certa. O destaque fica para o hambúrguer de grão-de-bico com especiarias, acompanhado por finas fatias de pepino japonês, rúcula baby fresca e um toque suave de homus cremoso da casa.",
        ingredientes: ['Pão Multigrãos com Sementes', 'Hambúrguer de Grão-de-bico (150g)', 'Rúcula Baby', 'Pepino Japonês', 'Tomate Cereja', 'Homus Artesanal', 'Azeite de Ervas'],
        preco: 'A partir de R$ 30,00',
        combo: 'Pure Nature + Porção de Batata Rustica + Refrigerante (lata) ou suco 350ml. <br/> Valor: R$ 42,00'
    },
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
const menu_card = [...document.querySelectorAll('.menu_card')]
const btn_mais = [...document.querySelectorAll('.btn_mais')]

btn_mais.forEach((btn) => {
    btn.addEventListener('click', () => {
        const cardPai = btn.closest('.menu_card');

        const nomeDoProduto = cardPai.getAttribute('data-product')

        preencherEAbrirModal(nomeDoProduto)
    })
})

const preencherEAbrirModal = (nomeDoProduto) => {
    const dados = detalhesHamburgueres[nomeDoProduto]

    if (dados) {
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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-scroll')
        }
    })
}, {
    threshold: 0.15
})
const hiddenElements = document.querySelectorAll('.hidden, .menu_card, .cartao-depoimento, .sobre_img, .sobre_texto')

hiddenElements.forEach((el) => {
    el.classList.add('hidden')
    observer.observe(el)
})

