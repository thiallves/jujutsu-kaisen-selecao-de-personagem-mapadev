/*Logica do projeto */

const personagens = document.querySelectorAll('.personagem')

/* Objetivo 1: quando passar o mouse pelo personagem tenho que:
 - colocar a classe selecionado no personagem que o mouse estiver em cima para adicionar a animação*/

/*- reitrar a classe selecionada do personagem anterior */

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'geto') return;
        
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        /* Objetivo 2: trocar a imagem e nome do personagem exibido(grande) quando o mouse passar por cima

 - alterar a imagem do personagem grande do jogador 1
 - alterar o nome do personagem grande do jogador 1 */

 const imagemJogador1 = document.getElementById('personagem-jogador-1');
 imagemJogador1.src = `src/imagens/${idSelecionado}.png`;

 const nomeJogador1 = document.getElementById('nome-jogador-1');

const nomeSelecionado = personagem.getAttribute('data-name');

nomeJogador1.innerHTML = nomeSelecionado
 
    })
})

