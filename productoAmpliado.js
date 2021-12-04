let perrito = obtenerPerrito();
let arrayImagenes = ["familias/familia1.jpg", "familias/familia2.jpg", "familias/familia3.jpg", "familias/familia4.jpg", "familias/familia5.jpg", "familias/familia6.jpg", "familias/familia7.jpg", "familias/familia8.jpg",]
let imagen1 = document.querySelector("#imagenSlider1");
let imagen2 = document.querySelector("#imagenSlider2");
let imagen3 = document.querySelector("#imagenSlider3");
let imagen4 = document.querySelector("#imagenSlider4");
let flechaAtras = document.querySelector("#flechaAtras");
let flechaAdelante = document.querySelector("#flechaAdelante");
let posicionPrimeraImagen = 2

flechaAtras.addEventListener("click", irAnteriorImg);
flechaAdelante.addEventListener("click", irSiguienteImg);
mostrarDatosPerrito();
mostrarRelacionados();

function obtenerPerrito() {
    let id = location.search.split('?id=')[1];
    id = parseInt(id);
    for (let i = 0; i <= perritos.length - 1; i++) {
        if (perritos[i].id === id) {
            return perritos[i];
        }
    }
}

function mostrarDatosPerrito() {
    document.querySelector("#fotogrande").src = perrito.url;
    document.querySelector("#fotochica1").src = perrito.url;
    document.querySelector("#fotochica2").src = perrito.url;
    document.querySelector("#fotochica3").src = perrito.url;

    document.querySelector("h3").innerHTML = perrito.nombre;
    document.querySelector("p").innerHTML = perrito.comentario;

}

function mostrarRelacionados() {
    let posicionPerrito1 = obtenerPosicionRandomPerrito();
    let posicionPerrito2 = obtenerPosicionRandomPerrito();
    let posicionPerrito3 = obtenerPosicionRandomPerrito();

    let perrito1 = perritos[posicionPerrito1]
    let perrito2 = perritos[posicionPerrito2]
    let perrito3 = perritos[posicionPerrito3]

    document.querySelector("#relacionado1").href = `productoAmpliado.html?id=${perrito1.id}`
    document.querySelector("#relacionado2").href = `productoAmpliado.html?id=${perrito2.id}`
    document.querySelector("#relacionado3").href = `productoAmpliado.html?id=${perrito3.id}`

    document.querySelector("#relacionado1>img").src = perrito1.url
    document.querySelector("#relacionado2>img").src = perrito2.url
    document.querySelector("#relacionado3>img").src = perrito3.url
}

function obtenerPosicionRandomPerrito() {
    return Math.floor(Math.random() * (perritos.length - 1));
}


function irSiguienteImg() {
    posicionPrimeraImagen--;  
    cambiarFotos()
    if (posicionPrimeraImagen > 0) {  
        flechaAtras.style.display = "block"     
    }
    else {
        flechaAdelante.style.display = "none"   
    }
}

function irAnteriorImg() {
    posicionPrimeraImagen++;
    cambiarFotos()
    if (posicionPrimeraImagen < arrayImagenes.length - 4) {
        flechaAdelante.style.display = "block" 
    }
    else {
        flechaAtras.style.display = "none"   
    }
}

function cambiarFotos() {
    imagen1.src = arrayImagenes[posicionPrimeraImagen]
    imagen2.src = arrayImagenes[posicionPrimeraImagen+1]
    imagen3.src = arrayImagenes[posicionPrimeraImagen+2]
    imagen4.src = arrayImagenes[posicionPrimeraImagen+3]
}