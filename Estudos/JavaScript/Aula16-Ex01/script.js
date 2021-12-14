function contar(){

    var inicioContagem = document.getElementById('txtbeg')
    var fimContagem = document.getElementById('txtend')
    var passo = document.getElementById('step')
    var res = document.getElementById('res')
   

    if(inicioContagem.value <= 0){
        res.innerHTML = `Impossível contar!`
    }else{
        if(inicioContagem.value > fimContagem.value){
            window.alert('Não estamos trabalhando com contagem reversa')
        }else if(passo.value == 0){
            window.alert('Não é possível fazer com passo 0, considerando PASSO 1')
        }else{
            
        }
    }
}