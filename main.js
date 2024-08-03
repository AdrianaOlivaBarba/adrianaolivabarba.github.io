// Prueba de que funciona poner: console.log("Hola mundo! desde la consola");
//Texto en movimiento como si se escribiera
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

    typewriter.typeString('Médica Veterinaria Zootecnista | Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong>programar!</strong>')
    .pauseFor(2500)
    .start();