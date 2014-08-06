'use strict';

var express = require('express'),
    fs = require('fs');

var app = express();

app.use(express.bodyParser());


var questionnaires = [{
    displayName: 'Optimal questionnaire',
    keyName: 'optimalQuestionnaire'
}, {
	displayName: 'Itil 1 Parcial',
	keyName: 'itil1Parcial'
}];

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});


function readJSONFile(filename, callback) {
    fs.readFile(filename, function(err, data) {
        if (err) {
            callback(err);
            return;
        }
        try {
            callback(null, JSON.parse(data));
        } catch (exception) {
            callback(exception);
        }
    });
}

/**
 * GET list of questionnaires
 */
app.get('/questionnaires', function(req, res) {
    res.type('text/plain');
    res.send(questionnaires);
});

/**
 * GET specific questionnaire
 */
app.get('/questionnaires/:keyName', function(req, res) {
    readJSONFile('questionnaires/' + req.param('keyName') + '.json', function(err, json) {
        if (err) {
            throw err;
        }
        res.type('text/plain');
        res.send(json);
    });

});

app.post('/questionnaires/add', function(request, response){
  console.log(request.body);      // your JSON
  response.send(request.body);    // echo the result back
});



app.listen(process.env.PORT || 4730);