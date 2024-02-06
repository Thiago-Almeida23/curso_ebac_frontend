$(document).ready(function() {
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000');

    // Adicionando a máscara de telefone de acordo com o tipo selecionado
    $('#tipoTelefone').change(function() {
        var tipo = $(this).val();
        var mask = tipo === 'celular' ? '(00) 00000-0000' : '(00) 0000-0000';
        $('#telefoneNumero').val('').mask(mask);
    }).change(); // Chamamos a função change() para aplicar a máscara inicialmente

    // Adicionando regra de validação do telefone
    $.validator.addMethod("telefoneBR", function(value, element) {
        value = value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

        if ($('#tipoTelefone').val() === 'celular') {
            return value.length === 11; // Celular: 11 dígitos
        } else {
            return value.length === 10; // Fixo: 10 dígitos
        }
    }, "Por favor, digite um telefone válido.");

    // Adicionando regra de validação do CPF
    $.validator.addMethod("cpfBR", function(value, element) {
        // Remover todos os caracteres não numéricos
        var numbers = value.replace(/\D/g, '');

        // Verificar se o CPF possui 11 dígitos
        if (numbers.length !== 11) return false;

        return true; // Aceitar qualquer CPF com 11 dígitos
    }, "Por favor, digite um CPF válido.");

    // Adicionando regra de validação do CEP
    $.validator.addMethod("cepBR", function(value, element) {
        return /^\d{5}-\d{3}$/.test(value);
    }, "Por favor, digite um CEP válido.");

    $('#cadastroForm').validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefoneNumero: {
                required: true,
                telefoneBR: true
            },
            cpf: {
                required: true,
                cpfBR: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true,
                cepBR: true
            }
        },
        messages: {
            nomeCompleto: {
                required: "Por favor, digite seu nome completo."
            },
            email: {
                required: "Por favor, digite seu e-mail.",
                email: "Por favor, digite um e-mail válido."
            },
            telefoneNumero: {
                required: "Por favor, digite seu telefone.",
                telefoneBR: "Por favor, digite um telefone válido."
            },
            cpf: {
                required: "Por favor, digite seu CPF.",
                cpfBR: "Por favor, digite um CPF válido."
            },
            endereco: {
                required: "Por favor, digite seu endereço."
            },
            cep: {
                required: "Por favor, digite seu CEP.",
                cepBR: "Por favor, digite um CEP válido."
            }
        }
    });
});
