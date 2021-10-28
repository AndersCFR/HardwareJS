// primer programa de johnny 5
var jhonny = require("johnny-five");
var board = new jhonny.Board();
var luzRoja, luzAmarilla, luzVerde, traficoDetenido=true;

board.on("ready",encender)

function encender(){
    luzRoja = new jhonny.Led(13);
    luzAmarilla = new jhonny.Led(12);
    luzVerde = new jhonny.Led(11);
    detenerTrafico();
}

function detenerTrafico(){
    if(traficoDetenido){
        console.log("Detenido");
        luzAmarilla.off()
        luzVerde.off();
        luzRoja.on();
    }
    else{
        console.log("Siga");
        luzRoja.off();
        luzVerde.on();
        setTimeout(advertir,500);
        luzAmarilla.off();
        //luzAmarilla.off();
    }
    traficoDetenido=!traficoDetenido;
    setTimeout(detenerTrafico,3000);
    //setInterval(detenerTrafico,3000);
}
 
function advertir(){
    luzAmarilla.on();
    luzVerde.off();
    console.log("Cambiando a Rojo");
}