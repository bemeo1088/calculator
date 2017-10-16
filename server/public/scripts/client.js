$(document).ready(readyNow);

var x = "";
var y = "";
var type = "";

function readyNow() {
    console.log('js sourced');
    $('#addBtn').on('click', addClicked);
    $('#subtractBtn').on('click', subtractClicked);
    $('#multiplyBtn').on('click', multiplyClicked);
    $('#divideBtn').on('click', divideClicked);
    $('#clearBtn').on('click', clearClicked);
    $('#equalsButton').on('click', equalsButtonClicked);
    $('.numberButton').on('click', numberButtonClicked);
}


function equalsButtonClicked () {
    // assemble object to send
    var objectToSend = {
        x: x,
        y: Number($('#currentNumber').text()),
        type: type
    }
    console.log('sending', objectToSend);
    // make ajax call to server
    $.ajax({
        type: 'POST',
        url: '/records',
        data: objectToSend
    }).done(function (response) {
        //handle response
        console.log('back from the server with:', response);
        $('#output').empty();
        // loop through response.history
        for (var i = 0; i < response.history.length; i++){
            var outputString = '<li>';
            outputString += response.history[i].x;
            if(response.history[i].type === 'Add'){
                outputString += '+';
            }
            else if(response.history[i].type === 'Subtract'){
                outputString += '-';
            }
            else if (response.history[i].type === 'Multiply') {
                outputString += '*';
            }
            else if (response.history[i].type === 'Divide') {
                outputString += '/';
            }
            outputString += response.history[i].y;
            outputString += '=';
            outputString += response.history[i].answer;
            outputString += '</li>';
            $('#output').append(outputString);
        } //end for loop
        //reset initial values
        x = "";
    }); // end ajax
    
}

function numberButtonClicked() {
    // get this number and append to current number output
    $('#currentNumber').append($(this).data().number);
}



function addClicked(x, y) {

    var recordNumber = {
        x: $('#x').val(),
        y: $('#y').val(),
        type: "Add"
    }
    //console.log('Record Number', recordNumber);
    $.ajax({
        method: 'POST',
        url: '/records',
        data: recordNumber
    })
    .done(function(response){
       
        getRecords();
    })
    .fail(function(message){
        console.log('Error', message);
    })
} // end add button function

//begin subtraction button function
function subtractClicked(x, y) {

    var recordNumber = {
        x: $('#x').val(),
        y: $('#y').val(),
        type: "Subtract"
    }

    $.ajax({
        method: 'POST',
        url: '/records',
        data: recordNumber
    })
        .done(function (response) {
            getRecords();
        })
        .fail(function (message) {
            console.log('Error', message);
        })
} // end subtract function

// begin division button function
function divideClicked(x, y) {

    var recordNumber = {
        x: $('#x').val(),
        y: $('#y').val(),
        type: "Divide"
    }
    console.log('Record Number', recordNumber);
    $.ajax({
        method: 'POST',
        url: '/records',
        data: recordNumber
    })
        .done(function (response) {
            getRecords ();
        })
        .fail(function (message) {
            console.log('Error', message);
        })
} // end divide function

//begin multiplication function
function multiplyClicked(x, y) {
    console.log('x value', $('#x').val());
    console.log('y value', $('#y').val());
    var recordNumber = {
        x: $('#x').val(),
        y: $('#y').val(),
        type: "Multiply"
    }
    $.ajax({
        method: 'POST',
        url: '/records',
        data: recordNumber
    })
        .done(function (response) {
            getRecords();
        })
        .fail(function (message) {
            console.log('Error', message);

        })
}
function getRecords() {
    $.ajax ({
        method: 'GET',
        url: '/records'
    })
    .done(function (response) {
        var resultToString = response;
        appendToDom(resultToString);
    })
}

function appendToDom(result) {
    $('h3').html("Result: " + result);

}    
function clearClicked() {
    $('#x').val("");
    $('#y').val("");
    $('h3').html("Result:");
}