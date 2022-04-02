function main(){

    var iniciarsesion = document.getElementById("IniciarSesion");
    iniciarsesion.addEventListener("click", mostrarInicioSesion);

    var resgistrar = document.getElementById("Registrarse");
    resgistrar.addEventListener("click", mostrarRegistrar);
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