var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');

// Serve up static files
app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

var recordCollection = [];
var result = 0;
// Records POST route
app.post('/records', function(req,res){
    // console.log('req.body');
    var recordToCalculate = req.body;
    // console.log (recordToCalculate.x);
    // console.log (recordToCalculate.y);
    switch (recordToCalculate.type) {
        case "Add":
            result = parseInt(recordToCalculate.x) + parseInt(recordToCalculate.y);
            console.log('add', result);           
            break;
        case "Subtract":
            result = parseInt(recordToCalculate.x) - parseInt(recordToCalculate.y);
            console.log('subtract', result);
            break;
        case "Multiply":
            result = parseInt(recordToCalculate.x) * parseInt(recordToCalculate.y);
            console.log('multiply', result);    
            break;
        case "Divide":
            result = parseInt(recordToCalculate.x) / parseInt(recordToCalculate.y);
            console.log('divide', result);
            break;
    }
    recordCollection.push(recordToCalculate);
    console.log(recordCollection);
    res.sendStatus(201);
});

// Records GET route
app.get('/records', function(req,res){
    var resultToString = result.toString();
    console.log(resultToString);
    res.send(resultToString);
})

// Start up the server
app.listen(port, function(){
    console.log('listening on port', port);
    
});