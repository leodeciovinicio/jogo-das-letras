let nome = ""
letras = [];
const constant = 80;
let quadrados = [];
let espacamento = 190;
let quadradoInitial = 50;
let acertos = 0;

for (i = 0; i < 26; i++) {
  const letraAtual = (i + 10).toString(36).toUpperCase();
  if (i === 0) {
    quadrados = [
      ...quadrados,
      {
        x: quadradoInitial,
        y: 190,
        T: 55,
        letra: letraAtual,
        hovered: false,
        jumping: 0,
      },
    ];
  } else {
    if (i % 9 !== 0) {
      quadrados = [
        ...quadrados,
        {
          x: quadrados[i - 1].x + constant,
          y: espacamento,
          T: 55,
          letra: letraAtual,
          hovered: false,
          jumping: 0,
        },
      ];
    } else {
      espacamento = 190 + (i / 9) * 70;
      quadrados = [
        ...quadrados,
        {
          x: quadradoInitial,
          y: espacamento,
          T: 55,
          letra: letraAtual,
          hovered: false,
          jumping: 0,
        },
      ];
    }
  }
}

const texts = [];
var start = null;

function mouseMoved() {
  quadrados = quadrados.map((quadrado) => {
    if (
      mouseX > quadrado.x &&
      mouseX < quadrado.x + quadrado.T &&
      mouseY > quadrado.y &&
      mouseY < quadrado.y + quadrado.T
    ) {
      quadrado.hovered = true;
      return quadrado;
    }
    quadrado.hovered = false;
    return quadrado;
  });
}

function mouseClicked() {
  if(nome === "") return
  quadrados.map((quadrado) => {
    if (
      mouseX > quadrado.x &&
      mouseX < quadrado.x + quadrado.T &&
      mouseY > quadrado.y &&
      mouseY < quadrado.y + quadrado.T
    ) {
      // condição se acertou a letra ou não:
      if (nome[acertos] === quadrado.letra) {
        acertos += 1;
        letras = [
          ...letras,
          { letra: quadrado.letra, x: quadrado.x, y: quadrado.y },
        ];
      } else {
        alert("desculpe você errou a letra, tente novamente");
      }
    }
  });
}

function rendertela() {
  background(200);
  let barras = [];
let initial = 50;
for (var i = 0; i <= nome.length - 1; i++) {
  barras = [
    ...barras,
    { x: initial, y: 450, T: quadrados[0].T, letra: nome[i] },
  ];
  initial = initial + 80;
}
  if(nome === ""){
  nome = window.prompt("digite uma palavra").toUpperCase();
  }
  textFont("Roboto");
  textSize(30);
  
  let c = color(150, 150, 150);
  let red = color(255, 121, 121);
  let black = color(50, 50, 50);
  let white = color(255, 255, 255);

  const altura = 190;
  quadrados.map((quadrado) => {
    strokeWeight(0);
    fill(c);
    if (!quadrado.hovered) {
      quadrado.jumping = 0;
      square(quadrado.x + 2, quadrado.y + 2, quadrado.T);
    } else {
      if (quadrado.jumping < 1) {
        quadrado.jumping += 0.15;
      }
    }

    const qt = {
      x: quadrado.x + quadrado.jumping,
      y: quadrado.y + quadrado.jumping,
    };
    fill(red);
    square(
      quadrado.x + quadrado.jumping,
      quadrado.y + quadrado.jumping,
      quadrado.T
    );
    fill(initial);
    strokeWeight(1);
    textAlign(CENTER, CENTER);
    fill(white);
    text(quadrado.letra, qt.x + 3, qt.y + quadrado.T / 1.8, quadrado.T);
    fill(black);
  });
  barras.map((barra) => {
    strokeWeight(2);
    stroke(c);
    line(barra.x, barra.y, barra.x + 55, barra.y);
    strokeWeight(1);
  });
  letras.map((letra, i) => {
    text(letra.letra, barras[i].x, barras[i].y - 14, 55);
  });
  setTimeout(() => {
    if (acertos === nome.length) {
      acertos = 0;
      alert("parabéns você ganhou");
    }
  }, 2000);
}

window.alfabeto = rendertela;