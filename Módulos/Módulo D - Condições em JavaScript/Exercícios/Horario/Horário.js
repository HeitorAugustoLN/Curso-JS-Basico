var $hours = document.getElementById('hours')
var hours = $hours;
var agora = new Date(); // Cria uma Data
var horas = agora.getHours(); // Puxa as horas do sistema
var image = document.getElementById('imagem')
var bom = document.getElementById('bom')

hours.innerHTML = `Agora são exatamente ${horas} horas.`
if (horas < 12) {
	image.src = './img/Dia.png'
	bom.innerHTML = 'Bom dia!'
} else if (horas <= 18) {
	image.src = './img/Tarde.png'
	bom.innerHTML = 'Boa tarde!'
} else {
	image.src = './img/Noite.png'
	bom.innerHTML = 'Boa noite!'
}