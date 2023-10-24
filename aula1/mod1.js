const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => {
    console.log(nome, sobrenome);
};

module.exports.nome = nome;
module.exports.falaNome = falaNome;

console.log(module.exports);