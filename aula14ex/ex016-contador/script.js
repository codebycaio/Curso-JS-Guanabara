function contar() {
    let txtini = document.querySelector('#txtini')
    let txtfim = document.querySelector('#txtfim')
    let txtpas = document.querySelector('#txtpas')
    let res = document.querySelector('#res') 
   
    if (txtini.value.length == 0 || txtfim.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        return
    }

    let i = Number(txtini.value)
    let f = Number(txtfim.value)
    let p = Number(txtpas.value)

    if (p <= 0) {
        // window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }

    res.innerHTML = 'Contando: <br>'
    if (i < f) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c}`
            if (c + p <= f) { // mostra o dedo SÓ SE ainda não for o último
                res.innerHTML+= '👉'
            }
        }
    } else {
        for (let c = i; c>= f; c -= p) {
            res.innerHTML += `${c}`
            if (c - p >= f) {
                res.innerHTML+= '👉'
            } 
        }
    } res.innerHTML += `🏁`
    
    setTimeout(function() {
        location.reload() // Isso recarrega a página inteira
    }, 30000)
}
 