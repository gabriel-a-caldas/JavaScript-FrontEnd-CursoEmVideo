function contar(){

    let inicioContagem = document.getElementById('txti')
    let fimContagem = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resultado = document.getElementById('res')

    if(inicioContagem.value.length == 0 || fimContagem.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = 'Impossível contar'
    }else{
        resultado.innerHTML = `<p>Contando: <br></p>`
        let ini = Number(inicioContagem.value)
        let fim = Number(fimContagem.value)
        let pas = Number(passo.value)
        
        if(pas == 0){
            window.alert('Passo inválido, considerando passo 1')
            pas = 1
        }

        if(ini < fim){
        // contagem crescente
        for(let aux = ini; aux <= fim; aux += pas){
                resultado.innerHTML += ` ${aux} \u{1F449}`
            }
        }else{
        // contagem decrescente
    
        for(let aux = ini; aux >= fim; aux -= pas){
             resultado.innerHTML += `${aux} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}