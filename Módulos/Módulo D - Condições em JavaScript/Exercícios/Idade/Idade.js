function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var receiveInputText = document.getElementById('ano')
    var genm = document.getElementById('sexom')
    var genf = document.getElementById('sexof')
    var resultado = document.getElementById('resultado')


    if (receiveInputText.value.length === 0 || receiveInputText.value > ano) {
        alert('ERRO: Verifique o ano de nascimento e tente novamente')
    } else {
        var idade = ano - Number(receiveInputText.value)
        var genero = ''
        var imagem = document.getElementById('imagem')

        if (genm.checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                imagem.src = './img/foto-bebe-m.png'
            } else if (idade < 21) {
                imagem.src = './img/foto-jovem-m.png'
            } else if (idade >= 21 && idade < 50) {
                imagem.src = './img/foto-adulto-m.png'
            } else {
                imagem.src = './img/foto-idoso-m'
            }
        } else if (genf.checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                imagem.src = './img/foto-bebe-f.png'
            } else if (idade < 21) {
                imagem.src = './img/foto-jovem-f.png'
            } else if (idade >= 21 && idade < 50) {
                imagem.src = './img/foto-adulto-f.png'
            } else {
                imagem.src = './img/foto-idoso-f'
            }
        }

        resultado.innerHTML = `Detectamos um ${genero} com ${idade} anos`
    }
}