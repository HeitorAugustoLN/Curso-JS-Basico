var agora = new Date(); // Cria uma Data
var horas = agora.getHours(); // Puxa as horas do sistema
var minutos = agora.getMinutes(); // Puxa os minutos do sistema
var segundos = agora.getSeconds();

console.log(`Agora são exatamente ${horas} horas e ${minutos} minutos e ${segundos} segundos`); // Mostra quantas horas são e quantos minutos

if (horas < 12) {
	// Se as horas forem abaixo de meio dia
	console.log('Bom dia!'); // Mostrará bom dia
} else if (horas <= 18) {
	// Se as horas forem menor ou igual a 18 horas
	console.log('Boa tarde!'); // Mostrará "Boa Tarde"
} else {
	// Caso contrario
	console.log('Boa noite!'); // Mostrará "Boa noite"
}
