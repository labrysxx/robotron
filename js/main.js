const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "braco": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => { // para cada elemento do array...
    elemento.addEventListener("click", (evento) => { // no ato de um click...
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode) // retorno primeiro o valor do data-attribute e segundo o pai do botão clicado
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]') // capturo a tag que contém o data-contador...

    if(operacao === "-") { // se a tag data-controle contiver "-"...
        peca.value = parseInt(peca.value) - 1 // subtraio 1
    } else { // caso contrário
        peca.value = parseInt(peca.value) + 1 // adiciono 1
    }
}

function atualizaEstatistica(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}