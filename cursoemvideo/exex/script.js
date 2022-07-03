let nomeNave = prompt('Informe o nome da nave')
let velocidade = 0

function menuFunc (){
        let menu = prompt('Escolha uma opção:\n\n1 - Acelerar a nave 5km/s\n2 -Desacelerar a nave 5km/s\n3 -Imprimir informações.\n4 - Sair')
        switch(menu) {
            case '1':
                acelerar()
                break
            case '2':
                desacelerar()
                break
            case '3':
                informacoes()
                break
            case '4':
                alert('Encerrando a navegação')
                break
            default:
                alert('Opção Inválida, informe novamente!')
                menuFunc()
        }
}

function acelerar() {
    alert('Acelerando a nave!')
    velocidade += 5
    menuFunc()
}

function desacelerar(){
    alert('Desacelerando a nave!')
    velocidade -= 5
    menuFunc()
}

function informacoes(){
    alert('A nave ' + nomeNave + ' está a ' + velocidade + ' km/s')
    menuFunc()
}

menuFunc()