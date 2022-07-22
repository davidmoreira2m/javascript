function livro(nome, ano, autor) {
    const nomeu = nome.toUpperCase();
    const totanos = 2050 - ano;
    const frase = nome + " por " + autor;
    const obj = {
        nomeu, totanos, frase
    }
    return obj;
}

const ret = livro("O Senhor dos Aneis" , 1954, "J. R. R. Tolkien")

console.log(ret.frase)