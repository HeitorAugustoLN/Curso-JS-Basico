var idade = 12; // Define a idade

console.log(`Você tem ${idade} anos de idade`);
if (idade < 16) {
	// Se a idade for menor que 16
	console.log('Você não vota'); // Não vota
} else if (idade < 18 || idade >= 65) {
	// Caso contrário, se a idade for entre 16 e 18 ou você tiver 65 anos ou mais
	console.log('Seu voto é opcional'); // Voto opcional
} else {
	// Caso contrário, se a idade for maior ou igual a 18
	console.log('Seu voto é obrigatório'); // Voto obrigatório
}
