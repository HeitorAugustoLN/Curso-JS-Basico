function parimp(valor) {
    if (valor % 2 === 0) { // Se o resto da divisão inteira do valor por 2 for 0
        console.log(`O número ${valor} é par`) // Retornará que o valor é par
    } else { // Caso contrário
        console.log(`O número ${valor} é impar`) // Retornará que o valor é impar
    }
}

parimp(48) // Chama a função "parimp" com o valor 48