// me falta el checkbox de genero q me daba error
let selectRaza = document.querySelector("#raza")
let buscadorUbicacion = document.querySelector("#buscar")
// let checkboxEdad = document.querySelector("#")
let selectVacunas = document.querySelector("#vacunas")
// let radioDesparasitado = document.querySelector("#")

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
    //Array donde van a estar los perritos con el filtro
    let arrayFiltroVacuna = [];
    //String con la posicion de la vacuna en el array o "todos"
    let vacunaElegidaString = selectVacunas.value;
    //recorro todos los perritos
    for (let i = 0; i <= perritos.length - 1; i++) {
        //si se ingreso "todos" agrego el perrito sin importar las vacunas que tenga
        if (vacunaElegidaString === "todos" ){
            arrayFiltroVacuna.push(perritos[i])
        }
        //si no se ingreso "todos":
        else {
            //vacunaElegidaStr tiene la posicion de la vacuna que quiero en el array, pasamos eso a Int
            let vacunaElegidaInt = parseInt(vacunaElegidaString)
            //traemos la vacuna que se encuentra en la posicion
            let vacunaElegida = vacunas[vacunaElegidaInt]
            //recorro todas las vacunas que se dio el perrito
            for (let j = 0; j <= perritos[i].vacunas.length - 1; j++) {
                //si la vacuna que se dio el perrito tiene el mismo nombre que la vacunaElegida lo agrego al array del filtro
                if(perritos[i].vacunas[j].vacuna.nombre === vacunaElegida.nombre) {
                    arrayFiltroVacuna.push(perritos[i])
                }                    
            }
        }   
    }
    //si hay resultados muestro los perritos filtrados
    if(arrayFiltroVacuna.length > 0) {
        mostrarPerritos(arrayFiltroVacuna)
    }
    console.log(arrayFiltroVacuna)
}

