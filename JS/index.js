

function main(){

    var iniciarsesion = document.getElementById("IniciarSesion");
    iniciarsesion.addEventListener("click", mostrarInicioSesion);

    var resgistrar = document.getElementById("Registrarse");
    resgistrar.addEventListener("click", mostrarRegistrar);

    var divini = document.getElementById("ContenedorIniciarSesion");
    var formini = document.getElementById("Formini")
    var botonini = document.getElementById("IniciarSesion");
    window.addEventListener("click", function(event){
        var objetivo = event.target;
        if ((objetivo != formini && objetivo != botonini && objetivo==divini)) divini.style.display = "none";
    });

    var divreg = document.getElementById("ContenedorRegistrar");
    var formreg = document.getElementById("Formregi")
    var botonreg = document.getElementById("Registrarse");
    window.addEventListener("click", function(event){
        var objetivo2 = event.target;
        if ((objetivo2 != formreg && objetivo2 != botonreg && objetivo2==divreg)) divreg.style.display = "none";
    });

    
}

function mostrarInicioSesion(){
    console.log("Hola Login");

    var contenedorIniciarsesion = document.getElementById("ContenedorIniciarSesion");
    contenedorIniciarsesion.style='display:block';

}

function mostrarRegistrar(){
    console.log("Hola Registrar");

    var contenedorRegistrar = document.getElementById("ContenedorRegistrar");
    contenedorRegistrar.style='display:block';
}

window.addEventListener("load", main)