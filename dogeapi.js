'use strict';

async function pesquisarFotos(raca){
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const dados = await response.json()
    return dados.message
}

async function criaImagem(link){
 
    const novaImg = document.createElement('img')

    novaImg.src = link
    galeria.appendChild(novaImg)
}

async function preencherFotos() {
    const raca = document.getElementById('raca').value
    const fotos = await pesquisarFotos(raca)
    const galeria = document.getElementById('galeria')

    galeria.replaceChildren('')
    fotos.forEach(criaImagem)
    
}

document.getElementById('pesquisar').addEventListener('click', preencherFotos);
