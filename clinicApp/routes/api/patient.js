const express = require ('express');
const Router = express.Router();

//Patient model
const Patient = require('../../models/patient');

//GET api/patients
//GET all patients
//Public access
Router.get('/', (req, res) => {
    Patient.find()
      .sort({date: -1})
      .then(patients => res.json(patients));
});

//GET Post api/patients
//Create a Post
//Public access
Router.post('/', (req, res) => {
    const newPatient = new Patient({
        name: req.body.name
    });

    newPatient.save().then(patient => res.json(patient));
});

module.exports = Router;