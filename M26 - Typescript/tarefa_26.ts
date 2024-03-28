
const multiplicacao = (x: number, y: number): number => x * y;

const saudacao = (nome: string): string => "Olá, " + nome + "!";

const resultadoMultiplicacao = multiplicacao(5, 3);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);

const mensagemSaudacao = saudacao("João");
console.log(mensagemSaudacao);