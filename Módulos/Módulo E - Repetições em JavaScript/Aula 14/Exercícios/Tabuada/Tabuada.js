function gerarTabuada() {
	const número = document.getElementById('numero');
	const gerar = document.getElementById('gerar');
	const tabuada = document.getElementById('tabuada');

	if (número.value.length === 0) {
		alert('Número inválido!');
	} else {
		console.log()
		const n = Number(número.value);
		const g = Number(gerar.value);
		const t = Number(tabuada.value);

		tabuada.innerHTML = '';
		for (let c = 1; c <= 10; c++) {
			const item = document.createElement('option');
			item.text = `${n} x ${c} = ${n * c}`;
			tabuada.appendChild(item);
		}
	}
}
