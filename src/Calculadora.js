class Calculadora {
    constructor(numero1, numero2) {
        this.number1 = numero1;
        this.number2 = numero2;
    }
    somar() {
        var soma = 0, i = undefined;
        for (i = 0; i < arguments.length; i++)
            soma += arguments[i];
        return soma;
    }
    subtrair(numero1, numero2) {
        return numero1 - numero2;
    }
    multiplicar() {
        var multiplicacao = arguments[0], i = undefined;
        for (i = 1; i < arguments.length; i++)
            multiplicacao *= arguments[i];
        return multiplicacao;
    }
    dividir(numero1, numero2) {
        return numero1 / numero2;
    }
};