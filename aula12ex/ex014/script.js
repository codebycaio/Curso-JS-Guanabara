function carregar() {
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')
    let data = new Date()
    let hora = data.getHours()
    //let hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'morning.png'
        document.body.style.background = '#cf9f57'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'afternoon.png'
        document.body.style.background = '#c7744d'
    } else {
        // BOA NOITE!
        img.src = 'night.png'
        document.body.style.background = '#0b1920'
    }
}
