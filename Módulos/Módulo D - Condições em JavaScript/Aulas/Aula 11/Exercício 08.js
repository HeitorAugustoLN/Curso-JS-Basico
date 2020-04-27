console.log('O JavaScript foi Iniciado'); // Mostra que o JavaScript foi iniciado
var velocidade = 70.25; // Define a velocidade do "carro"

console.log(`A velocidade do seu carro é de ${velocidade}km/h`); // Mostrará a velocidade do carro
/*
Vê se a velocidade do carro passou o limite de velocidade
e se tiver passado o motorista será multado
*/
//Se a velocidade for maior do que 75km/h
if (velocidade > 75.0) {
	console.log(`Você ultrapassou o limite de velocidade! Você será multado.`); // Mostrará que o motorista foi multado
} else {
	// Caso contrário, mostrará a velocidade em que o motorista passou no radar de velocidade e avisa para não ultrapassar 75km/h
	console.log(`Você passou no radar de velocidade a ${velocidade}km/h, não ultrapasse 75km/h!`);
}
