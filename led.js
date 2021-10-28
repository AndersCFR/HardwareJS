// primer programa de johnny 5
var jhonny = require("johnny-five");

// buscar la conexión al puerto COM 
var board = new jhonny.Board();

board.on("ready",encender)


function encender(){
        
    var ledRojo = new jhonny.Led(13);
    var ledAmarillo = new jhonny.Led(12);
    var ledVerde = new jhonny.Led(11);

    ledRojo.blink(1000);   //ms
    ledAmarillo.blink(1000);
    ledVerde.blink(2000);
}

