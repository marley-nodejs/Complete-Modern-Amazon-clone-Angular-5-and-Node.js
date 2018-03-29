const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
    res.json({
        user: 'Arash Yahaya'
    });
});


app.listen(PORT, err => {
    console.log('Server running on port ' + PORT);
});
