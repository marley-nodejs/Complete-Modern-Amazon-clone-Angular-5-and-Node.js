const router = require('express').Router();
const Product = require('../models/product');

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = new aws.S3({
    accessKeyId: "AKIAIBR5G5OP47EVSYJA",
    secretAccessKey: "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"
});


const unload = multer({
    storage: multerS3({
        s3,
        bucket: 'amazonowebapplication',
        metadata: function(req, file, cb){
            cb(null, {
                fieldName: file.fieldName
            });
        },
        key: function(req, res, cb){
            cb(null, {fieldName: file.fieldName});
        }
    })
});

module.exports = router;
