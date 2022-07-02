let num = document.getElementById('txtnum')
let tab = document.getElementById('seltab')
let res1 = document.getElementById('resposta1')
let listaNum = []

function adicionar(){
    n = Number(num.value)
    num.value = ''
    num.focus()
    if (n < 1 || n > 100 || listaNum.indexOf(n) != -1 || n == '') {
        alert('Valor inválido ou já adicionado!')
    } else {
        listaNum.push(n)
        listaNum.sort(function (a, b) {  return a - b;  })
        var option = document.createElement('option')
        option.value = n
        option.text = `Valor ${n} adicionado!`
        tab.appendChild (option)
        res1.innerHTML = ''
    }
}
function finalizar() {
    let soma = 0
    let maior = listaNum[0]
    let menor = listaNum[0]
    if (listaNum.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        for (let i = 0; i < listaNum.length; i++){
            soma += listaNum[i]
            if (listaNum[i] > maior)
                maior = listaNum[i]
            if (listaNum[i] < menor)
                menor = lisNum[i]
        }
    }
    res1.innerHTML = `<p>Ao todo foram cadastrados ${listaNum.length} números!</p>
                      <p>O menor valor informado foi ${menor}</p>
                      <p>O maior valor informado foi ${maior}</p>
                      <p>Somando todos os valores, temos ${soma}</p>
                      <p>A média dos valores informados é ${soma / listaNum.length}</p>`
}