$(document).ready(readyNow);

function readyNow() {
    console.log('js sourced');
    $('#addBtn').on('click', addClicked);
    $('#subtractBtn').on('click', subtractClicked);
    $('#multiplyBtn').on('click', multiplyClicked);
    $('#divideBtn').on('click', divideClicked);
    $('#clearBtn').on('click', clearClicked);
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