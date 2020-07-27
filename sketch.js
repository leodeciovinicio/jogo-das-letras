let img
var tela = 0; 

function preload(){
  img = loadImage('play..png');
  img2 = loadImage('introduçao.png');
  img3 = loadImage('creditos.png');
  img4 = loadImage('fundo do menu.png');
}


function setup() { 
  createCanvas(800, 600); 
} 


function draw() { 
  cursor(HAND);
  textStyle(NORMAL);
  if(tela == 0) 
   menu(); 
  if(tela == 1)  
    fase1();
  if(tela == 2) 
    INSTRUÇÕES(); 
  if(tela == 3) 
    CREDITOS(); 
} 


function menu() { 
  background(img4, [800,600]);
  
  if ( mouseX > 340 && mouseX < 300 + 150 && mouseY > 310 && mouseY < 310 + 150 ) {
  fill(240);
  noStroke();
    if (mouseIsPressed) {
    tela = 1;
    }
  
  }
  
  image(img, 340, 300, 150, 150);
    
  if ( mouseX > 500 && mouseX < 500 + 230 && mouseY > 510 && mouseY < 510 + 55 ) {
  fill(240)
  noStroke()
    if (mouseIsPressed) {
    tela = 2;
    }
  }
  image(img2, 500, 510, 230, 55); 
  

  
  if ( mouseX > 50 && mouseX < 50 + 230 && mouseY > 510 && mouseY < 510 + 55 ) {
  fill(240)
  noStroke()
    if (mouseIsPressed) {
    tela = 3;
    }
  }
  image(img3, 50, 510, 230, 55); 
  
} 
  
function fase1 () { 
  console.log("entrou na fase 1")
    window.alfabeto();
} 
function INSTRUÇÕES () { 
  background(0);
   textSize(32); 
  text("JOGO DAS LETRAS", 90, 130); 
  textSize(25); 
  text("É indicado para qualquer pessoa que esteja em processo de\nalfabetização. Ele desenvolve a capacidade de reconhecer as\nletras do alfabeto, de forma lúdica formando palavras do seu\nrepertório sugeridas pelo alfabetizador. ", 90, 200);
  
} 
function CREDITOS () {
  background(0);
   textSize(32); 
  text("Leodécio Vinício Gomes Mendonça", 90, 130); 
  textSize(25); 
  text("Matrícula: 20190070254", 90, 160); 
  textSize(32);
  text("Vânia Gomes da Silva", 90, 430);
} 
