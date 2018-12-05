const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//Schema creation
const PatientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Patient = mongoose.model('patient', PatientSchema);