//verificar que el botón funciona y obtengo el valor del select, y se lo paso al generarCajas
let boton = document.getElementById("btnCambio");
const cantidadPaletas = document.getElementById("cantPaletas");
const toast = document.querySelector(".toast"); //Busco el toast en el CSS
console.log(toast);
const tipoCodigo = document.getElementById("tipoCodigo"); //Busco el select para elegir el tipo de código a mostrar
boton.addEventListener("click", function () {
  console.log(cantidadPaletas.value);
  document.querySelector(".caja").innerHTML = ""; //limpio la caja antes de generar las nuevas cajas
  generarCajas(cantidadPaletas.value); //en esta parte llamo a la función generarCajas y le paso el valor del select para que genere la cantidad de cajas correspondientes
  toast.style.opacity = "1"; //Muestra el toast
  setTimeout(function () {
    toast.style.opacity = "0";}, 3000); //Hace desaparecer el toast
});
//Llamo a la caja para luego agregarle las paletas de colores, y genero un color HSL y luego le digo que cambie el fondo de la caja
const caja = document.querySelector(".caja");

// Obtener el valor seleccionado del select
let valor = cantidadPaletas.value;
console.log("Valor inicial seleccionado:", valor);

//generar paletas dependiendo del valor seleccionado en el select
function generarCajas(numCajas) {
  for (let i = 0; i < numCajas; i++) {
    const nuevaCaja = document.createElement("div");
    nuevaCaja.classList.add("caja");
    const color = generarHSL();
    nuevaCaja.style.backgroundColor = color.css;

    const textCaja = document.createElement("div");
    textCaja.classList.add("textCaja");
    const hex = hslToHex(color.h, color.s, color.l);

if (tipoCodigo.value === "hex") {
  textCaja.innerHTML = `<p>HEX: ${hex}</p>`;
}
else if (tipoCodigo.value === "hsl") {
  textCaja.innerHTML = `<p>${color.texto}</p>`;
}
else {
  textCaja.innerHTML = `
    <p>HEX: ${hex}</p>
    <p>${color.texto}</p>
  `;
}
    nuevaCaja.appendChild(textCaja);
    caja.appendChild(nuevaCaja);
  }
}

//generar HSL aleatorio
function generarHSL() {
  // genera numeros aleatorios para el tono, saturación y luminosidad (hsl)
  console.log("Generando valores HSL aleatorios...");
  const hue = Math.floor(Math.random() * 360);
  console.log("Hue:", hue);
  const saturation = Math.floor(Math.random() * 50) + 50; // Saturación entre 50% y 100%
  console.log("Saturation:", saturation);
  const lightness = Math.floor(Math.random() * 40) + 30; // Luminosidad entre 30% y 70%
  console.log("Lightness:", lightness);

  return {
    h: hue,
    s: saturation,
    l: lightness,
    css: `hsl(${hue}, ${saturation}%, ${lightness}%)` , // Devuelve el color en formato CSS HSL
    texto: `HSL: (${hue}, ${saturation}%, ${lightness}%)` // Devuelve el texto con el valor HSL para mostrar en la caja
  };
}
// Función para convertir HSL a HEX conseguida en internet y adaptada a mi código con ChatGPT
function hslToHex(h, s, l) {
  // Obtengo el color HSL generado
  s /= 100;
  l /= 100;

  console.log("HSL:", h, s, l);

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;

  let r, g, b;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else {
    r = c; g = 0; b = x;
  }

  // Convert RGB to HEX
  const toHex = (v) => {
    const hex = Math.round((v + m) * 255).toString(16);
    return hex.padStart(2, "0");
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
// Llamo a la función generarCajas al cargar la página para mostrar las cajas iniciales
window.addEventListener("DOMContentLoaded", function () {
  generarCajas(6);
});