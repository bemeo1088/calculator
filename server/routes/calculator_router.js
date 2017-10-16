var express = require ('express');
var router = express.Router();

var recordCollection = [];
var result = 0;
// Records POST route
router.post('/', function (req, res) {
    // console.log('req.body');
    var recordToCalculate = req.body;
    // console.log (recordToCalculate.x);
    // console.log (recordToCalculate.y);
    switch (recordToCalculate.type) {
        case "Add":
            result = parseInt(recordToCalculate.x) + parseInt(recordToCalculate.y); // Or use Number(recordToCalculate.x)
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
router.get('/', function (req, res) {
    var resultToString = result.toString();
    console.log(resultToString);
    res.send(resultToString);
})





module.exports = router;