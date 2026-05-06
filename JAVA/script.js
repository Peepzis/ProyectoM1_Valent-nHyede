//verificar que el botón funciona y obtengo el valor del select, y se lo paso al generarCajas
let boton = document.getElementById("btnCambio");
const cantidadPaletas = document.getElementById("cantPaletas");
const toast = document.querySelector(".toast") //Busco el toast en el CSS
console.log(toast);
boton.addEventListener("click", function() {
    console.log(cantidadPaletas.value);
    document.querySelector(".caja").innerHTML = ""; //limpio la caja antes de generar las nuevas cajas
    generarCajas(cantidadPaletas.value); //en esta parte llamo a la función generarCajas y le paso el valor del select para que genere la cantidad de cajas correspondientes
    toast.style.opacity="1"; //Muestra el toast
    setTimeout(function(){toast.style.opacity="0"},3000); //Hace desaparecer el toast 
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
    nuevaCaja.style.backgroundColor = color;
    caja.appendChild(nuevaCaja);
  }

}

//generar HSL aleatorio
function generarHSL() {
// genera numeros aleatorios para el tono, saturación y luminosidad (hsl)
console.log("Generando valores HSL aleatorios...");
const hue = Math.floor(Math.random() * 360);
console.log("Hue:", hue);
const saturation = Math.floor(Math.random() * 100);
console.log("Saturation:", saturation);
const lightness = Math.floor(Math.random() * 100);
console.log("Lightness:", lightness);

return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}