let num = [5, 8, 4]
num[3] = 6
num.push(7)
num.sort() // coloca o vetor/array em ordem crescente 

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor/elemento do vetor é ${num[0]}`)

let pos = num.indexOf(2)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
console.log(`O valor 8 está na posição ${pos}`)
}