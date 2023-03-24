const display = document.querySelector('.display__despues');
const botones = document.querySelectorAll('.botones button');

let valorDisplay = '0';
let valorAnterior = null;
let operacion = null;
let puntoDecimal = false;

function actualizarDisplay() {
  display.textContent = valorDisplay;
}

function borrarTodo() {
  valorDisplay = '0';
  valorAnterior = null;
  operacion = null;
  puntoDecimal = false;
}

function cambiarSigno() {
  valorDisplay = String(parseFloat(valorDisplay) * -1);
}

function calcularPorcentaje() {
  valorDisplay = String(parseFloat(valorDisplay) / 100);
}

function manejarOperacion(op) {
  const valorActual = parseFloat(valorDisplay);

  if (operacion === null) {
    valorAnterior = valorActual;
  } else {
    switch (operacion) {
      case '+':
        valorAnterior += valorActual;
        break;
      case '-':
        valorAnterior -= valorActual;
        break;
      case 'x':
        valorAnterior *= valorActual;
        break;
      case '/':
        valorAnterior /= valorActual;
        break;
    }
  }

  operacion = op;
  valorDisplay = '0';
}

function manejarNumero(numero) {
  if (valorDisplay === '0') {
    valorDisplay = numero;
  } else {
    valorDisplay += numero;
  }
}

function manejarPunto() {
  if (!puntoDecimal) {
    valorDisplay += '.';
    puntoDecimal = true;
  }
}

function resolver() {
  const valorActual = parseFloat(valorDisplay);

  if (operacion !== null) {
    switch (operacion) {
      case '+':
        valorDisplay = valorAnterior + valorActual;
        break;
      case '-':
        valorDisplay = valorAnterior - valorActual;
        break;
      case 'x':
        valorDisplay = valorAnterior * valorActual;
        break;
      case '/':
        valorDisplay = valorAnterior / valorActual;
        break;
    }
    operacion = null;
    puntoDecimal = false;
    valorAnterior = null;
  }
}

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    if (boton.classList.contains('numero')) {
      manejarNumero(boton.textContent);
      actualizarDisplay();
    } else if (boton.classList.contains('operacion')) {
      manejarOperacion(boton.textContent);
    } else if (boton.classList.contains('punto')) {
      manejarPunto();
      actualizarDisplay();
    } else if (boton.classList.contains('borrar-todo')) {
      borrarTodo();
      actualizarDisplay();
    } else if (boton.classList.contains('positivo-negativo')) {
      cambiarSigno();
      actualizarDisplay();
    } else if (boton.classList.contains('resolver')) {
      resolver();
      actualizarDisplay();
    } else if (boton.classList.contains('operacion')) {
      calcularPorcentaje();
      actualizarDisplay();
    }
  });
});
