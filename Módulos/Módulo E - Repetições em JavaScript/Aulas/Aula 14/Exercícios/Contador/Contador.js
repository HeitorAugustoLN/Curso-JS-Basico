var documents = {
	inicio: document.getElementById('inicio'),
	fim: document.getElementById('fim'),
	passo: document.getElementById('passo'),
	contagem: document.getElementById('contagem')
};

var inicio = documents['inicio'];
var fim = documents['fim'];
var passo = documents['passo'];
var $contagem = documents['contagem'];

var funções = {
	verificar: function() {
		if (inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0) {
			alert('Dados inválidos!');
		} else {
			$contagem.innerHTML = 'Contando: ';
			var i = Number(inicio.value);
			var f = Number(fim.value);
			var p = Number(passo.value);

			for (var contagem = i; contagem <= f; contagem += p) {
				$contagem.innerHTML += `${contagem} \u{1F449}`;
			}
			$contagem.innerHTML += `\u{1F3C1}`;
		}
	}
};

var verificar = funções['verificar'];
