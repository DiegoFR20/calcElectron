var input = document.querySelector('input')
var temSom = false
var meuSom = document.querySelector("audio")
var contDigito = 0

function alternaSom() {
    tocaSom()
    temSom = !temSom
}

module.exports = alternaSom

function tocaSom() {
    if (temSom) {
        meuSom.play()
    }
}

module.exports = tocaSom

function adicionaNumero(x) {
    contDigito++
    if (input.value == 0) {
        input.value = x
    } else {
        if (contDigito == 3) {
            input.value += `${x}.`
            contDigito = 0
        }
        else {
            input.value += x
        }
    }
    tocaSom()
}

module.exports = adicionaNumero

function adicionaVirgula(x) {
    if (input.value.includes(','))
        return input.value
    else {
        input.value += x
    }
    tocaSom()
}

module.exports = adicionaVirgula

function adicionaSimbolo(x) {
    var array = Array.from(input.value)
    var ultimo = array[array.length - 1]
    var numero = parseInt(ultimo)

    if (Number.isInteger(numero)) {
        input.value += x
    }
    else
        input.value = input.value
    tocaSom()
}

module.exports = adicionaSimbolo

function limpar(x) {
    if (x == 'C')
        input.value = '0'
    if (x == 'Del') {
        var array = Array.from(input.value)
        var inputArray = array.pop()

        input.value = array.join('')
    }
    tocaSom()
    contDigito = 0
}

module.exports = limpar

function calcular() {
    input.value = eval(input.value)
    tocaSom()
}

module.exports = calcular