
function contar() {
    var inicio = document.getElementById('txtinicio').value
    var fim = document.getElementById('txtfim').value
    var passo = document.getElementById('txtpasso').value
    var res = document.getElementById('res')

    if (inicio == '' || fim == '' || passo == '') {
        label.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        if (passo == '0'){
            alert('Passo 0 inválido, estados considerando passo 1')
            passo = 1
        }
        if (Number(inicio) < Number(fim)){
            for (var i = Number(inicio); i <= Number(fim); i = i + Number(passo)){
                 res.innerHTML += `${i} 👉`
            }
        } else {
            for (var i = Number(inicio); i >= Number(fim); i = i - Number(passo)){
                res.innerHTML += `${i} 👉` 
        }
        }
        res.innerHTML += '🏁' 
    }
}