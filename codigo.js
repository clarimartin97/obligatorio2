let nombreYApellidoValidado = false;
let mailValidado = false;
let cedulaValidada = false;
let donarOAdoptarValidado = false;
let mascotasValidado = false;
let findUsValidado = false;
let tyaValidado = false;

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

mostrarArticulos();

document.querySelector("#e-mail").addEventListener("focusout", validarMail);
document.querySelector("#nya").addEventListener("focusout", validarNombreYApellido);
document.querySelector("#cedula").addEventListener("input", validarCedula);
document.querySelector("#mascotas").addEventListener("change", validarDonarOAdoptar);
document.querySelector(".tienesmascotas").addEventListener("change", validarMascotas);
document.querySelector("#encontraste").addEventListener("input", validarComoNosEncontraste); 
document.querySelector("#tya").addEventListener("change", validarTerminosYCondiciones);



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
            //box va de 1 a 11 entonces le agregamos 1 porque la posicion de un array empieza en 0
            document.querySelector(`#box${i + 1} > .botlef > h4`).innerHTML = titulo;
            document.querySelector(`#box${i + 1} > .botlef > p`).innerHTML = autor;
            document.querySelector(`#box${i + 1}`).style.backgroundImage = `url(${foto})`
            document.querySelector(`#box${i + 1} > .botlef > a`).addEventListener("click", ampliarInfoArticulo.bind(null, i));
         
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

function ampliarInfoArticulo(pos) {
    document.querySelector("#ampliacion").style.display = "block";
    document.querySelector("#cerrar").addEventListener("click", cerrarModal);

    let ampliacion = articulos[pos];

    document.querySelector(".modal-articulo").innerHTML =
        `<h1>${ampliacion.titulo}</h1>
    <p>${ampliacion.autor.nombre} ${ampliacion.autor.apellido} - ${ampliacion.fecha}</p>
    <img src="${ampliacion.foto}" class="modal-img"></img>
    <p>${ampliacion.texto}</p>`
}

function cerrarModal() {
    document.querySelector("#ampliacion").style.display = "none";
}


function validarNombreYApellido() {

nombreYApellidoValidado = false;

document.querySelector("#mensaje").textContent = "";
let nya = document.querySelector("#nya").value;

if (nya.length === 0) {
    document.querySelector("#mensaje").textContent = "Debes escribir tu nombre y apeliido";
}

else if (nya.split(" ").length <= 1) {
    document.querySelector("#mensaje").textContent = "Debes escribir un apellido";
}


else {
    document.querySelector("#mensaje").textContent = "";

    mailValidado = true;
    }
}

function validarMail() {
    mailValidado = false;
    document.querySelector("#mensaje").textContent = "";
    let email = document.querySelector("#e-mail").value;

    let posicionArroba = email.indexOf("@");
    let posicionPunto = email.indexOf(".", posicionArroba);

    if (email.length === 0) {
        document.querySelector("#mensaje").textContent = "Debes escribir tu mail";
    }

    else if (posicionArroba === -1) {
        document.querySelector("#mensaje").textContent = "su mail debe contener @";
    }

    else if (posicionArroba === 0) {
        document.querySelector("#mensaje").textContent = "su mail debe contener texto antes del @";
    }

    else if (email.charAt(posicionArroba + 1) === "" || email.charAt(posicionArroba + 1) === " ") {
        document.querySelector("#mensaje").textContent = "Debe tener texto despues del @";
    }

    else if (posicionPunto === -1) {
        document.querySelector("#mensaje").textContent = "su mail debe contener . despues del @";
    }

    else if (email.charAt(posicionPunto + 1) === "" || email.charAt(posicionPunto + 1) === " ") {
        document.querySelector("#mensaje").textContent = "su mail debe contener texto despues del .";
    }

    else {
        document.querySelector("#mensaje").textContent = "Su mail es correcto.";
        mailValidado = true;
    }
    console.log(mailValidado)
}

function validarCedula(){
    cedulaValidada=false;
    document.querySelector("#mensaje").textContent = "";
    let cedula = document.querySelector("#cedula").value;
    
    if (cedula.length === 0) {
        document.querySelector("#mensaje").textContent = "Debes escribir tu cédula";

    }
    else {
        cedulaValidada=true;
    }
    console.log(cedulaValidada)
}

function validarDonarOAdoptar(){
    donarOAdoptarValidado=true;
    console.log(donarOAdoptarValidado)
}

function validarMascotas(){
    mascotasValidado=true;
    console.log(mascotasValidado)
}

function validarTerminosYCondiciones(){
    tyaValidado=false;

    let tyaclickeado = document.querySelector("#tya").checked

    if(tyaclickeado === true){
        tyaValidado=true;
    }
    else {

        document.querySelector("#mensaje").textContent = "Debes aceptar los términos y condiciones";

    }
    console.log(tyaValidado)
}

function validarComoNosEncontraste(){

    findUsValidado=false;
    let comoNosEncontraste = document.querySelector("#encontraste").value;

    if(comoNosEncontraste.length === 0){

        document.querySelector("#mensaje").textContent = "Debes escribir una razon";
    }

    else{
    findUsValidado=true;
    }
    console.log(findUsValidado)

}