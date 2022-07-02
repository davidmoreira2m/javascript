function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') 
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                //criança
               img.setAttribute('src', 'fotocrincam.png') 
            } else if (idade < 18) {
                //Jovem
                img.setAttribute('src', 'fotojovemm.png') 
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'fotoadultom.png') 
            } else {
                //Idoso
                img.setAttribute('src', 'fotoidosom.png') 
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 10) { 
                //criança
                img.setAttribute('src', 'fotocrincaf.png') 
            } else if (idade < 18) {
                //Jovem
                img.setAttribute('src', 'fotojovemf.png') 
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'fotoadultof.png') 
            } else {
                //Idoso
                img.setAttribute('src', 'fotoidosof.png') 
            }
        }
    //res.style.textAlign = 'center'
    res.innerHTML = `Detectamos idade: ${idade} e gênero: ${genero}`
    res.appendChild(img)
    }

}