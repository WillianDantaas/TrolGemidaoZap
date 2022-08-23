// O QUE TU QUER?

document.addEventListener("DOMContentLoaded", () => {

    let conteudo = encodeURIComponent(document.title + " " + window.location.href);

    document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;

}, false);
// NÃO TEM NADA SALVANDO NO BANCO DE DADOS KKKKKK OTARIO
call = () => {
    let i = document.getElementById('wpp')
    let j = document.createElement('div')
    let ipt = document.querySelector('#ipt')
    let ipt2 = document.querySelector('#ipt2')

    if (ipt.value === '' || ipt2.value === '') {
        alert('Digite um telefone válido com DDD')
    } else {
        const audio = new Audio('audio.mp3')
        audio.loop = true
        audio.play()
    
    
        let message = document.createTextNode('PRA VOCÊ PARAR DE SER SEM VERGONHA E PROCURAR O QUE FAZER KKKK\n\nTROLE SEUS AMIGOS CLICANDO NO BOTÃO DE COMPARTILHAR NO ZAPP')
    
        j.appendChild(message)
        i.appendChild(j)
    }
}