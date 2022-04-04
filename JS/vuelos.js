function main(){

    //despliega pantalla vuelos parte 2
    var Siguientepantalla = document.getElementById("siguientepantalla");
    Siguientepantalla.addEventListener("click", mostrarSiguientePantalla);

    //vuelve a pantalla vuelos parte 1 (de momento XD)
    var anterior = document.getElementById("anterior");
    anterior.addEventListener("click", mostrarAnteriorPantalla);

    var iguiente = document.getElementById("siguiente");
    siguiente.addEventListener("click", mostrarAnteriorPantalla);
}

function mostrarSiguientePantalla(){
    console.log("Hola Vuelos parte 2");
    var contenedorvuelos1 = document.getElementById("contenedorvuelos1");
    var contenedorvuelos2 = document.getElementById("contenedorvuelos2");
    contenedorvuelos2.style='display:block';
    contenedorvuelos1.style='display:none';

}

function mostrarAnteriorPantalla(){
    console.log("Hola Vuelos parte 1");
    var contenedorvuelos1 = document.getElementById("contenedorvuelos1");
    var contenedorvuelos2 = document.getElementById("contenedorvuelos2");
    contenedorvuelos2.style='display:none';
    contenedorvuelos1.style='display:block';

}



window.addEventListener("load", main)