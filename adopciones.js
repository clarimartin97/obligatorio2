
let selectRaza = document.querySelector("#raza")
let selectUbicacion = document.querySelector("#ubicacion")
// let checkboxEdad = document.querySelector("#")
let selectVacunas = document.querySelector("#vacunas")
// let radioDesparasitado = document.querySelector("#")

selectRaza.addEventListener("change", filtrarPorRaza)
selectUbicacion.addEventListener("change", filtrarPorUbicacion)


mostrarPerritos(perritos)
cargarSelectRazas()
cargarSelectUbicaciones()


function mostrarPerritos(arrayPerritos) {
    ocultarDivs()
    for (let i = 0; i <= arrayPerritos.length - 1; i++) {
        let foto = arrayPerritos[i].url;
        document.querySelector(`#dog${i + 1} >img `).src = foto;
        document.querySelector(`#dog${i + 1} `).style.display = "block" 
    }
}

function ocultarDivs() {
    for (let i = 0; i <= 10; i++) {        
        document.querySelector(`#dog${i + 1} `).style.display = "none"             
    }
}

function cargarSelectRazas() {
    for (let i = 0; i <= razas.length - 1; i++) {
        selectRaza.innerHTML += `
        <option value="${razas[i]}">${razas[i]}</option>`
    }
}

function cargarSelectUbicaciones() {
    for (let i = 0; i <= ubicaciones.length - 1; i++) {
        selectUbicacion.innerHTML += `
        <option value="${ubicaciones[i]}">${ubicaciones[i]}</option>`
    }
}

function filtrarPorRaza() {
    let arrayFiltroRaza = [];

    let razaElegida = selectRaza.value;

    for (let i = 0; i <= perritos.length - 1; i++) {
        // Si el perrito es de la raza elegida, si se eligio "todos" o se eligio "sin raza" y el perrito tiene raza null lo agrego al array
        if(perritos[i].raza === razaElegida || razaElegida === "todos" || (razaElegida === "Sin Raza" && perritos[i].raza === null)){
            arrayFiltroRaza.push(perritos[i])
        }
    }

    if(arrayFiltroRaza.length > 0) {
        mostrarPerritos(arrayFiltroRaza)
    }
    console.log(arrayFiltroRaza)
}

function filtrarPorUbicacion() {
    let arrayFiltroUbicacion = [];

    let ubicacionElegida = selectUbicacion.value;

    for (let i = 0; i <= perritos.length - 1; i++) {

        if(perritos[i].ubicacion === ubicacionElegida || ubicacionElegida === "todos" ){

            arrayFiltroUbicacion.push(perritos[i])
        
        }
    }
    if(arrayFiltroUbicacion.length > 0) {
        mostrarPerritos(arrayFiltroUbicacion)
    }
    console.log(arrayFiltroUbicacion)
}