let selectRaza = document.querySelector("#raza")
let buscadorUbicacion = document.querySelector("#buscar")
let selectVacunas = document.querySelector("#vacunas")

selectRaza.addEventListener("change", filtrarPorRaza)
buscadorUbicacion.addEventListener("input", buscadorPorUbicacion)
selectVacunas.addEventListener("change", filtrarPorVacunas)


mostrarPerritos(perritos)
cargarSelectRazas()
cargarSelectVacunas()


function mostrarPerritos(arrayPerritos) {
    ocultarDivs()
    for (let i = 0; i <= arrayPerritos.length - 1; i++) {
        let foto = arrayPerritos[i].url;
        document.querySelector(`#dog${i + 1}>img `).src = foto;
        document.querySelector(`#dog${i + 1} `).style.display = "block" 
        document.querySelector(`#dog${i + 1} `).href = `productoAmpliado.html?id=${perritos[i].id}`
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

function cargarSelectVacunas() {
    for (let i = 0; i <= vacunas.length - 1; i++) {
        selectVacunas.innerHTML += `
        <option value="${i}">${vacunas[i].nombre}</option>`
    }
}

function filtrarPorRaza() {
    let arrayFiltroRaza = [];

    let razaElegida = selectRaza.value;

    for (let i = 0; i <= perritos.length - 1; i++) {
        if(perritos[i].raza === razaElegida || razaElegida === "todos" || (razaElegida === "Sin Raza" && perritos[i].raza === null)){
            arrayFiltroRaza.push(perritos[i])
        }
    }

    if(arrayFiltroRaza.length > 0) {
        mostrarPerritos(arrayFiltroRaza)
    }
    console.log(arrayFiltroRaza)
}


function buscadorPorUbicacion(){
    let arrayBuscadorUbicacion = [];
    let buscar = document.querySelector("#buscar").value;
    for(let i=0; i<=perritos.length-1; i++){
        let ubicacionPerrito = perritos[i].ubicacion.toLowerCase()
        if(ubicacionPerrito.includes(buscar)){
            arrayBuscadorUbicacion.push(perritos[i]);
        }
    }
    if(arrayBuscadorUbicacion.length > 0) {
        mostrarPerritos(arrayBuscadorUbicacion)
    }
}
    
    


function filtrarPorVacunas() {
    let arrayFiltroVacuna = [];
    let vacunaElegidaString = selectVacunas.value;
    for (let i = 0; i <= perritos.length - 1; i++) {
        if (vacunaElegidaString === "todos" ){
            arrayFiltroVacuna.push(perritos[i])
        }
        else {
            let vacunaElegidaInt = parseInt(vacunaElegidaString)
            let vacunaElegida = vacunas[vacunaElegidaInt]
            for (let j = 0; j <= perritos[i].vacunas.length - 1; j++) {
                if(perritos[i].vacunas[j].vacuna.nombre === vacunaElegida.nombre) {
                    arrayFiltroVacuna.push(perritos[i])
                }                    
            }
        }   
    }
    if(arrayFiltroVacuna.length > 0) {
        mostrarPerritos(arrayFiltroVacuna)
    }
    console.log(arrayFiltroVacuna)
}

