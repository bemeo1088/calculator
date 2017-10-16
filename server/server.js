var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
var calculatorRouter = require('./routes/calculator_router.js');

// Serve up static files
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/calculate', calculatorRouter);

app.use(express.static('server/public'));






// Start up the server
app.listen(port, function(){
    console.log('listening on port', port);
    
});