function tabuada() {
    var numero = document.getElementById('txtnumero').value
    var selec = document.getElementById('txtselect')
    if (numero == ''){
        alert('Por favor digite um numero!')
    } else {
        selec.innerHTML = ''
        for (let i = 1; i <= 10; i++){
            var multiplicacao = Number(numero) * i
            var option = document.createElement("option")
            option.value = `tab ${i}`
            option.text = `${numero} x ${i} = ${multiplicacao}`
            selec.add (option)
        }
    }
}