import Request from "./peticion.js";

const laurl = 'https://api.datos.gob.mx/v1/api-catalog';



const objPeticion = {
    url: laurl,
    doneCallback: hecho,
    errorCallback: fallo,
    progressCallback: progreso,
    responseType: "json"
};

Request(objPeticion);

function hecho(e) {
    console.log(e.response);
}
function fallo(e) {
    console.log(e);
}
var t0, t1;
function progreso(e) {
    
    if(e.isTrusted && e.type == 'loadstart'){
        t0 = performance.now();
    }
    if(e.isTrusted && e.type == 'loadend'){
        t1 = performance.now();
        console.log("El tiempo " + (t1 - t0) + " millisegundos.")
    }
}




