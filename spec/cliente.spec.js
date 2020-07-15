const Cliente = require("../models/cliente")

describe('Clientes', () => {
    test('Deve fazer o teste de match', () => {
        const cliente = new Cliente();
        expect(cliente.nome).not.beUndefined;
    });

    test('Deve testar um CPF válido', () => {
        expect(Cliente.validarCPF("134.841.820-67")).toBe(true);
    });

    test('Deve testar um CPF inválido', () => {
        expect(Cliente.validarCPF("134.841.820-17")).toBe(false);
    });
})