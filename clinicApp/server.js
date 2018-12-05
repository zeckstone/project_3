const express = require('express');
const mongoose = require('mongoose');

const patients = require('./routes/api/patient');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//Database configuration
const db = require('./config/key').mongoURI;

//Mongodb connection
mongoose.connect("mongodb://localhost/Clinic", { useNewUrlParser: true })
    .then(() => console.log('Database is connected!'))
    .catch(err => console.log(err));

//Routes to use
app.use('/api/patients', patients);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));