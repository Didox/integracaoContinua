const Cliente = require("../models/cliente")

describe('Clientes', () => {
    test('Deve fazer o teste de match', () => {
        const cliente = new Cliente();
        expect(cliente.nome).not.beUndefined;
    });

    test('Deve testar um CPF válido', () => {
        const cliente = new Cliente();
        cliente.cpf = "134.841.820-67"
        expect(cliente.validarCPF()).toBe(true);
    });

    test('Deve testar um CPF inválido', () => {
        const cliente = new Cliente();
        cliente.cpf = "134.841.820-17"
        expect(cliente.validarCPF()).toBe(false);
    });
})