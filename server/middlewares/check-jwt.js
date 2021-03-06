const jwt = require('jsonwebtoken');
const CONFIG = require('../config');

module.exports = function(req, res, next){
    let token = req.headers["authorization"];
    
    if (token){
        jwt.verify(token, CONFIG.SECRET, function(err, decoded){
            if (err){
                res.json({
                    success: false,
                    message: 'Failed to authenticate token'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(403).send({
            success: false,
            message: 'No token provided'
        });
    }
};
