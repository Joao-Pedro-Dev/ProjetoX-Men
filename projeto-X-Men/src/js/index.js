const personagens = document.querySelectorAll('.perosnagem');
personagens.forEach(personagem => {
    personagem.addEventListener('mouseeter',() => {
        
        if(window.innerWidth < 450){
            window.scrollTo({top:0,behavior:'smooth'})
        }

        removerSelecaoDoPersonagem();
        
        personagem.classList.add('selecionado');

        alterarImagemPersonagemSelecionado(personagem);

        alterarNomePersonagemSelecionado(personagem);

        alterarDescricaoPersonagem(personagem);
    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPeronagem = document.getElementById('descricao-personagem');
    descricaoPeronagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = doc.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
