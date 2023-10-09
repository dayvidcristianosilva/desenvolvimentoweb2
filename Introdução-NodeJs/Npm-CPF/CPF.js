const CPF = require('cpf-check');

var resultado = CPF.validate('14600025800');

if (resultado) {
    console.log('CPF válido!')
} else {
    console.log('CPF inválido!')
};

console.log(resultado);




