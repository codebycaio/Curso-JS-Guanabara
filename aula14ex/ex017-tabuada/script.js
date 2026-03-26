function tabuada() {
    const txtnum = document.querySelector('#txtnum')
    const tab = document.querySelector('#seltab')
    
    if (txtnum.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!')
        return
    }

    const num = Number(txtnum.value)
    let c = 1
    tab.innerHTML = '' // Limpar a Área, para que a tabuada não fique se amontoando uma embaixo da outra.

    while (c <= 10) {
        const line = document.createElement('option') // Isso cria uma tag <option> na memória do computador.
        line.text = `${num} x ${c} = ${num*c}`
        tab.appendChild(line) // Isso pega a opção que você criou e coloca ela dentro do seu <select id="seltab">.
        c++

        line.value = `tab${c}` // Isso dá uma identidade para cada linha (tab1, tab2...)
    }
}