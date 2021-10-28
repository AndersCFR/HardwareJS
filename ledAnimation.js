const { Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready",animacionLed);

function animacionLed(){
  const led = new Led(11);
  led.fade({
    easing: "linear",
    duration: 3000, 
    cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
    keyFrames: [0, 250, 25, 0, 0, 125],
    onstop() {
      console.log("Fin de un ciclo de animación");
    }
  });
  setTimeout(animacionLed,3000);
}
