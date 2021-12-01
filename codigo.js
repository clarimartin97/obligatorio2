
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

mostrarArticulos()

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

function mostrarArticulos() {
    for (let i = 0; i <= articulos.length - 1; i++) {
        let titulo = articulos[i].titulo
        let autor = `${articulos[i].autor.nombre} ${articulos[i].autor.apellido}`;
        let texto = articulos[i].texto;
        let fecha = articulos[i].fecha;
        let foto = articulos[i].foto


        if (i < 6) {
            document.querySelector(`#box${i + 1} > .botlef > h4`).innerHTML = titulo;
            document.querySelector(`#box${i + 1} > .botlef > p`).innerHTML = autor;
            document.querySelector(`#box${i + 1}`).style.backgroundImage = `url(${foto})`
            document.querySelector(`#box${i + 1} > .botlef > a`).addEventListener("click", ampliarInfoArticulo.bind(null, i));
/* preguntar por binddddddddddddddddddd */
/* en el bind siempre primero es null y dsps el parametro q quieras */
        }

        else {
            document.querySelector(`#box${i + 1} > img`).src = foto
            document.querySelector(`#box${i + 1} > h5`).innerHTML = fecha
            document.querySelector(`#box${i + 1} > h4`).innerHTML = titulo
            document.querySelector(`#box${i + 1} > p`).innerHTML = texto
            document.querySelector(`#box${i + 1} > a`).innerHTML = autor
        }
    }
}



function ampliarInfoArticulo(pos){
    document.querySelector("#ampliacion").style.display="block";
    document.querySelector("#cerrar").addEventListener("click",cerrarModal);

    let ampliacion=articulos[pos];

    document.querySelector(".modal-articulo").innerHTML=
    `<h1>${ampliacion.titulo}</h1>
    <p>${ampliacion.autor.nombre} ${ampliacion.autor.apellido} - ${ampliacion.fecha}</p>
    <img src="${ampliacion.foto}" class="modal-img"></img>
    <p>${ampliacion.texto}</p>`    
}

function cerrarModal() {
    document.querySelector("#ampliacion").style.display="none";
}