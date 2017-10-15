$(document).ready(readyNow);

function readyNow() {
    console.log('js sourced');
    $('#addBtn').on('click', addClicked);
    $('#subtractBtn').on('click', subtractClicked);
    $('#multiplyBtn').on('click', multiplyClicked);
    $('#divideBtn').on('click', divideClicked);
    getRecords();
    $('#clearBtn').on('click', clearClicked);
}

function addClicked(x, y) {
    console.log('x value', $('#x').val());
    console.log('y value', $('#y').val());
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
        var recordToCalculate = response;
        appendToDom(recordToCalculate);
        console.log(response);
        
    })
    .fail(function(message){
        console.log('Error', message);
        
    })
}
function getRecords() {
    $.ajax ({
        method: 'GET',
        url: '/records'
    })
    .done(function (response) {
        var recordCollection = response;
        appendToDom(recordCollection);
    })

function appendToDom(result) {
    $('#result').text(result);
}    



}
function subtractClicked(x, y) {
    console.log('x value', $('#x').val());
    console.log('y value', $('#y').val());
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
            console.log(response);

        })
        .fail(function (message) {
            console.log('Error', message);

        })
}
function getRecords() {
    $.ajax({
        method: 'GET',
        url: '/records'
    })
        .done(function (response) {
            var recordCollection = response;
        })

}
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
            console.log(response);

        })
        .fail(function (message) {
            console.log('Error', message);

        })
}
function getRecords() {
    $.ajax({
        method: 'GET',
        url: '/records'
    })
        .done(function (response) {
            var recordCollection = response;
        })

}
function divideClicked(x, y) {
    console.log('x value', $('#x').val());
    console.log('y value', $('#y').val());
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
            console.log(response);

        })
        .fail(function (message) {
            console.log('Error', message);

        })
}
function getRecords() {
    $.ajax({
        method: 'GET',
        url: '/records'
    })
        .done(function (response) {
            var recordCollection = response;
        })

}

function clearClicked() {
    $('#x').empty();
    $('#y').empty();
}