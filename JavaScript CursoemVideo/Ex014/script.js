function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var msg2 = document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) { 
        img.src = 'fotomanha.png'
        document.body.style.background = '#EBDBCB'
        msg2.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = '#BF9E2B'
        img.src = 'fototarde.png'
        msg2.innerHTML = 'Boa tarde!'
    } else {
        document.body.style.background = '#5F7078'
        img.src = 'fotonoite.png'
        msg2.innerHTML = 'Boa noite'
    }
}