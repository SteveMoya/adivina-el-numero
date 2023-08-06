const numeroRandom = Math.floor(Math.random() * 100) + 1;
let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intento = document.getElementById("intento");
let intentos = 0;


function comprobar() {
    intentos++;
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value);
    if (numeroIngresado < 1 ||  numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = '😡Por favor, introduce un numero valido😡';
        mensaje.style.color = 'whitesmoke';
        return
    } if (numeroIngresado === numeroRandom) {
        mensaje.textContent = '✅¡Has ganado!✅';
        mensaje.style.color = 'springgreen';
        numeroEntrada.disabled = true;
        return
    } if (numeroIngresado > numeroRandom) {
        mensaje.textContent = '⬇️El numero es menor⬇️';
        mensaje.style.color = 'red';
    } if (numeroIngresado < numeroRandom) {
        mensaje.textContent = '⬆️El numero es mayor⬆️';
        mensaje.style.color = 'red';
    }
}