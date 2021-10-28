// HCSR04
// Ping Firmata
const { Board, Proximity } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const proximity = new Proximity({
    controller: "HCSR04",
    pin: 8,
    freq: 2000
  });

  proximity.on("change", () => {
    const {centimeters} = proximity;
    console.log("Tu mano se encuentra a:", centimeters, "centimetros");

  });
});