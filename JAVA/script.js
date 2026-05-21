let boton = document.getElementById("btnCambio");
const cantidadPaletas = document.getElementById("cantPaletas");
const toast = document.querySelector(".toast"); // Selecciona el elemento del toast
const tipoCodigo = document.getElementById("tipoCodigo");
const caja = document.querySelector(".caja");

boton.addEventListener("click", function () {
  caja.innerHTML = "";
  generarCajas(cantidadPaletas.value);
  toast.style.opacity = "1";
  setTimeout(function () {
    toast.style.opacity = "0"; // Oculta el toast después de 3 segundos
  }, 3000);
});

tipoCodigo.addEventListener("change", function () {
  actualizarTextos(); // Actualiza los textos de las paletas al cambiar el tipo de código
});

function generarCajas(numCajas) {
  for (let i = 0; i < numCajas; i++) {
    const nuevaCaja = document.createElement("div");
    nuevaCaja.classList.add("caja", "paleta");
    const color = generarHSL();
    nuevaCaja.style.backgroundColor = color.css;
    nuevaCaja.dataset.h = color.h;
    nuevaCaja.dataset.s = color.s;
    nuevaCaja.dataset.l = color.l;

    const textCaja = document.createElement("div");
    textCaja.classList.add("textCaja");
    textCaja.innerHTML = getTexto(color.h, color.s, color.l);

    nuevaCaja.appendChild(textCaja);
    caja.appendChild(nuevaCaja);
  }
}
// Función para actualizar los textos de las paletas según el tipo de código seleccionado
function actualizarTextos() {
  document.querySelectorAll(".paleta").forEach(function (paleta) {
    const h = parseInt(paleta.dataset.h);
    const s = parseInt(paleta.dataset.s);
    const l = parseInt(paleta.dataset.l);
    paleta.querySelector(".textCaja").innerHTML = getTexto(h, s, l);
  });
}
// Función para obtener el texto a mostrar en la paleta según el tipo de código seleccionado
function getTexto(h, s, l) {
  const hex = hslToHex(h, s, l);
  if (tipoCodigo.value === "hex") {
    return `<p>HEX: ${hex}</p>`;
  } else {
    return `<p>HSL: (${h}, ${s}%, ${l}%)</p>`;
  }
}

function generarHSL() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 50) + 50;
  const lightness = Math.floor(Math.random() * 40) + 30;

  return {
    h: hue,
    s: saturation,
    l: lightness,
    css: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
  };
}
// Función para convertir HSL a HEX
function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;

  let r, g, b;

  if (0 <= h && h < 60)        { r = c; g = x; b = 0; }
  else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
  else if (120 <= h && h < 180){ r = 0; g = c; b = x; }
  else if (180 <= h && h < 240){ r = 0; g = x; b = c; }
  else if (240 <= h && h < 300){ r = x; g = 0; b = c; }
  else                          { r = c; g = 0; b = x; }

  const toHex = (v) => Math.round((v + m) * 255).toString(16).padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

window.addEventListener("DOMContentLoaded", function () {
  generarCajas(6);
});

window.addEventListener("DOMContentLoaded", function () {
  generarCajas(6);
});
