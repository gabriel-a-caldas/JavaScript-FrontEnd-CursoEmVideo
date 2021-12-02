function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                // Criança
                img.setAttribute('src', 'images/boy.png')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src', 'images/teenager-boy.png')
            }else if(idade < 60){
               // adulto
               img.setAttribute('src', 'images/man.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'images/old-man.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                // Criança
                img.setAttribute('src', 'images/girl.png')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src', 'images/teenager-girl.png')
            }else if(idade < 60){
               // adulto
               img.setAttribute('src', 'images/woman.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'images/old-woman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
    }
}