function contar() {
    let txti = document.querySelector('#txtini')
    let txtf = document.querySelector('#txtfim')
    let txtp = document.querySelector('#txtpas')
    let res = document.querySelector('#res')
    
    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        return
    }

    let i = Number(txti.value)
    let f = Number(txtf.value)
    let p = Number(txtp.value)

    if (p <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }

    res.innerHTML = 'Contando: <br>'
    if (i < f) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c}`
            if (c + p <= f) {
                res.innerHTML += '👉'
            }
        }
    } else {
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c}`
            if (c - p >= f) {
                res.innerHTML += '👉'
            }
        }
    } res.innerHTML += `🏁`
}