palavraPalindromo();

function palavraPalindromo() {
    let palavra = prompt("Digite a palavra:");
    let separandoAsLetras = palavra.split(""); // .split vai separar as palavras, para fazer a verificação em seguida.
    let palavraInvertida = separandoAsLetras.reverse(); //.reverse vai inverter a palavra depois que ela foi separada.
    palavraInvertida = palavraInvertida.join(""); // .join vai juntar as palavras depois que foi separada e invertida.

        if(!palavra){ //!palavra verifica se é uma string vazia ou undefined.
            alert("Por favor, digite uma palavra.");
        } else if(/[^a-zA-Z]/.test(palavra)) { // /[^a-zA-Z]/ vai permitir ao usuário digitar apenas palavras, o .test(palavra) vai retornar true caso haja números/caracteres especiais.
            alert("Por favor, digite apenas palavras.");
        } else if(palavra == palavraInvertida) {
            alert(`A palavra ${palavra} é um Palíndromo.`);
        } else {
            alert(`A palavra ${palavra} não é um Palíndromo.`);
        }
}