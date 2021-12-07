const express = require('express');
const router = express.Router();
const Eskillz = require('../models/eskillz');

// get a eskillz from the database
router.get('/eskillzTokens/:id',function(req,res,next){
    Eskillz.findOne({tokenID: req.params.id}).then(function(eskillz){
        var jsonObj = {};
        var result = JSON.stringify(eskillz);
        var resultObj = JSON.parse(result);
        for(var key in resultObj) {
            if(key != "_id" && key != "tokenID" && key != "__v"){
                jsonObj[key] = resultObj[key];
            }
        }
        res.send(jsonObj);
    }).catch(next);
});

// add a new eskillz to database
router.post('/eskillzTokens',function(req,res,next){
    Eskillz.create(req.body).then(function(eskillz){
        res.send(eskillz);
    }).catch(next);
});

// update a eskillz in the database
router.put('/eskillzTokens/:id',function(req,res,next){
    Eskillz.findOneAndUpdate({tokenID: req.params.id},req.body).then(function(eskillz){
        Student.findOne({tokenID: req.params.id}).then(function(eskillz){
            res.send(eskillz);
        }).catch(next);
    }).catch(next);
});

// delete a eskillz in the database
router.delete('/eskillzTokens/:id',function(req,res,next){
    Eskillz.findOneAndDelete({tokenID: req.params.id}).then(function(eskillz){
        res.send(eskillz);
    }).catch(next);
});

module.exports = router;