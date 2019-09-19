var path = require("path");
var express = require("express");
var bodyParser = require('body-parser');
var SerialPort = require("serialport");

// Express Set-Up
var app = express();
var server = app.listen(4000, () => { //Start the server, listening on port 4000.
    console.log("Listening to requests on port 4000...");
})
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })); 

// Socket io Set-Up
var io = require('socket.io')(server);

// Serial Port Set-Up
var serialPort = SerialPort.serialPort;
var Readline = require('@serialport/parser-readline');
var port = new SerialPort('/dev/tty.usbmodem1441', { baudRate: 9600 });
var parser = port.pipe(new Readline({ delimiter: '\n' }));


port.on("open", () => {
  console.log('serial port open');
});
// Read the port data, and emit into socket
parser.on('data', data =>{
  io.sockets.emit("transferData", {proxData : data} );
});

io.on('connection', (socket) => {
    console.log("Connected."); 
})

// Routes
app.get('/', function(req, res) {
  res.render('index');
});

app.post('/', function(req, res){
  console.log(req.body);
  res.render('message.ejs', {
    message:req.body.message,
    proximity:  req.body.proximity
 });
});






