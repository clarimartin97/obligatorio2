/// perritos

class Perrito {

    constructor(nombre, genero, raza, ubicacion, edad, comentario, vacunas, microchip, desparasitado) {
        this.nombre = nombre;
        this.genero = genero;
        this.raza = raza;
        this.ubicacion = ubicacion;
        this.edad = edad;
        this.comentario = comentario;
        this.vacunas = vacunas;
        this.microchip = microchip;
        this.desparasitado = desparasitado;
    }

    constructor(url, nombre, genero, raza, ubicacion, edad, comentario, vacunas, microchip, desparasitado) {
        this.url = url;
        this.nombre = nombre;
        this.genero = genero;
        this.raza = raza;
        this.ubicacion = ubicacion;
        this.edad = edad;
        this.comentario = comentario;
        this.vacunas = vacunas;
        this.microchip = microchip;
        this.desparasitado = desparasitado;
    }
};


class Vacuna {
    constructor(nombre, cantidadDeDosisNecesarias) {
        this.nombre = nombre;
        this.cantidadDeDosisNecesarias = cantidadDeDosisNecesarias;
        this.cantidadDeDosisDadas = cantidadDeDosisDadas;
    }
};

class VacunaDada {
    constructor(vacuna, cantidadDeDosisDadas) {
        this.vacuna = vacuna;
        this.cantidadDeDosisDadas = cantidadDeDosisDadas;
    }
};

let vacuna1 = new Vacuna("Vacuna 1", 5);
let polivalenteCanina = new Vacuna("Polivalente Canina", 5);
let antirrabica = new Vacuna("Antirrabica", 5);
let polivalenteRabia = new Vacuna("Polivalente Rabia", 5);

let vacuna1Coco = new VacunaDada(vacuna1, 5);
let polivalenteCaninaCoco = new VacunaDada(polivalenteCanina, 3);
let antirrabicaCoco = new VacunaDada(antirrabica, 5);
let polivalenteRabiaCoco = new VacunaDada(polivalenteRabia, 5);

let coco = new Perrito("coco","Hembra", "Bichon Frise",  "Parque Batlle", 3, "Coco es un chico cariñoso y gentil. Cuesta creer que tenga 14 años. Es muy activo para su edad y ama sus paseos. Tiene una visión helada. Acaba de someterse a un dentista y sin extracciones y un buen informe de salud de nuestro veterinario. Es sociable con otros perros y fácil de manejar y recoger. Fiel a su raza, Tubby AMA su comida. Tiene un abrigo corto y pesa 18,6 kg. Tubby ama a las personas que lo rodean y es mejor cuando están más cerca.Traje de trabajador a domicilio o amigo perrito: no puede arreglárselas solo y ha mostrado signos de ansiedad por separación. Necesita compañía humana u otros amigos de perros.", [vacuna1Coco, polivalenteCaninaCoco, antirrabicaCoco, polivalenteRabiaCoco], false, true);


let vacuna1Max = new VacunaDada(vacuna1, 3);
let polivalenteCaninaMax = new VacunaDada(polivalenteCanina, 4);
let antirrabicaMax = new VacunaDada(antirrabica, 1);


let max = new Perrito("Max", "Macho", null, "Goes", 5, "Es un perro amigable y feliz que es social con otros perros. Necesita un manejo suave y lo haría mejor en un ambiente tranquilo y silencioso. Está nervioso por algunos hombres. Le encantan sus paseos y se emociona cuando ve el protagonista. Ha sido descuidado en el pasado y está nervioso de que la gente lo toque por detrás. Ha tenido una extracción dental con 1 extracción. Ha recibido enjuagues medicinales para controlar sus problemas de alergia. Scooter camina con la correa suelta pero ladra a los perros que pasan.Camina a buen ritmo. Fácil de dirigir y controlar alrededor de otros perros.Pesa 11,6 kg. Sería mejor en un hogar donde generalmente hay alguien en casa y ha tenido experiencia en rescates.Necesita compañía humana.", [vacuna1Max, polivalenteCaninaMax, antirrabicaMax], true, true);;


let vacuna1Kira = new VacunaDada(vacuna1, 5);
let antirrabicaKira = new VacunaDada(antirrabica, 5);
let polivalenteRabiaKira = new VacunaDada(polivalenteRabia, 5);


let kira = new Perrito("Kira", "Hembra", null, "Carrasco", 9, "Kira es una pastora alemana de tres años cuyos dueños han tomado la difícil decisión de encontrarle un nuevo hogar. Kira se adaptará mejor a un hogar con una sola persona o una pareja que tenga experiencia con pastores alemanes. Ella es un perro muy inteligente y tratará de vincularse con una persona. Entonces, si ella va a una casa con una pareja, ambos deben poder trabajar con ella para que no elija a uno para proteger. Necesitará a alguien que pueda trabajar con ella y que esté dispuesto a dedicar su tiempo para seguir entrenándola y darle los mimos y la atención que le gusta. No puede ir a una casa con niños, gatos o mascotas de bolsillo.", [vacuna1Kira, antirrabicaKira, polivalenteRabiaKira], true, false);

let vacuna1Simba = new VacunaDada(vacuna1, 5);
let polivalenteCaninaSimba = new VacunaDada(polivalenteCanina, 2);
let antirrabicaSimba = new VacunaDada(antirrabica, 1);
let polivalenteRabiaSimba = new VacunaDada(polivalenteRabia, 5);

let simba = new Perrito("Simba", "Macho", "Galgo", "Parque Batlle", 3, "Simba ha sido objeto de abusos físicos y verbales la mayor parte de su vida. Con algunos perros, esto los hace acobardarse y retirarse; con otros, los hace reactivos. Simba ha elegido el último curso. Ha aprendido en el pasado que no puede confiar ni confiar en su gente. Le estamos enseñando que la vida puede ser diferente, pero es un proceso largo y lento. Simba es mucho mejor de lo que era, pero le queda mucho por hacer. Por favor, no solicite a Simba porque crea que necesita amor y abrazos. No. Necesita consistencia, rutina y, sobre todo, saber que hay reglas, que está bastante seguro contigo, que no levantarás la voz y gritarás y pegarás por lo que lo elogiaste la semana anterior", [vacuna1Simba, polivalenteCaninaSimba, antirrabicaSimba, polivalenteRabiaSimba], true, true);

let polivalenteCaninaNala = new VacunaDada(polivalenteCanina, 5);
let antirrabicaNala = new VacunaDada(antirrabica, 5);
let polivalenteRabiaNala = new VacunaDada(polivalenteRabia, 5);

let nala = new Perrito("Nala", "Hembra", null, "Lagomar", 4, "Me salvé después de encontrarme con importantes lesiones en el cuello. Afortunadamente, el personal fue tan cariñoso y atento, que mi cuello ahora está completamente curado, con solo mechones de cabello para volver a crecer. Nadie sabe qué sucedió realmente, pero lo único que importa es que algo así nunca volverá a suceder. Soy una compañera absolutamente increíble que es leal, cariñosa e inteligente. Vivo con otro perro y podría jugar con él durante horas y horas; me encanta tener un amigo con quien jugar. También sería bueno por mí mismo, siempre que reciba mucha atención de mis humanos, estimulación y amor. No soy el mejor con gatos u otros animales pequeños como gallinas o mascotas de bolsillo. La emoción de la persecución es demasiado para mí y me dejo llevar. ¡Me encanta conocer gente nueva y no desconfío en absoluto de los extraños! Soy un chico tan adorable. Sin embargo, todavía estoy aprendiendo mis modales, así que debido a mi naturaleza nerviosa, es mejor que me reubiquen en una casa con niños mayores o sin niños; me sentiría tan mal si accidentalmente lastimara a los pequeños humanos. Me encanta la compañía de la gente, preferiría acurrucarme en el sofá después de un paseo y luego ir a jugar con mis juguetes. He dominado sentarse, y siendo tan joven y orientado a la comida como soy, ¡estoy seguro de que aprenderé muchos trucos en mi nuevo hogar! Soy genial dentro y fuera de la casa, y mi hogar de acogida actual tiene cercas de 6 metros y tengo no mostró interés en escapar.", [polivalenteCaninaNala, antirrabicaNala, polivalenteRabiaNala], false, true);


let vacuna1Marko = new VacunaDada(vacuna1, 3);
let polivalenteCaninaMarko = new VacunaDada(polivalenteCanina, 2);
let antirrabicaMarko = new VacunaDada(antirrabica, 1);
let polivalenteRabiaMarko = new VacunaDada(polivalenteRabia, 1);


let marko = new Perrito("Marko", "Macho", "Jack Rusell Terrier", "Carrasco", 7, "A este niño le encanta un lugar soleado en un patio tranquilo para dormir y un buen masaje en la barriga en su cama.todavía está trabajando en su memoria, ya que puede distraerse con un olor o ruido interesante. Dougie puede ser tímido e inseguro al principio, pero se une muy fuertemente a su humano una vez que se genera la confianza. Hace un año, Dougie estaba aterrorizado por su entorno, ya que no había estado expuesto a la vida suburbana ni a otros perros. Ha avanzado a pasos agigantados desde entonces, pero aún puede asustarse con un gran ruido. Marko actualmente tiene medicamentos para apoyar su entrenamiento y reducir su ansiedad. Él es un campeón absoluto tomando sus tabletas y felizmente las aceptará intercaladas entre sus croquetas.", [vacuna1Marko, polivalenteCaninaMarko, antirrabicaMarko, polivalenteRabiaMarko], true, true);

let vacuna1Lana = new VacunaDada(vacuna1, 3);
let polivalenteCaninaLana = new VacunaDada(polivalenteCanina, 1);
let antirrabicaLana = new VacunaDada(antirrabica, 1);
let polivalenteRabiaLana = new VacunaDada(polivalenteRabia, 3);


let lana = new Perrito("Lana","Hembra", "Jack Rusell Terrier", "Carrasco", 7, "Lana es una compañera dulce y leal. Ella es una chica encantadora que camina muy bien con correa y viaja bien en el coche. Ella está siendo criada en un hogar con otros perros y es tranquila y tranquila. Le encanta estar con su familia y emprender pequeñas aventuras. A Lana le encanta salir a caminar, así que si tu idea de un día encantador es dar un paseo, detenerte en un café o en un parque y reunirte con amigos, entonces Lana está de acuerdo y estará encantada de acompañarte. El temperamento de Lana es muy tranquilo para un cachorro. Ella está ansiosa por complacer y está orientada a la comida y los juguetes, lo que hace que el entrenamiento sea divertido y efectivo. Continúa progresando con el entrenamiento en casa y está aprendiendo a sentarse, agacharse y pararse, y sin duda pronto los dominará cuando se lo ordenen.", [vacuna1Lana, polivalenteCaninaLana, antirrabicaLana, polivalenteRabiaLana], true, true);

let vacuna1Simon = new VacunaDada(vacuna1, 5);
let polivalenteCaninaSimon = new VacunaDada(polivalenteCanina, 5);
let antirrabicaSimon = new VacunaDada(antirrabica, 5);
let polivalenteRabiaSimon = new VacunaDada(polivalenteRabia, 5);


let simon = new Perrito("Simon", "Macho", null, "Carrasco", 2, "Es un gran tonto torpe, ¡así que ten cuidado cuando tenga los zumbidos, ya que es como un pony saltando! Simon se lleva bien con sus hermanos adoptivos Amstaff y Cavoodle. Necesitará otro amigo peludo y, como ha crecido donde siempre hay alguien en casa, sería más adecuado que alguien estuviera en casa. Realmente necesita ser parte de su familia para siempre. Le encantan los abrazos y estar metido en la cama. Dormirá en su cama toda la noche y se sentará pacientemente esperando su cena. Es un chico grande y fuerte que se adaptará a una familia con niños mayores y alguien que está dispuesto a dedicar tiempo y esfuerzo a una mayor formación. Si bien es bueno con sus hermanos adoptivos, puede tener miedo de otros perros en los paseos y, debido al encierro, no ha tenido interacciones con muchos otros perros. Es un cachorro guapo, con ojos hermosos y temperamento dulce. Su nueva familia tendrá mucha suerte de que este niño se una a ellos. Para tener la oportunidad de conocer y saludar, ¡entre rápido! ", [vacuna1Simon, polivalenteCaninaSimon, antirrabicaSimon, polivalenteRabiaSimon], true, false);

let vacuna1Buzz = new VacunaDada(vacuna1, 3);
let polivalenteCaninaBuzz = new VacunaDada(polivalenteCanina, 4);
let antirrabicaBuzz = new VacunaDada(antirrabica, 1);
let polivalenteRabiaBuzz = new VacunaDada(polivalenteRabia, 5);


let buzz = new Perrito("Buzz", "Macho", "Bichon Frise", "Goes", 5, "Viene de una zona bastante difícil, ha tenido una vida dura y se nota, pero una cara curtida no significa un corazón curtido. Entonces, si está buscando un compañero maravilloso, este distinguido caballero es su hombre. Buzz es sordo, pero eso no le impide disfrutar de la vida. Si bien esto significa que no puede oírte llamar su nombre y tendrás que usar las instrucciones de la mano para hacer gestos de comandos, esto es sorprendentemente fácil. Buzz es muy amigable con la gente y disfruta de la atención: si le das una palmadita, él vendrá corriendo. Le encanta que le froten el vientre, se porta bien y comprende los límites. Se acomoda fácilmente por la noche y se irá a la cama (¡sí, ronca!) Después de cenar y dar un paseo. Buzz es obediente y puede sentarse por su plato de comida, su guía y sabe quedarse cuando se usan gestos con las manos. Le gusta conducir en automóvil, por lo que es una gran compañía cuando está fuera de casa. Buzz espera que seas un gran caminante porque le encanta salir a caminar por la mañana y por la tarde y, por lo general, camina alrededor de 60 minutos en total. Entonces, si le gusta dar largos paseos, Buzz es el perro para usted. Sin embargo, no es fanático de otros perros en los paseos y ladrará y se lanzará hacia ellos. Es necesario tener paciencia, comprensión y compromiso con su formación continua. Una casa con un pequeño patio o acceso al aire libre sería ideal. A veces, una siesta al sol de la tarde es justo lo que recetó el médico. También le encanta acurrucarse en el sofá con su humano y mirar un poco de televisión. No lo culpamos. Si buscas ternura, compañía, ejercicio y amor, no busques más que Buzz. Además, ¡cómo puedes resistirte a esta cara! Buzz no ha sido probado con gatos.", [vacuna1Buzz, polivalenteCaninaBuzz, antirrabicaBuzz, polivalenteRabiaBuzz], false, true);

let vacuna1Kika = new VacunaDada(vacuna1, 3);
let polivalenteCaninaKika = new VacunaDada(polivalenteCanina, 4);
let polivalenteRabiaKika = new VacunaDada(polivalenteRabia, 5);


let kika = new Perrito("Kika", "Hembra", "Golden Retriever", "El Pinar", 5, "Un perro brillante y atrevido es nuestro Kika. Con unos 33 kg, es solo una perra mediana con patas largas. Kika comparte su espacio con otra perra, Emerald (así que si buscas a dos chicas, están aquí, esperando) y es amigable con los perros con la presentación correcta. Kika es bastante fácil de caminar con correa, aunque si pone los frenos, entonces realmente no quiere ir a donde tú vas, así que necesita dar la vuelta, lo cual es lo suficientemente feliz de hacer. Kika es fácil de satisfacer, su atención y algunas interacciones de entrenamiento, si hay una actividad de entrenamiento, ¡ella está allí, al frente y al centro! Kika ha estado trabajando en el cuidado cooperativo, enseñando a los estudiantes de tecnología veterinaria cómo se acuesta de lado y espera pacientemente, y cómo poner la barbilla en tu regazo para que puedas mirar dentro de sus grandes orejas. Kika NO es absolutamente amigable con los gatos.", [vacuna1Kika, polivalenteCaninaKika, polivalenteRabiaKika], true, true);

let vacuna1Jaime = new VacunaDada(vacuna1, 3);
let polivalenteCaninaJaime = new VacunaDada(polivalenteCanina, 4);
let antirrabicaJaime = new VacunaDada(antirrabica, 4);
let polivalenteRabiaJaime = new VacunaDada(polivalenteRabia, 5);


let jaime = new Perrito("Jaime", "Macho", "Galgo", "Carrasco", 5, "¡Conoce al maravilloso Jaime! ¡Es un galgo raro en el que puede sentarse! A Jaime le encanta aprender cosas en su nueva vida como mascota y está ansioso por complacer, vive con otro adoptivo de Gumtree Grey: Martie y están juntos en un apartamento, las escaleras son muy fáciles. Jaime sale más que la mayoría de los grises y necesitará un patio para reducir las caminatas, no tiene mucha energía pero le gusta un pipí largo que lo bendiga. Le está yendo bastante bien conociendo a otros perros, pero es temprano, está emocionado de verlos, sus orejas se aguzan y quiere ir a saludar, si ladran, ladra. Sus adoptantes deberán continuar con la socialización, especialmente con perros pequeños, ya que todavía son un poco desconocidos. La comida es vida ... se la devorará si tiene la oportunidad y es alto ... así que el contraataque siempre está en las cartas. También es un bicho de los abrazos, cuando está en casa, le encanta estar con sus humanos y le encanta acurrucarse en el sofá. Sus humanos lo describen como dulce y cariñoso y piensan que su familia eterna será afortunada de tenerlo; los recompensará todos los días con besos y afecto.", [vacuna1Jaime, polivalenteCaninaJaime, antirrabicaJaime, polivalenteRabiaJaime], true, true);


let perritos = [coco, max, kira, simba, nala, marko, lana, simon, buzz, kika, jaime] 