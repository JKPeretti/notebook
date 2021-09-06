
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function(){

    let mySrc = minhaImagem.getAttribute('src');

    if(mySrc === 'imagens/code1.jpg'){
        minhaImagem.setAttribute('src','imagens/code2.jpg');

    } else {
        minhaImagem.setAttribute('src','imagens/code1.jpg');
    }
}