/*  ATUALIZAÇÕES A FAZER
    - fazer funcoes para reduzir as variaveis globias
    - renomear as variaveis
    - polir as funcoes
    - identar e lembrar de upar no github
    - IMPORTANTE: fazer uma função de restaurar os padroes das sprites
    - Fazer um contador de tentativas
    - (termo) mostrar as letras certas caso a pessoa erre
    - cor bonita: #1d2b3a
    */

//varáveis e constantes para a função pokeRandom
const botaoStart = document.querySelector("#startQuiz")
const botaoCmp = document.querySelector("#confirmQuiz")
const userAnswer = document.querySelector("#userInput") //armazena a resposta do usuário
var pokeComp

//Função funcionando
function switchGen(gen){
    gen = Number(gen); //transforma a string gen em número
    switch(gen){
        case 1:
            return Math.floor(Math.random() * 151 + 1);

        case 2:
            return Math.floor(Math.random() * 251 + 1);

        case 3:
            return Math.floor(Math.random() * 386 + 1);

        case 4:
            return Math.floor(Math.random() * 493 + 1);

        case 5:
            return Math.floor(Math.random() * 649 + 1);

        case 6:
            return Math.floor(Math.random() * 719 + 1);

        case 7:
            return Math.floor(Math.random() * 785 + 1);

        case 8:
            return Math.floor(Math.random() * 898 + 1);

        case 9:
            return Math.floor(Math.random() * 905 + 1);
        
        default:
            console.log("Deafult");
            return 1;
    }
}

function pokeRandom(){
    var select = document.getElementById('genSelect');
    var gen = select.options[select.selectedIndex].value;
    var pokeId = switchGen(gen); //variavel que receberá um id aleatório dentro do escopo selecionado
    let url = 'https://pokeapi.co/api/v2/pokemon/'+pokeId;
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        userAnswer.value = "";
        pokeComp = data['name']; //variavel que armazena o nome do pokemon
        //document.getElementById("nome").innerHTML = data['name']; //altera o h2 para o nome do pokemon
        let img = data['sprites']['front_default'];
        document.getElementById("pokeImg").classList.remove("brightNormal"); //remove o brightness normal do sprite
        document.getElementById("pokeImg").setAttribute('src', img);
        document.getElementById("numero").innerHTML = data['id'];

    })
    .catch((erro) => {
        console.log("Erro: "+ erro);
    });
}

function compara(){
    let img = document.getElementById('pokeImg');
    if(userAnswer.value == pokeComp){
        alert(`Parabéns`);
    }else{
        alert(`Muito burro filho`);
    }
    img.classList.toggle('brightNormal');

    //document.createElement();
}

botaoStart.addEventListener("click", pokeRandom);
botaoCmp.addEventListener("click", compara);