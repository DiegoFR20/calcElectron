var input = document.querySelector('input')
var temSom = false
var meuSom = document.querySelector("audio")
var contDigito = 0

meuSom.volume = 0.10;

function alternaSom() {
    tocaSom()
    temSom = !temSom
}

function tocaSom() {
    if (temSom) {
        meuSom.play()
    }
}

function adicionaNumero(x) {
    contDigito++
    if (input.value == 0) {
        input.value = x
    } else {
        if (contDigito == 4) {
            input.value += `.${x}`
            contDigito = 1
        }
        else {
            input.value += x
        }
    }
    tocaSom()
}

function adicionaVirgula(x) {
    if (input.value.includes(','))
        return input.value
    else {
        input.value += x
    }
    tocaSom()
}

function adicionaSimbolo(x) {
    contDigito = 0;
    var array = Array.from(input.value)
    var ultimo = array[array.length - 1]
    var numero = parseInt(ultimo)

    if (!Number.isNaN(numero)) {
        input.value += x
    }
    else {
        var stringModificada = input.value.slice(0, -1)
        stringModificada += x
        input.value = stringModificada
    }
    tocaSom()
}

function limpar(x) {
    if (x == 'C')
        input.value = '0'
    if (x == 'Del') {
        var array = Array.from(input.value)
        array.pop()
        if (array.length == 0)
            input.value = 0
        else
            input.value = array.join('')
    }
    tocaSom()
    contDigito = 0
}

function calcular() {
    input.value = eval(input.value)
    tocaSom()
}