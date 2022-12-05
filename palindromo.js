function verificaPalindromo() {
    palavra = document.getElementById('palindromo').value
    dividePalavra = palavra.split('');
    palavraInvertida = (dividePalavra.reverse().join(''));


    if (palavra == palavraInvertida) {
        document.write(`a palavra ${palavra}, é um palindromo`)
        console.log(`Verificado com successo!`)
    }
    else {
        document.write('não é palindromo')
        console.log('Verificado com successo!')
    }
    console.log('sucesso')

}
