var input = document.querySelector('input');
var temSom = false;
var meuSom = document.querySelector("audio");
var contDigito = 0;

function alternaSom() {
    tocaSom()
    temSom = !temSom;
}

function tocaSom() {
    if (temSom) {
        meuSom.play();
    }
}

function adicionaNumero(x) {
    contDigito++;
    if (input.value == 0) {
        input.value = x;
    } else {
        if (contDigito == 3) {
            input.value += `${x}.`;
            contDigito = 0;
        }
        else {
            input.value += x;
        }
    }
    tocaSom();
}

function adicionaVirgula(x) {
    if (input.value.includes(','))
        return input.value;
    else {
        input.value += x;
    }
    tocaSom();
}

function adicionaSimbolo(x) {
    var array = Array.from(input.value);
    var ultimo = array[array.length - 1];
    var numero = parseInt(ultimo);

    if (Number.isInteger(numero)) {
        input.value += x;
    }
    else
        input.value = input.value;
    tocaSom();
}

function limpar(x) {
    if (x == 'C')
        input.value = '0';
    if (x == 'Del') {
        var array = Array.from(input.value);
        var inputArray = array.pop();

        input.value = array.join('');
    }
    tocaSom();
    contDigito = 0;
}

function calcular(x) {
    input.value = eval(input.value);
    tocaSom();
}