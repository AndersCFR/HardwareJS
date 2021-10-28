const SerialPort = require('serialport');
const ReadLine = SerialPort.parsers.ReadLine;
const parser = new ReadLine();

const mySerial = new SerialPort('...tu puerto',
{
    baudRate: 9600
});


