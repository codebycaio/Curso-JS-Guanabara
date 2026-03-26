let amor = {nome: 'Maria E.',
sexo: 'F',
peso: 58.2,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amor.engordar(2)
console.log(`${amor.nome} pesa ${amor.peso}Kg`)