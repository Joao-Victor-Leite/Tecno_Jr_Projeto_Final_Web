//varáveis e constantes para a função pokeRandom
const botaoStart = document.querySelector("#startQuiz")
const botaoCmp = document.querySelector("#confirmQuiz")
var pokeId //variavel que receberá um id aleatório dentro do escopo selecionado

//variáveis e constantes parar a função compara
const userAnswer = document.querySelector("#userInput") //armazena a resposta do usuário
var pokeComp //variavel que armazena o nome do pokemon

/* TESTE PARA PEGAR OS VALORES DO SELECT 
var select = getElementById('genSelect')
var value = select.options[select.selectedIndex].value;
*/


/*  Função que:
        - gera um numero aleatório restringido a geração informada pelo usuário; (talvez fazer função pra isso)
        - usa esse numero na url da API para resgatar um pokemon no intervalo;
        - gera a imagem do pokemon na tela 
        - armazena o nome do pokemon selecionado na variável pokeComp;
    Não recebe parametros;
    É chamada através do botão de id "botaoStart";
*/
function pokeRandom(){
    pokeId = Math.floor(Math.random() * 905 + 1);
    let url = 'https://pokeapi.co/api/v2/pokemon/'+pokeId;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            //trabalhar os dados
            console.clear();
            //
            console.log(data);
            pokeComp = data['name'];
            userAnswer.value = "";
            document.getElementById("nome").innerHTML = data['name'];
            let img = data['sprites']['front_default'];
            document.getElementById("pokeImg").setAttribute('src', img);
            document.getElementById("numero").innerHTML = data['id'];
        })
        .catch((erro) => {
            console.log("Erro: "+ erro);
        });
}

/*  Função que confere o input do nome do pokemon inserido pelo usuário e o nome do pokemon vindo da API,    alertando ao usuário se sua tentativa foi bem sucedida ou não;
    Não recebe parametro;
    É chamada através do botão de id "botaoCmp";
*/ 
function compara(){
    if(userAnswer.value == pokeComp){
        alert(`Parabéns`);
    }else{
        alert(`Muito burro filho`);
    }
}

botaoStart.addEventListener("click", pokeRandom);
botaoCmp.addEventListener("click", compara);