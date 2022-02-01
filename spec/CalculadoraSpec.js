describe('Calculadora', function () {
    var resultado = 0;
    beforeEach(function () {
        resultado = new Calculadora(2, 3);
    });
    describe('Soma', function () {
        it('2 + 2 DEVE ser 4', function () {
            expect(resultado.somar(2, 2)).toBe(4);
        });

        it("2 + 2 + 2 + 2 DEVE ser 8", function () {
            expect(resultado.somar(2, 2, 2, 2)).toBe(8);
        });
    });
    describe('Subtração', function () {
        it("2 - 2 DEVE ser 0", function () {
            expect(resultado.subtrair(2, 2)).toBe(0);
        });

        it("3 - 4 DEVE ser -1", function () {
            expect(resultado.subtrair(3, 4)).toBe(-1);
        });
    });
    describe('Multiplicação', function () {

        it("3 multiplicado por 2 DEVE ser 6", function () {
            expect(resultado.multiplicar(3, 2)).toBe(6);
        });
        it("3 multiplicado por 2 e em seguida por 4 DEVE ser 24", function () {
            expect(resultado.multiplicar(3, 2, 4)).toBe(24);
        });
    });
    describe('Divisão', function () {
        it("2 dividido por 2 DEVE ser 1", function () {
            expect(resultado.dividir(2, 2)).toBe(1);
        });

        it("6 dividido por 2 DEVE ser 3", function () {
            expect(resultado.dividir(6, 2)).toBe(3);
        });
    });
});