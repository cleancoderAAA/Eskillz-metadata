const express = require('express');
const router = express.Router();
const Student = require('../models/eskillz');

// get a list of students from the database
router.get('/eskillzTokens/:id',function(req,res,next){
    Student.findOne({tokenID: req.params.id}).then(function(student){
        res.send(student);
    }).catch(next);
});

// add a new student to database
router.post('/eskillzTokens',function(req,res,next){
    Student.create(req.body).then(function(student){
        res.send(student);
    }).catch(next);
});

// update a student in the database
router.put('/eskillzTokens/:id',function(req,res,next){
    Student.findOneAndUpdate({tokenID: req.params.id},req.body).then(function(student){
        Student.findOne({tokenID: req.params.id}).then(function(student){
            res.send(student);
        }).catch(next);
    }).catch(next);
});

// delete a student in the database
router.delete('/eskillzTokens/:id',function(req,res,next){
    Student.findOneAndDelete({tokenID: req.params.id}).then(function(student){
        res.send(student);
    }).catch(next);
});

module.exports = router;