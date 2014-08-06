'use strict';

var express = require('express');
var app = express();

var questions = [{
    displayName: 'ITIL v3',
    fileName: 'Itil1Parcial.json'
}, {
    displayName: 'GDS Parcial 1',
    fileName: 'gdsApril.json'
}, {
    displayName: 'GDS Parcial 2',
    fileName: 'gdsJune.json'
}];

app.get('/questions', function(req, res) {
    res.type('text/plain');
    res.send(questions);
});

app.listen(process.env.PORT || 4730);