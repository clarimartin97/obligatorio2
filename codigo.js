
const TOTAL_ADOPTADOS = 5670
const TOTAL_DONADO = 8390
const TOTAL_PADRINOS = 3256


let contadorTotalAdoptados = 0
let contadorTotalDonado = 0
let contadorTotalPadrinos = 0


setInterval(reloj, 1000)
let intervalTotalAdoptados = setInterval(animacionTotalAdoptados, 1)
let intervalTotalDonaciones = setInterval(animacionTotalDonado, 1)
let intervalTotalPadrinos = setInterval(animacionTotalPadrinos, 1)


function reloj() {

    let fecha = new Date();

    let horas = fecha.getHours();
    horas = agregarCero(horas);
    let minutos = fecha.getMinutes();
    minutos = agregarCero(minutos);

    let segundos = fecha.getSeconds();
    segundos = agregarCero(segundos);
    let textoHora = `${horas}:${minutos}:${segundos}`;

    document.querySelector("h1").innerHTML = textoHora;
}

function agregarCero(_dato) {
    if (_dato < 10) {
        _dato = "0" + _dato;
    }
    return _dato;
}

function animacionTotalAdoptados() {
    contadorTotalAdoptados += 40;
    if (contadorTotalAdoptados >= TOTAL_ADOPTADOS) {
        contadorTotalAdoptados = TOTAL_ADOPTADOS
        clearInterval(intervalTotalAdoptados)
    }
    document.querySelector('#adop').innerHTML = contadorTotalAdoptados;
}
function animacionTotalDonado() {
    contadorTotalDonado += 50;
    if (contadorTotalDonado >= TOTAL_DONADO) {
        contadorTotalDonado = TOTAL_DONADO
        clearInterval(intervalTotalDonaciones)
    }
    document.querySelector('#dona').innerHTML = `USD ${contadorTotalDonado}`;
}
function animacionTotalPadrinos() {
    contadorTotalPadrinos += 30;
    if (contadorTotalPadrinos >= TOTAL_PADRINOS) {
        contadorTotalPadrinos = TOTAL_PADRINOS
        clearInterval(intervalTotalPadrinos)
    }
    document.querySelector('#fam').innerHTML = contadorTotalPadrinos;
}

