const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const CONFIG = require('./config');

const app = express();

mongoose.connect(CONFIG.DATABASE, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Connected to the database');
});

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


app.listen(CONFIG.PORT, err => {
    console.log('Server running on port ' + CONFIG.PORT);
});
