const numero = document.getElementById('inputnumero');
const lista = document.getElementById('selectnumero');
const resultado = document.getElementById('resultado');
let valores = [];

function isNumber(valor) {
	if (Number(valor) >= 1 && Number(valor) <= 100) {
		return true;
	} else {
		return false;
	}
}

function inList(valor, lista) {
	if (lista.indexOf(Number(valor)) != -1) {
		return true;
	} else {
		return false;
	}
}

function adicionar() {
	if (isNumber(numero.value) && !inList(numero.value, valores)) {
		const valor = document.createElement('option'); // Cria um elemento
		/* ---------------------------------------------------------------------------------------------------------- */
		valores.push(Number(numero.value)); // Adiciona valores ao array
		console.log(`Valor ${Number(numero.value)} adicionado!`); // Manda um sinal ao console que o valor foi adicionado
		/* ---------------------------------------------------------------------------------------------------------- */
		valor.text = `Valor ${numero.value} adicionado!`; // O texto do elemento será o valor
		lista.appendChild(valor); // Chamará o elemento para "lista"
	} else {
		alert('O valor já foi inserido ou ultrapassou o limite, tente novamente');
	}
	numero.value = '';
	numero.focus();
}

function finalizar() {
	if (valores.length === 0) {
		alert('Adicione valores antes de finalizar!');
	} else {
		let quantidade = valores.length;
		let maior = valores[0];
		let menor = valores[0];
		let soma = 0;
		let media = 0;
		/* ---------------------------------- */
		for (let pos in valores) {
			soma += valores[pos];
			if (valores[pos] > maior) {
				maior = valores[pos];
			} else if (valores[pos] < menor) {
				menor = valores[pos];
			}
		}
		media = soma / quantidade;
		/* ----------------------------------------------------------------------------- */
		resultado.innerHTML = '';
		resultado.innerHTML += `<p>No total, temos ${quantidade} de numeros cadastrados</p>`;
		resultado.innerHTML += `<p>O maior valor obtido foi ${maior}</p>`;
		resultado.innerHTML += `<p>O menor valor obtido foi ${menor}</p>`;
		resultado.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`;
		resultado.innerHTML += `<p>A média de todos os valores é ${media}</p>`;
	}
}
