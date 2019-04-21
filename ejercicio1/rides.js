/** vuelos.

Programa una inferfaz de usuario para una app de taxis. Esta app dispondrá de 5 trayectos para el dia de hoy, para empezar, estos trayectos estarán declarados de manera global, cuando se llame a la función:

Se preguntará por el nombre de usuario y dará la bienvenida.
El usuario visualizará todos los vuelos disponibles de una forma amigable:
El trayecto con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna parada.
A continuación, el usuario verá el coste medio de los trayectos.
También podrá ver cuantos trayectos efectúan paradas.
Sabiendo que los ultimos 5 trayectos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos. 
var rides = [
  { id: 00, to: "A Coruña", from: "Santiago", cost: 60, scale: false },
  { id: 01, to: "New York", from: "New Yersey", cost: 120, scale: false },
  { id: 02, to: "Valencia", from: "Madrid", cost: 300, scale: true },
  { id: 03, to: "O Porto", from: "Guimaraes", cost: 50, scale: false },
  { id: 04, to: "Roma", from: "Milan", cost: 300, scale: false },
  { id: 05, to: "London", from: "Manchester", cost: 200, scale: false }
];
PRO!:
Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER, dependiendo de la elección, el programa se comportará de la siguiente manera:
Si eres ADMIN, la función debería permitir:

Poder crear, más trayectos, pidiendo la información por prompt(), sin poder pasar de 8 trayectos, si se intenta introducir uno más, saltará un alert().
Poder eliminar trayectos mediante el ID.

Si eres USER la función debería permitir:

Buscar por precio (más alto(0), más bajo(1) o igual(2)), el usuario debería mostrar los datos de los vuelos encontrados y, indicando el ID, el programa responderá:
"Gracias por su compra, vuelva pronto."
*/

let rides = [
    { id: 00, to: "A Coruña", from: "Santiago", cost: 60, scale: false },
    { id: 01, to: "New York", from: "New Yersey", cost: 120, scale: false },
    { id: 02, to: "Valencia", from: "Madrid", cost: 300, scale: true },
    { id: 03, to: "O Porto", from: "Guimaraes", cost: 50, scale: false },
    { id: 04, to: "Roma", from: "Milan", cost: 300, scale: false },
    { id: 05, to: "London", from: "Manchester", cost: 200, scale: false }
];
let auxRides = [];



function acceso() {
    let login = "";
    let nombre = prompt("¡Bienvenido! ¿Cómo te llamas?");
    if (nombre === "") {
        login = prompt("Eres usuario o admin")
    } else {
        login = prompt("Hola " + nombre + ". Identifícate como usuario o admin");
    }
    if (login == usuario) {
        document.getElementById("admin").style.display = "none";
        document.getElementById("user").style.display = "block";
    } else if (login == admin) {
        document.getElementById("admin").style.display = "block";
        document.getElementById("user").style.display = "none";
    } else {
        login = "";
        alert("por favor, identificate")
    }
};
acceso()


function mostrarVuelos(mostrar, noEscalas) {

    let auxNum = 0;
    let auxTotal = 0;
    let txtVuelos = "";
    let costeMed = 0;

    if (mostrar == "todos") {
        auxNum = 0;
    } else if (mostrar == "ultimos") {
        auxNum = rides.length - 5;
    }

    auxRides = [];

    for (let i = auxNum; i < rides.length; i++) {
        let vuelo = "";

        if (rides[i].scale && noEscalas == "todo") {
            vuelo = "ID: " + rides[i].id + ". Salida desde " + rides[i].from + " con llegada a " + rides[i].to + ". Precio: " + rides[i].cost + "€. Con escalas.\n\n";
            auxTotal += 1
            costeMed = costeMed + rides[i].cost;
            txtVuelos = txtVuelos + vuelo;
            auxRides.push(rides[i]);
        } else if (!rides[i].scale) {
            vuelo = "ID: " + rides[i].id + ". Salida desde " + rides[i].from + " con llegada a " + rides[i].to + ". Precio: " + rides[i].cost + "€.\n\n";
            auxTotal += 1
            costeMed = costeMed + rides[i].cost;
            txtVuelos = txtVuelos + vuelo;
            auxRides.push(rides[i]);
        };

    }
    document.getElementById("listaVuelos").innerText = txtVuelos;

    if (costeMed != 0) {
        costeMed = (costeMed / auxTotal).toFixed(2)
    } else {
        costeMed = 0;
    };
    document.getElementById("costeMedio").innerText = "Coste medio: " + costeMed + "€.";
};