function palavraPalindromo() {
    let palavraDigitada = document.getElementById('palavra').value;
    if (palavraDigitada.includes(' ')) {
        alert('Por favor, digite apenas uma palavra, sem espaços.')

        return;
    }
    let palavra = palavraDigitada.toLowerCase().replace(/\s/g, "");
    let separandoAsLetras = palavraDigitada.split("");
    let palavraInvertida = separandoAsLetras.reverse().join("");
    let resultado = document.getElementById('resultado');

    if (palavra === "" || !isNaN(palavra) ) {
        alert("Por favor, digite uma palavra válida!")

        return;
    }

    if(palavra === palavraInvertida) {
        resultado.innerHTML = `
        A palavra <span class="palavra__digitada">${palavraDigitada}</span> alterou-se para <span class="palavra__palindromo">${palavraInvertida}</span> e portanto é um Palíndromo.`
    } else {
        resultado.innerHTML = `A palavra <span class="palavra__digitada">${palavraDigitada}</span> alterou-se para <span class="palavra__nao__palindromo">${palavraInvertida} </span>e portanto não é um Palíndromo.`
    }
}