// fantasia, aventura, ficção científica, terror, romance, comédia, thriller

// A Viagem de Chihiro, LIVRE, fantasia, aventura

// Não! Não Olhe!, 14, ficção científica, terror
// Princesa Mononoke, 12, fantasia, aventura
// 10 Coisas que Eu Odeio em Você, 12, romance, comédia 
// Interestelar, 10, ficção científica, aventura
// A Chegada, 10, ficção científica, thriller

let campoIdade;

function setup(){
  createCanvas(600, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput();
  campoFantasia = createCheckbox("Gosta de Fantasia ?");
  campoThriller = createCheckbox("Gosta de Thriller ?");
}

function draw() {
  background(0);
  let idade = campoIdade. value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDethriller = campoThriller.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDethriller);  
   
   textStyle(BOLDITALIC);
  fill( 200,230,250);
  textAlign(CENTER, CENTER);
    textSize(35);
    text( recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeThriller) {
    if(idade >= 10) {
        if(idade >= 14) {
            return "Não! Não Olhe!";
        } else {
          if(idade >= 12){
            if(gostaDeFantasia){
              return 'Princesa Mononoke';
            } else {
              return '10 Coisas Que Eu Odeio Em Você';
            }
          } else {
            if(gostaDeThriller){
              return 'A Chegada';
            } else {
              return 'Interestelar';
            }
          }
        }
    } else {
        return "A viagem de Chihiro";
    }
}

