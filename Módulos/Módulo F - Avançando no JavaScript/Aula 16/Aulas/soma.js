function somar(valor1, valor2) {
    const resultado = valor1 + valor2
    console.log(`O resultado da soma é ${resultado}!`)

    if (resultado % 2 === 0) {
        console.log(`O resultado da soma é par!`)
    } else {
        console.log(`O resultado da soma é impar!`)
    }
}

somar(1, 1)