const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000

// set up our express app
const app = express();

// connect to mongodb
const uri = process.env.MONGODB_URI;
mongoose.connect(uri);
// mongoose.connect('mongodb://localhost/eskillzTokens');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(express.json());
// initialize routes
app.use('/api',require('./routes/api'));

// error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
const server = app.listen(port, () => {
  console.log('listening on port %s...', server.address().port);
});