const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const CONFIG = require('./config');

const app = express();

mongoose.connect(CONFIG.DATABASE, (err) => {
    if (err) {
        console.log('Can\'t connect to the database');
        return console.log(err);
    }

    console.log('Connected to the database');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(morgan('dev'));
app.use(cors());

const userRoutes = require('./routes/account');
const mainRoutes = require('./routes/main');
const sellerRoutes = require('./routes/seller');

app.use('/api', mainRoutes);
app.use('/api/accounts', userRoutes);
app.use('/api/seller', sellerRoutes);

app.listen(CONFIG.PORT, err => {
    console.log('Server running on port ' + CONFIG.PORT);
});
