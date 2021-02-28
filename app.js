const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const userRoute = require('./src/route.js')


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors());


app.use('/users', userRoute);

const PORT = process.env.PORT || 8000;

const dbURL = 'mongodb://localhost:27017/myDB'

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log('Error connecting to: ' + dbURL)
    }
    else {
        console.log('Connected to: ' + dbURL)
    }
})

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});

