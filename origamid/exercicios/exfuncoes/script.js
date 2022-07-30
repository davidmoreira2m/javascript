// Função para verificar se um valor é verdadeiro
function verificarVerdadeiro(valor) {
   return !!valor;
}
console.log(verificarVerdadeiro(0));

//Função que retorna o perimetro de um quadrado
function perimetro(lado) {
   return lado * 4;
}
console.log(perimetro(3));

//Função que retorna nome completo
function meuNome(nome, sobrenome) {
   return `${nome} ${sobrenome}`;
}
console.log("David", "Moreira");

//função que verifica se o número é par ou ímpar
function veriPar(numero) {
   if (numero % 2 === 0) {
      return "O número é par";
   } else {
      return "O número é impar";
   }
}
console.log(veriPar(1));

//Função que verifica o tipo de dado
function tipoDado(dado) {
   return typeof dado;
}
console.log(tipoDado("david"));

//mostrar nome ao usar o scroll

addEventListener("scroll", function () {
   console.log("David Moreira");
});
