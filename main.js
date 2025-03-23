export function maiorNumero(lista) {
    if (lista.length === undefined || lista.length === 0) {
        return null;
    }

    let indice = 0;
    let i = 1;

    while (i < lista.length) {
        if (!(lista[indice] - lista[indice] === 0)) {
            return null
        }
        if (lista[i] > lista[indice]) {
            indice = i
        }
        i++
    }

    return indice
}

export function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return 'Par'
    } else if (numero % 2 === 1) {
        return 'Ímpar'
    } else {
        return null
    }
}

export function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return 'Domingo'
        case 2:
            return 'Segunda-feira'
        case 3:
            return 'Terça-feira'
        case 4:
            return 'Quarta-feira'
        case 5:
            return 'Quinta-feira'
        case 6:
            return 'Sexta-feira'
        case 7:
            return 'Sábado'
        default:
            return 'Número inválido'
    }
}

export function somarLista(numeros) {
    if (numeros == null) {
        return null
    } else if (numeros.length === 0) {
        return 0
    } else {
        let soma = 0
        for (let i = 0; i < numeros.length; i++) {
            if (typeof numeros[i] !== 'number') {
                return null
            }
            soma += numeros[i]
        }
        return soma
    }
}

export function contarPalavras(palavras) {
    if (palavras === '') {
        return 0
    } else if (palavras.length > 0) {
        let lista = palavras.split(' ')
        let contador = 0
        for (let i = 0; i < lista.length; i++) {
            if (lista[i] !== '') {
                contador++
            }
        }
        return contador
    } else {
        return null
    }
}

export function atualizarPropriedade(objeto, propriedade, valor) {
    objeto[propriedade] = valor
    return objeto
}

export function listarChaves(objeto) {
    if (objeto && typeof objeto === 'object') {
        return Object.keys(objeto)
    } else {
        return null
    }
}
export function saudacaoPorHora(numero) {
    if (numero >= 0 && numero <= 11) {
        return 'Bom dia!'
    } else if (numero >= 12 && numero <= 17) {
        return 'Boa tarde!'
    } else if (numero >= 18 && numero <= 23) {
        return 'Boa noite!'
    } else {
        return 'Hora inválida!'
    }
}